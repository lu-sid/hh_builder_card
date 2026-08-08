export default function handler(req, res) {
  try {
    const {
      image,
      builderId,
      name,
    } = req.query;

    if (!image) {
      return res.status(400).send(
        "Builder Card image is missing."
      );
    }

    /*
     * Decode values safely.
     */

    const imageUrl =
      decodeURIComponent(image);

    const safeBuilderId =
      builderId
        ? decodeURIComponent(builderId)
        : "HH26-BUILDER";

    const builderName =
      name
        ? decodeURIComponent(name)
        : "HH Goa Builder";

    const title =
      `${builderName} — HH Goa 2026 Builder Card`;

    const description =
      `I just created my HH Goa 2026 Builder Card! Create yours at hh-builder-card.vercel.app`;

    /*
     * Escape HTML so query values
     * cannot break the page.
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

  <!-- Open Graph -->

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
    property="og:image:alt"
    content="HH Goa 2026 Builder Card"
  />

  <meta
    property="og:image:type"
    content="image/png"
  />

  <meta
    property="og:url"
    content="https://hh-builder-card.vercel.app/api/share?image=${encodeURIComponent(
      imageUrl
    )}&builderId=${encodeURIComponent(
      safeBuilderId
    )}"
  />

  <!-- X / Twitter -->

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
      background: #F7F1DF;
      font-family: Arial, sans-serif;
      color: #111111;
      padding: 30px;
    }

    .container {
      width: 100%;
      max-width: 720px;
      text-align: center;
    }

    .brand {
      display: inline-block;
      background: #086B3C;
      color: #F3E600;
      padding: 10px 18px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 4px;
      margin-bottom: 24px;
    }

    .card {
      background: white;
      padding: 12px;
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
      margin: 40px 0 10px;
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
    }

    p {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
      opacity: 0.6;
    }

    a {
      display: inline-block;
      margin-top: 24px;
      padding: 14px 24px;
      background: #FF087F;
      color: white;
      text-decoration: none;
      font-weight: 900;
      text-transform: uppercase;
      border: 3px solid #111111;
      box-shadow: 5px 5px 0 #086B3C;
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

    <a href="https://hh-builder-card.vercel.app/">
      Create Your Own →
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
     * Allow X and other crawlers to
     * fetch the preview.
     */

    res.setHeader(
      "Cache-Control",
      "public, max-age=300, s-maxage=3600"
    );

    return res.status(200).send(html);

  } catch (error) {
    console.error(
      "Share page error:",
      error
    );

    return res.status(500).send(
      "Unable to create share page."
    );
  }
}