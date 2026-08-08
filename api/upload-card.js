import { put } from "@vercel/blob";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const {
      image,
      builderId,
    } = req.body || {};

    if (!image) {
      return res.status(400).json({
        error: "Card image is missing.",
      });
    }

    /*
     * Make sure this is a PNG data URL.
     */

    if (
      !image.startsWith(
        "data:image/png;base64,"
      )
    ) {
      return res.status(400).json({
        error: "Invalid card image.",
      });
    }

    /*
     * Remove the data URL prefix.
     */

    const base64Image =
      image.replace(
        /^data:image\/png;base64,/,
        ""
      );

    /*
     * Convert base64 → Buffer
     */

    const buffer =
      Buffer.from(
        base64Image,
        "base64"
      );

    /*
     * Prevent unnecessarily huge uploads.
     */

    if (
      buffer.length >
      5 * 1024 * 1024
    ) {
      return res.status(400).json({
        error:
          "Builder Card image is too large.",
      });
    }

    /*
     * Generate a safe filename.
     */

    const safeId =
      String(
        builderId || "builder"
      ).replace(
        /[^a-zA-Z0-9_-]/g,
        ""
      );

    const filename =
      `builder-cards/${safeId}-${Date.now()}.png`;

    /*
     * Upload to public Vercel Blob.
     */

    const blob =
      await put(
        filename,
        buffer,
        {
          access: "public",

          contentType:
            "image/png",

          addRandomSuffix: false,
        }
      );

    console.log(
      "Builder Card uploaded:",
      blob.url
    );

    return res.status(200).json({
      success: true,
      imageUrl: blob.url,
    });

  } catch (error) {
    console.error(
      "Card upload error:",
      error
    );

    return res.status(500).json({
      error:
        "Failed to upload Builder Card.",
    });
  }
}