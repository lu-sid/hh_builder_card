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
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    /*
     * Get the X access token belonging
     * to the current visitor.
     */

    const accessToken =
      getCookie(
        req,
        "x_access_token"
      );

    if (!accessToken) {
      return res.status(401).json({
        error: "X_NOT_CONNECTED",
      });
    }

    const {
      image,
      builderId,
    } = req.body || {};

    /*
     * Check image.
     */

    if (!image) {
      return res.status(400).json({
        error:
          "Builder Card image is missing.",
      });
    }

    /*
     * Remove PNG data URL prefix.
     */

    const base64Image =
      image.replace(
        /^data:image\/png;base64,/,
        ""
      );

    /*
     * Check image size.
     */

    const imageSize =
      Buffer.byteLength(
        base64Image,
        "base64"
      );

    if (
      imageSize >
      5 * 1024 * 1024
    ) {
      return res.status(400).json({
        error:
          "Builder Card image is too large.",
      });
    }

    /*
     * ==========================================
     * UPLOAD IMAGE TO X
     * ==========================================
     */

    const uploadResponse =
      await fetch(
        "https://api.x.com/2/media/upload",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${accessToken}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            media:
              base64Image,

            media_category:
              "tweet_image",

            media_type:
              "image/png",
          }),
        }
      );

    const uploadData =
      await uploadResponse.json();

    if (
      !uploadResponse.ok
    ) {
      console.error(
        "X media upload error:",
        uploadData
      );

      return res.status(
        uploadResponse.status
      ).json({
        error:
          uploadData?.detail ||
          "X image upload failed.",
      });
    }

    const mediaId =
      uploadData?.data?.id;

    if (!mediaId) {
      return res.status(500).json({
        error:
          "X did not return a media ID.",
      });
    }

    /*
     * ==========================================
     * CREATE X POST
     * ==========================================
     */

    const postResponse =
      await fetch(
        "https://api.x.com/2/tweets",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${accessToken}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            text:
              "I just created my HH Goa 2026 Builder Card! 🌴\n\n" +
              `Builder ID: ${
                builderId ||
                "HH26-BUILDER"
              }\n\n` +
              "#FrameInGoa #HHGoa2026",

            media: {
              media_ids: [
                mediaId,
              ],
            },
          }),
        }
      );

    const postData =
      await postResponse.json();

    if (
      !postResponse.ok
    ) {
      console.error(
        "X post error:",
        postData
      );

      return res.status(
        postResponse.status
      ).json({
        error:
          postData?.detail ||
          "X post creation failed.",
      });
    }

    const postId =
      postData?.data?.id;

    /*
     * Return success to React.
     */

    return res.status(200).json({
      success: true,

      postId,

      postUrl: postId
        ? `https://x.com/i/status/${postId}`
        : null,
    });

  } catch (error) {
    console.error(
      "X posting error:",
      error
    );

    return res.status(500).json({
      error:
        "Something went wrong while posting to X.",
    });
  }
}