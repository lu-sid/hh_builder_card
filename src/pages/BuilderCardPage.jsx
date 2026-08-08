import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

  if (!state) {
    return null;
  }

  function handleMouseMove(e) {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  }

  /*
   * ==========================================
   * CREATE PNG
   * ==========================================
   */

  async function createCardImage() {
    const card = document.getElementById(
      "builder-card"
    );

    if (!card) {
      throw new Error(
        "Builder card could not be found."
      );
    }

    return await toPng(card, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#F7F1DF",
    });
  }

  /*
   * ==========================================
   * DOWNLOAD
   * ==========================================
   */

  async function downloadCard() {
    if (downloading || sharing) return;

    setDownloading(true);

    try {
      const dataUrl =
        await createCardImage();

      const link =
        document.createElement("a");

      link.download =
        `${state.builderId || "HH-Goa-Builder-Card"}.png`;

      link.href = dataUrl;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

    } catch (error) {
      console.error(
        "Download error:",
        error
      );

      alert(
        "Failed to download your Builder Card."
      );

    } finally {
      setDownloading(false);
    }
  }

  /*
   * ==========================================
   * SHARE CARD
   * ==========================================
   */

async function shareCard() {
  if (sharing || downloading) return;

  setSharing(true);

  try {
    const dataUrl = await createCardImage();

    const response = await fetch(dataUrl);
    const blob = await response.blob();

    const fileName =
      `${state.builderId || "HH-Goa-Builder-Card"}.png`;

    const file = new File(
      [blob],
      fileName,
      {
        type: "image/png",
      }
    );

    const text =
      "I just created my HH Goa 2026 Builder Card! 🌴\n\n#FrameInGoa #HHGoa2026";

    /*
     * PHONE / BROWSER WITH FILE SHARING
     */

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({
        files: [file],
      })
    ) {
      await navigator.share({
        title: "HH Goa 2026 Builder Card",
        text,
        files: [file],
      });

      return;
    }

    /*
     * DESKTOP FALLBACK
     */

    const link = document.createElement("a");

    link.href = dataUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    /*
     * Give the browser time to start the download
     * before opening X.
     */

    setTimeout(() => {
      window.location.href =
        `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
    }, 500);

  } catch (error) {

    if (error?.name === "AbortError") {
      return;
    }

    console.error("Share error:", error);

    alert(
      "Unable to share the Builder Card."
    );

  } finally {
    setSharing(false);
  }
}

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#F7F1DF]"
    >

      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-sky-500/30 blur-[120px] transition-transform duration-500"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.08}px,
            ${(mouse.y - window.innerHeight / 2) * 0.08}px
          )`,
        }}
      />

      <div
        className="pointer-events-none absolute -right-32 top-0 h-[560px] w-[560px] rounded-full bg-orange-500/30 blur-[130px] transition-transform duration-500"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * -0.06}px,
            ${(mouse.y - window.innerHeight / 2) * 0.06}px
          )`,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/25 blur-[120px] transition-transform duration-500"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.05}px,
            ${(mouse.y - window.innerHeight / 2) * -0.05}px
          )`,
        }}
      />

      {/* ======================================
          CONTENT
      ====================================== */}

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-10 sm:px-6">

        <BuilderCard
          image={state.image}
          formData={state.formData}
          builderTitle={state.builderTitle}
          builderId={state.builderId}
        />

        {/* ====================================
            BUTTONS
        ==================================== */}

        <div className="mt-8 flex w-full max-w-md flex-col gap-4">

          {/* SHARE */}

          <button
            type="button"
            onClick={shareCard}
            disabled={
              sharing ||
              downloading
            }
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
              ? "PREPARING CARD..."
              : "SHARE MY CARD →"}
          </button>

          {/* DOWNLOAD */}

          <button
            type="button"
            onClick={downloadCard}
            disabled={
              downloading ||
              sharing
            }
            className="
              rounded-2xl
              border-2
              border-[#086B3C]
              bg-white
              py-4
              text-lg
              font-black
              uppercase
              tracking-wide
              text-[#086B3C]
              transition
              hover:bg-[#086B3C]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {downloading
              ? "DOWNLOADING..."
              : "DOWNLOAD CARD"}
          </button>

          {/* CREATE ANOTHER */}

          <button
            type="button"
            onClick={() =>
              navigate("/")
            }
            className="
              rounded-2xl
              bg-[#111111]
              py-4
              text-lg
              font-black
              uppercase
              tracking-wide
              text-white
              transition
              hover:bg-[#086B3C]
            "
          >
            CREATE ANOTHER CARD
          </button>

        </div>

      </div>
    </div>
  );
}

export default BuilderCardPage;