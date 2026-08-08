import crypto from "crypto";

function base64url(buffer) {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export default function handler(req, res) {
  try {
    // Generate OAuth state
    const state = base64url(
      crypto.randomBytes(32)
    );

    // Generate PKCE code verifier
    const codeVerifier = base64url(
      crypto.randomBytes(32)
    );

    // Generate PKCE code challenge
    const codeChallenge = base64url(
      crypto
        .createHash("sha256")
        .update(codeVerifier)
        .digest()
    );

    const redirectUri =
      "https://hh-builder-card.vercel.app/api/auth/x/callback";

    // Make sure X_CLIENT_ID exists
    if (!process.env.X_CLIENT_ID) {
      console.error("X_CLIENT_ID is missing");

      return res.status(500).send(
        "X_CLIENT_ID environment variable is missing."
      );
    }

    const params = new URLSearchParams({
      response_type: "code",

      client_id:
        process.env.X_CLIENT_ID,

      redirect_uri:
        redirectUri,

      scope:
        "tweet.read tweet.write users.read media.write offline.access",

      state,

      code_challenge:
        codeChallenge,

      code_challenge_method:
        "S256",
    });

    // Save OAuth state + PKCE verifier
    // temporarily in secure cookies
    res.setHeader("Set-Cookie", [
      `x_oauth_state=${encodeURIComponent(
        state
      )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,

      `x_code_verifier=${encodeURIComponent(
        codeVerifier
      )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    ]);

    const authorizationUrl =
      `https://x.com/i/oauth2/authorize?${params.toString()}`;

    console.log(
      "Redirecting to X OAuth..."
    );

    return res.redirect(
      302,
      authorizationUrl
    );

  } catch (error) {
    console.error(
      "X login error:",
      error
    );

    return res.status(500).send(
      "Unable to start X authorization."
    );
  }
}