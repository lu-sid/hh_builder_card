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
    const state = base64url(
      crypto.randomBytes(32)
    );

    const codeVerifier = base64url(
      crypto.randomBytes(32)
    );

    const codeChallenge = base64url(
      crypto
        .createHash("sha256")
        .update(codeVerifier)
        .digest()
    );

    const redirectUri =
      "https://hh-builder-card.vercel.app/api/auth/x/callback";

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

    /*
     * Store OAuth state and PKCE verifier
     * temporarily in secure cookies.
     */

    res.setHeader("Set-Cookie", [
      `x_oauth_state=${encodeURIComponent(
        state
      )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,

      `x_code_verifier=${encodeURIComponent(
        codeVerifier
      )}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    ]);

    return res.redirect(
      302,
      `https://x.com/i/oauth2/authorize?${params.toString()}`
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