import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toPng } from "html-to-image";
import BuilderCard from "../components/BuilderCard";

function BuilderCardPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [downloading, setDownloading] = useState(false);
  const [sharing, setSharing] = useState(false);

  function handleMouseMove(e) {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  }

  if (!state) {
    return <Navigate to="/" replace />;
  }

async function shareToX() {
  console.log("🔥 SHARE BUTTON CLICKED");

  const card = document.getElementById("builder-card");

  console.log("Card element:", card);

  if (!card) {
    alert("Builder card not found.");
    return;
  }

  setSharing(true);

  try {
    console.log("📸 Creating card image...");

    const dataUrl = await toPng(card, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#F7F1DF",
    });

    console.log("✅ Card image created");

    console.log("📡 Sending image to X API...");

    const response = await fetch("/api/auth/x/post", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        image: dataUrl,
        builderId: state.builderId,
      }),
    });

    console.log("API status:", response.status);

    const result = await response.json();

    console.log("API response:", result);

    /*
     * User isn't connected to X.
     */

    if (
      response.status === 401 ||
      result.error === "X_NOT_CONNECTED"
    ) {
      console.log("➡️ Redirecting to X login...");

      window.location.href = "/api/auth/x/login";

      return;
    }

    /*
     * API error
     */

    if (!response.ok) {
      throw new Error(
        result.error ||
          "Something went wrong while posting to X."
      );
    }

    /*
     * SUCCESS
     */

    console.log("🎉 Posted successfully!");

    if (result.postUrl) {
      window.open(
        result.postUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }

    alert("🎉 Your Builder Card was posted to X!");

  } catch (error) {
    console.error("❌ X sharing error:", error);

    alert(
      error.message ||
        "Something went wrong while sharing on X."
    );

  } finally {
    setSharing(false);
  }
}

  async function downloadCard() {
    const card = document.getElementById("builder-card");

    if (!card) return;

    setDownloading(true);

    try {
      const dataUrl = await toPng(card, {
        cacheBust: true,
        pixelRatio: 4,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `${state.builderId || "HH-Goa-Builder-Card"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert("Failed to download image.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#f8fcff] to-[#ffedd5]"
    >

      {/* Sky Blob */}

      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-sky-500/40 blur-[120px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.15}px,
            ${(mouse.y - window.innerHeight / 2) * 0.15}px
          )`,
        }}
      />

      {/* Orange Blob */}

      <div
        className="absolute top-0 -right-32 h-[560px] w-[560px] rounded-full bg-orange-500/40 blur-[130px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * -0.12}px,
            ${(mouse.y - window.innerHeight / 2) * 0.10}px
          )`,
        }}
      />

      {/* Cyan Blob */}

      <div
        className="absolute -bottom-24 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/35 blur-[120px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.10}px,
            ${(mouse.y - window.innerHeight / 2) * -0.10}px
          )`,
        }}
      />

      {/* Purple Blob */}

      <div
        className="absolute bottom-20 right-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/30 blur-[110px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * -0.08}px,
            ${(mouse.y - window.innerHeight / 2) * -0.08}px
          )`,
        }}
      />

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center px-6 py-12">

        <BuilderCard
          image={state.image}
          formData={state.formData}
          builderTitle={state.builderTitle}
          builderId={state.builderId}
        />

        <div className="mt-10 flex w-full max-w-md flex-col gap-4">

          <button
            onClick={downloadCard}
            disabled={downloading}
            className="rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-orange-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-60"
          >
            {downloading
              ? "Downloading..."
              : "Download Builder Card"}
          </button>

          <button
  type="button"
  onClick={shareToX}
  disabled={sharing || downloading}
  className="
    rounded-2xl
    border-[3px]
    border-[#111111]
    bg-[#FF087F]
    py-4
    text-lg
    font-black
    uppercase
    tracking-wide
    text-white
    shadow-[5px_5px_0_#F3E600]
    transition
    hover:-translate-y-1
    hover:bg-[#086B3C]
    disabled:cursor-not-allowed
    disabled:opacity-60
  "
>
  {sharing
    ? "POSTING TO X..."
    : "SHARE MY CARD ON X →"}
</button>
          

          <button
            onClick={() => navigate("/")}
            className="rounded-2xl bg-slate-900 py-4 text-lg font-semibold text-white transition hover:bg-slate-800"
          >
            Create Another Card
          </button>

        </div>

      </div>

    </div>
  );
}

export default BuilderCardPage;