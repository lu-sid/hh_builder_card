function getCookie(req, name) {
  const cookies =
    req.headers.cookie || "";

  const match = cookies
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) =>
      cookie.startsWith(`${name}=`)
    );

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
    } = req.query;

    /*
     * User rejected authorization.
     */

    if (error) {
      console.error(
        "X authorization denied:",
        error
      );

      return res.redirect(
        302,
        "/builder-card?x_error=denied"
      );
    }

    /*
     * Retrieve OAuth cookies.
     */

    const savedState = getCookie(
      req,
      "x_oauth_state"
    );

    const codeVerifier = getCookie(
      req,
      "x_code_verifier"
    );

    /*
     * Validate OAuth state.
     */

    if (
      !state ||
      state !== savedState
    ) {
      return res.status(400).send(
        "Invalid OAuth state."
      );
    }

    /*
     * Validate PKCE verifier.
     */

    if (!codeVerifier) {
      return res.status(400).send(
        "Missing PKCE verifier."
      );
    }

    const redirectUri =
      "https://hh-builder-card.vercel.app/api/auth/x/callback";

    /*
     * Exchange authorization code
     * for X access token.
     */

    const body =
      new URLSearchParams({
        code,

        grant_type:
          "authorization_code",

        client_id:
          process.env.X_CLIENT_ID,

        redirect_uri:
          redirectUri,

        code_verifier:
          codeVerifier,
      });

    const tokenResponse =
      await fetch(
        "https://api.x.com/2/oauth2/token",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body,
        }
      );

    const tokenData =
      await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error(
        "X token error:",
        tokenData
      );

      return res.status(500).send(
        "X authentication failed."
      );
    }

    /*
     * Save the access token in a secure
     * HttpOnly cookie.
     */

    const cookies = [
      `x_access_token=${encodeURIComponent(
        tokenData.access_token
      )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=7200`,
    ];

    /*
     * Save refresh token if provided.
     */

    if (
      tokenData.refresh_token
    ) {
      cookies.push(
        `x_refresh_token=${encodeURIComponent(
          tokenData.refresh_token
        )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`
      );
    }

    res.setHeader(
      "Set-Cookie",
      cookies
    );

    /*
     * Send user back to Builder Card.
     */

    return res.redirect(
      302,
      "/builder-card?x_connected=true"
    );

  } catch (error) {
    console.error(
      "X callback error:",
      error
    );

    return res.status(500).send(
      "Something went wrong while connecting X."
    );
  }
}