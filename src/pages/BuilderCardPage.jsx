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
   * DOWNLOAD CARD
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
   * SHARE ON X
   * ==========================================
   */

async function shareCard() {
  if (sharing || downloading) return;

  setSharing(true);

  try {
    /*
     * ==========================================
     * 1. GENERATE THE ACTUAL CARD IMAGE
     * ==========================================
     */

    const dataUrl =
      await createCardImage();

    /*
     * ==========================================
     * 2. UPLOAD IMAGE TO VERCEL BLOB
     * ==========================================
     */

    const uploadResponse =
      await fetch(
        "/api/upload-card",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            image: dataUrl,

            builderId:
              state.builderId,
          }),
        }
      );

    const uploadData =
      await uploadResponse.json();

    if (!uploadResponse.ok) {
      throw new Error(
        uploadData?.error ||
        "Failed to upload Builder Card."
      );
    }

    /*
     * ==========================================
     * 3. CLEAN SHARE URL
     * ==========================================
     */

    const builderId =
      encodeURIComponent(
        state.builderId ||
        "HH26-BUILDER"
      );

    const shareUrl =
      `${window.location.origin}` +
      `/api/share/${builderId}`;

    /*
     * ==========================================
     * 4. DOWNLOAD CARD
     * ==========================================
     */

    const fileName =
      `${state.builderId || "HH-Goa-Builder-Card"}.png`;

    const link =
      document.createElement("a");

    link.href = dataUrl;

    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    /*
     * ==========================================
     * 5. CLEAN X CAPTION
     * ==========================================
     */

    const text =
      "I’m in the frame. Are you?\n\n" +
      "Just created my HH Goa 2026 Builder ID.\n\n" +
      "Ideas. People. Building. Goa.\n\n" +
      "Create yours → https://hh-builder-card.vercel.app/\n\n" +
      "#FrameInGoa #HHGoa2026\n\n" ;

    /*
     * ==========================================
     * 6. OPEN X
     * ==========================================
     */

    const xUrl =
      `https://x.com/intent/post` +
      `?text=${encodeURIComponent(text)}` +
      `&url=${encodeURIComponent(shareUrl)}`;

    window.location.href =
      xUrl;

  } catch (error) {
    console.error(
      "Share error:",
      error
    );

    alert(
      error?.message ||
      "Unable to prepare your Builder Card."
    );

  } finally {
    setSharing(false);
  }
}

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F7F1DF]
      "
    >

      {/* =====================================================
          HH GOA BACKGROUND
      ====================================================== */}

      {/* Large Green Circle */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#086B3C]
          opacity-20
          blur-[90px]
          transition-transform
          duration-500
          ease-out
        "
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.12}px,
            ${(mouse.y - window.innerHeight / 2) * 0.12}px
          )`,
        }}
      />

      {/* Large Pink Circle */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-20
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#FF087F]
          opacity-20
          blur-[90px]
          transition-transform
          duration-500
          ease-out
        "
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * -0.10}px,
            ${(mouse.y - window.innerHeight / 2) * 0.08}px
          )`,
        }}
      />

      {/* Yellow Circle */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          left-[25%]
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#F3E600]
          opacity-25
          blur-[90px]
          transition-transform
          duration-500
          ease-out
        "
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.08}px,
            ${(mouse.y - window.innerHeight / 2) * -0.10}px
          )`,
        }}
      />

      {/* =====================================================
          GEOMETRIC HH GOA DECORATION
      ====================================================== */}

      {/* Pink diagonal block */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          h-28
          w-6
          rotate-[25deg]
          bg-[#FF087F]
          opacity-90
        "
      />

      {/* Yellow square */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[35%]
          h-16
          w-16
          border-[7px]
          border-[#F3E600]
          rotate-12
        "
      />

      {/* Green square */}

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-[25%]
          h-20
          w-20
          border-[8px]
          border-[#086B3C]
          -rotate-12
        "
      />

      {/* Pink circle */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          bottom-[12%]
          h-24
          w-24
          rounded-full
          bg-[#FF087F]
          opacity-20
        "
      />

      {/* Yellow circle */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[48%]
          h-12
          w-12
          rounded-full
          bg-[#F3E600]
        "
      />

      {/* =====================================================
          TOP BRAND BAR
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          w-full
          items-center
          justify-between
          border-b-4
          border-[#111111]
          bg-[#086B3C]
          px-5
          py-3
          sm:px-8
        "
      >

        <div>

          <p
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.4em]
              text-[#F3E600]
            "
          >
            HH GOA
          </p>

          <p
            className="
              mt-0.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white
            "
          >
            HACK • BUILD • CONNECT
          </p>

        </div>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <span className="h-3 w-3 rounded-full bg-[#F3E600]" />

          <span className="h-3 w-3 rounded-full bg-[#FF087F]" />

          <span className="h-3 w-3 rounded-full bg-white" />

        </div>

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-60px)]
          flex-col
          items-center
          px-4
          py-8
          sm:px-6
          sm:py-12
        "
      >

        {/* ================================================
            SMALL BRANDING LABEL
        ================================================= */}

        <div
          className="
            mb-5
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              h-[4px]
              w-10
              bg-[#FF087F]
            "
          />

          <p
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.35em]
              text-[#086B3C]
            "
          >
            YOUR HH GOA BUILDER CARD
          </p>

          <div
            className="
              h-[4px]
              w-10
              bg-[#F3E600]
            "
          />

        </div>

        {/* ================================================
            CARD
        ================================================= */}

        <div className="relative">

          {/* Yellow offset shadow */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-3
              -right-3
              h-full
              w-full
              bg-[#F3E600]
            "
          />

          {/* Pink offset shadow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-3
              -top-3
              h-full
              w-full
              bg-[#FF087F]
            "
          />

          <div className="relative z-10">

            <BuilderCard
              image={state.image}
              formData={state.formData}
              builderTitle={state.builderTitle}
              builderId={state.builderId}
            />

          </div>

        </div>

        {/* ================================================
            ACTION BUTTONS
        ================================================= */}

        <div
          className="
            mt-10
            flex
            w-full
            max-w-md
            flex-col
            gap-4
          "
        >

          {/* SHARE */}

          <button
            type="button"
            onClick={shareCard}
            disabled={
              sharing ||
              downloading
            }
            className="
              relative
              overflow-hidden
              rounded-none
              border-[3px]
              border-[#111111]
              bg-[#FF087F]
              py-4
              text-lg
              font-black
              uppercase
              tracking-wide
              text-white
              shadow-[6px_6px_0_#F3E600]
              transition
              duration-200
              hover:-translate-y-1
              hover:bg-[#086B3C]
              hover:shadow-[8px_8px_0_#F3E600]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >

            {sharing
              ? "PREPARING CARD..."
              : "SHARE ON X →"}

          </button>

          {/* Instruction */}

          <p
            className="
              -mt-2
              text-center
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-[#111111]/60
            "
          >
            Your card downloads automatically —
            attach it to your X post.
          </p>

          {/* DOWNLOAD */}

          <button
            type="button"
            onClick={downloadCard}
            disabled={
              downloading ||
              sharing
            }
            className="
              rounded-none
              border-[3px]
              border-[#086B3C]
              bg-[#F7F1DF]
              py-4
              text-lg
              font-black
              uppercase
              tracking-wide
              text-[#086B3C]
              shadow-[5px_5px_0_#086B3C]
              transition
              duration-200
              hover:-translate-y-1
              hover:bg-[#F3E600]
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
              rounded-none
              bg-[#111111]
              py-4
              text-lg
              font-black
              uppercase
              tracking-wide
              text-white
              shadow-[5px_5px_0_#FF087F]
              transition
              duration-200
              hover:-translate-y-1
              hover:bg-[#086B3C]
            "
          >

            CREATE ANOTHER CARD

          </button>

        </div>

        {/* ================================================
            BOTTOM BRANDING
        ================================================= */}

        <div
          className="
            mt-10
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#086B3C]
            "
          >
            HH GOA 2026
          </span>

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#FF087F]
            "
          />

          <span
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#111111]/50
            "
          >
            #FRAMEINGOA
          </span>

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#F3E600]
            "
          />

        </div>

      </div>

    </div>
  );
}
export default BuilderCardPage;