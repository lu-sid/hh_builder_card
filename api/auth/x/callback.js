function getCookie(req, name) {
  const cookies = req.headers.cookie || "";

  const match = cookies
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (!match) {
    return null;
  }

  return decodeURIComponent(
    match.substring(name.length + 1)
  );
}

export default async function handler(req, res) {
  try {
    const {
      code,
      state,
      error,
      error_description,
    } = req.query;

    console.log("========== X CALLBACK ==========");
    console.log("Has code:", !!code);
    console.log("Has state:", !!state);
    console.log("X error:", error);
    console.log("X error description:", error_description);

    if (error) {
      return res.status(400).send(
        `X authorization error: ${
          error_description || error
        }`
      );
    }

    if (!code) {
      return res.status(400).send(
        "No authorization code received from X."
      );
    }

    const savedState = getCookie(
      req,
      "x_oauth_state"
    );

    const codeVerifier = getCookie(
      req,
      "x_code_verifier"
    );

    console.log(
      "Has saved state:",
      !!savedState
    );

    console.log(
      "Has code verifier:",
      !!codeVerifier
    );

    if (!state || state !== savedState) {
      console.error(
        "STATE MISMATCH"
      );

      return res.status(400).send(
        "Invalid OAuth state."
      );
    }

    if (!codeVerifier) {
      return res.status(400).send(
        "Missing PKCE verifier."
      );
    }

    if (!process.env.X_CLIENT_ID) {
      return res.status(500).send(
        "X_CLIENT_ID environment variable is missing."
      );
    }

    if (!process.env.X_CLIENT_SECRET) {
      return res.status(500).send(
        "X_CLIENT_SECRET environment variable is missing."
      );
    }

    const redirectUri =
      "https://hh-builder-card.vercel.app/api/auth/x/callback";

    /*
     * Confidential client authentication.
     *
     * X expects:
     *
     * Authorization: Basic base64(client_id:client_secret)
     */

    const credentials = Buffer.from(
      `${process.env.X_CLIENT_ID}:${process.env.X_CLIENT_SECRET}`
    ).toString("base64");

    const body = new URLSearchParams({
      code: code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    });

    console.log(
      "Sending authorization code to X..."
    );

    const tokenResponse = await fetch(
      "https://api.x.com/2/oauth2/token",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",

          Authorization:
            `Basic ${credentials}`,
        },

        body: body.toString(),
      }
    );

    const tokenData =
      await tokenResponse.json();

    console.log(
      "X token response status:",
      tokenResponse.status
    );

    console.log(
      "X token response:",
      tokenData
    );

    if (!tokenResponse.ok) {
      /*
       * IMPORTANT:
       * Show the actual X error temporarily.
       */
      return res.status(500).send(
        `X token exchange failed.

Error: ${
          tokenData.error || "unknown"
        }

Description: ${
          tokenData.error_description ||
          "No description provided"
        }

Status: ${
          tokenResponse.status
        }`
      );
    }

    if (!tokenData.access_token) {
      return res.status(500).send(
        "X did not return an access token."
      );
    }

    /*
     * Save access token.
     */

    const cookies = [
      `x_access_token=${encodeURIComponent(
        tokenData.access_token
      )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=7200`,
    ];

    /*
     * Save refresh token.
     */

    if (tokenData.refresh_token) {
      cookies.push(
        `x_refresh_token=${encodeURIComponent(
          tokenData.refresh_token
        )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`
      );
    }

    /*
     * Clear temporary OAuth cookies.
     */

    cookies.push(
      "x_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    );

    cookies.push(
      "x_code_verifier=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    );

    res.setHeader(
      "Set-Cookie",
      cookies
    );

    console.log(
      "========== X AUTH SUCCESS =========="
    );

    return res.redirect(
      302,
      "/builder-card?x_connected=true"
    );

  } catch (error) {
    console.error(
      "X callback exception:",
      error
    );

    return res.status(500).send(
      `X callback error: ${
        error.message
      }`
    );
  }
}