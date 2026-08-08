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

    if (!image.startsWith("data:image/png;base64,")) {
      return res.status(400).json({
        error: "Invalid card image.",
      });
    }

    const base64Image = image.replace(
      /^data:image\/png;base64,/,
      ""
    );

    const buffer = Buffer.from(
      base64Image,
      "base64"
    );

    if (buffer.length > 5 * 1024 * 1024) {
      return res.status(400).json({
        error: "Builder Card image is too large.",
      });
    }

    const safeId = String(
      builderId || "HH26-BUILDER"
    ).replace(
      /[^a-zA-Z0-9_-]/g,
      ""
    );

    /*
     * IMPORTANT:
     * Keep the filename predictable.
     *
     * This lets /api/share/[builderId]
     * find the correct image later.
     */

    const filename =
      `builder-cards/${safeId}.png`;

    const blob = await put(
      filename,
      buffer,
      {
        access: "public",

        contentType: "image/png",

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
      builderId: safeId,
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