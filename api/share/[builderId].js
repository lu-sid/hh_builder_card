import { list } from "@vercel/blob";

export default async function handler(req, res) {
  try {
    const builderId =
      req.query.builderId;

    if (!builderId) {
      return res.status(400).send(
        "Builder ID is missing."
      );
    }

    /*
     * Only allow safe Builder IDs.
     */

    const safeId = String(
      builderId
    ).replace(
      /[^a-zA-Z0-9_-]/g,
      ""
    );

    if (!safeId) {
      return res.status(400).send(
        "Invalid Builder ID."
      );
    }

    /*
     * Find the uploaded Builder Card
     * inside Vercel Blob.
     */

    const result = await list({
      prefix:
        `builder-cards/${safeId}.png`,
    });

    const blob =
      result.blobs?.find(
        (item) =>
          item.pathname ===
          `builder-cards/${safeId}.png`
      );

    if (!blob) {
      return res.status(404).send(
        "Builder Card not found."
      );
    }

    const imageUrl =
      blob.url;

    /*
     * ==========================================
     * PAGE INFORMATION
     * ==========================================
     */

    const title =
      "HH Goa 2026 Builder Card";

    const description =
      "I just created my HH Goa 2026 Builder Card. Create yours and join the frame.";

    /*
     * Escape HTML values.
     */

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    const safeTitle =
      escapeHtml(title);

    const safeDescription =
      escapeHtml(description);

    const safeImage =
      escapeHtml(imageUrl);

    /*
     * ==========================================
     * SHARE PAGE
     * ==========================================
     */

    const html = `
<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8" />

  <title>${safeTitle}</title>

  <meta
    name="description"
    content="${safeDescription}"
  />

  <!-- ================================
       OPEN GRAPH
  ================================= -->

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:title"
    content="${safeTitle}"
  />

  <meta
    property="og:description"
    content="${safeDescription}"
  />

  <meta
    property="og:image"
    content="${safeImage}"
  />

  <meta
    property="og:image:type"
    content="image/png"
  />

  <meta
    property="og:image:alt"
    content="HH Goa 2026 Builder Card"
  />

  <!-- ================================
       X / TWITTER
  ================================= -->

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="${safeTitle}"
  />

  <meta
    name="twitter:description"
    content="${safeDescription}"
  />

  <meta
    name="twitter:image"
    content="${safeImage}"
  />

  <meta
    name="twitter:image:alt"
    content="HH Goa 2026 Builder Card"
  />

  <style>

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 30px;

      background: #F7F1DF;

      font-family:
        Arial,
        Helvetica,
        sans-serif;

      color: #111111;
    }

    .container {
      width: 100%;
      max-width: 700px;

      text-align: center;
    }

    .brand {
      display: inline-block;

      padding: 10px 18px;

      background: #086B3C;

      color: #F3E600;

      font-size: 13px;

      font-weight: 900;

      letter-spacing: 4px;

      margin-bottom: 25px;
    }

    .card {
      padding: 10px;

      background: white;

      border: 3px solid #111111;

      box-shadow:
        10px 10px 0 #FF087F,
        18px 18px 0 #F3E600;
    }

    img {
      display: block;

      width: 100%;

      height: auto;
    }

    h1 {
      margin-top: 40px;

      font-size: 28px;

      font-weight: 900;

      text-transform: uppercase;
    }

    p {
      font-size: 13px;

      font-weight: 700;

      opacity: 0.55;
    }

    a {
      display: inline-block;

      margin-top: 20px;

      padding: 14px 24px;

      background: #FF087F;

      color: white;

      border: 3px solid #111111;

      box-shadow:
        5px 5px 0 #086B3C;

      text-decoration: none;

      font-weight: 900;

      text-transform: uppercase;
    }

  </style>

</head>

<body>

  <main class="container">

    <div class="brand">
      HH GOA / 2026
    </div>

    <div class="card">

      <img
        src="${safeImage}"
        alt="HH Goa 2026 Builder Card"
      />

    </div>

    <h1>
      ${safeTitle}
    </h1>

    <p>
      #FrameInGoa · HH Goa 2026
    </p>

    <a
      href="https://hh-builder-card.vercel.app/"
    >
      CREATE YOUR OWN →
    </a>

  </main>

</body>

</html>
`;

    res.setHeader(
      "Content-Type",
      "text/html; charset=utf-8"
    );

    /*
     * Important for social crawlers.
     */

    res.setHeader(
      "Cache-Control",
      "public, max-age=300, s-maxage=3600"
    );

    return res
      .status(200)
      .send(html);

  } catch (error) {
    console.error(
      "Share page error:",
      error
    );

    return res.status(500).send(
      "Unable to create Builder Card share page."
    );
  }
}