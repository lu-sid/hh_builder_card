import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadBox from "../components/UploadBox";

function Home() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    tech: "",
  });

  const builderTitles = [
    "Idea Chaser",
    "Wildcard",
    "The Catalyst",
    "Curious Mind",
    "Bold Thinker",
    "The Explorer",
    "Creative Spark",
    "The Connector",
    "Possibility Seeker",
    "Free Thinker",
    "Vision Maker",
    "The Experimenter",
    "Thought Starter",
    "Future Maker",
    "Trailblazer",
    "Change Maker",
  ];

  function generateCard() {
    if (!image) {
      alert("Please add a photo or take a selfie.");
      return;
    }

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.role.trim()) {
      alert("Please enter your role.");
      return;
    }

    const builderTitle =
      builderTitles[
        Math.floor(Math.random() * builderTitles.length)
      ];

    const builderId =
      "HH26-" + Math.floor(1000 + Math.random() * 9000);

    navigate("/builder-card", {
      state: {
        image,
        formData,
        builderTitle,
        builderId,
      },
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F1DF]">

      {/* =====================================================
          BACKGROUND FUN ELEMENTS
      ====================================================== */}

      {/* Big yellow corner */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F3E600]" />

      {/* Pink blob */}
      <div className="pointer-events-none absolute -left-32 top-[35%] h-80 w-80 rounded-full bg-[#FF087F]/10" />

      {/* Green blob */}
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#086B3C]/10" />

      {/* Pink slash */}
      <div className="pointer-events-none absolute right-[13%] top-40 h-36 w-6 rotate-[25deg] bg-[#FF087F]" />

      {/* Small green circle */}
      <div className="pointer-events-none absolute left-[6%] top-[22%] h-12 w-12 rounded-full border-[8px] border-[#086B3C]" />

      {/* Yellow square */}
      <div className="pointer-events-none absolute bottom-[18%] left-[4%] h-8 w-8 rotate-12 bg-[#F3E600]" />

      {/* Pink dot */}
      <div className="pointer-events-none absolute right-[8%] bottom-[28%] h-5 w-5 rounded-full bg-[#FF087F]" />


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative z-10 mx-auto w-full max-w-2xl px-5 py-8 sm:px-8 sm:py-12">


        {/* =================================================
            TOP BRANDING
        ================================================== */}

        <div className="mb-8 flex items-start justify-between">

          <div>

            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-[#FF087F]">
              GOA / INDIA
            </p>

            <h1 className="mt-3 text-6xl font-black uppercase leading-[0.76] tracking-[-0.08em] text-[#086B3C] sm:text-7xl">
              BUILD
            </h1>

            <h1 className="ml-7 mt-1 text-6xl font-black uppercase leading-[0.76] tracking-[-0.08em] text-[#111111] sm:text-7xl">
              YOUR ID
            </h1>

          </div>


          <div className="pt-1 text-right">

            <p className="text-3xl font-black tracking-[-0.08em] text-[#111111]">
              HH
            </p>

            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.35em] text-[#086B3C]">
              GOA 2026
            </p>

            <div className="relative mt-4 ml-auto h-10 w-10">

              <div className="absolute inset-0 rounded-full bg-[#F3E600]" />

              <div className="absolute left-2 top-2 h-6 w-6 rounded-full border-[3px] border-[#111111]" />

            </div>

          </div>

        </div>


        {/* =================================================
            INTRO LINE
        ================================================== */}

        <div className="mb-7 flex items-center gap-3">

          <div className="h-[5px] w-16 bg-[#FF087F]" />

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111111]/60">
            BUILD • CONNECT • CREATE
          </p>

          <div className="ml-auto flex gap-1">

            <span className="h-3 w-3 rounded-full bg-[#086B3C]" />

            <span className="h-3 w-3 rounded-full bg-[#FF087F]" />

            <span className="h-3 w-3 rounded-full bg-[#F3E600]" />

          </div>

        </div>


        {/* =================================================
            FORM CARD
        ================================================== */}

        <div
          className="
            overflow-hidden
            border-[3px]
            border-[#111111]
            bg-[#F7F1DF]
            shadow-[12px_12px_0_#086B3C]
          "
        >

          {/* TOP BAR */}

          <div className="relative flex items-center justify-between bg-[#086B3C] px-6 py-4">

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F3E600]">
                HH GOA
              </p>

              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.25em] text-white/60">
                BUILDER REGISTRATION / 2026
              </p>

            </div>


            {/* Decorative dots */}

            <div className="flex gap-2">

              <span className="h-3 w-3 rounded-full bg-[#F3E600]" />

              <span className="h-3 w-3 rounded-full bg-[#FF087F]" />

              <span className="h-3 w-3 rounded-full bg-white" />

            </div>

          </div>


          <div className="p-6 sm:p-8">


            {/* =================================================
                PHOTO SECTION
            ================================================== */}

            <section>

              <div className="mb-4 flex items-end justify-between">

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#FF087F]">
                    01 / PHOTO
                  </p>

                  <h2 className="mt-1 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#111111]">
                    SHOW US YOU
                  </h2>

                </div>

                <div className="hidden text-right sm:block">

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#111111]/40">
                    SELFIE
                  </p>

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#111111]/40">
                    OR PHOTO
                  </p>

                </div>

              </div>


              {/* Photo box */}

              <div className="border-2 border-[#111111] bg-white p-2 shadow-[5px_5px_0_#F3E600]">

                <UploadBox
                  image={image}
                  setImage={setImage}
                />

              </div>

            </section>


            {/* =================================================
                IDENTITY
            ================================================== */}

            <section className="mt-9">

              <div className="mb-6">

                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#FF087F]">
                  02 / IDENTITY
                </p>

                <h2 className="mt-1 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#111111]">
                  TELL US ABOUT YOU
                </h2>

              </div>


              {/* NAME */}

              <div className="mb-6">

                <label className="mb-2 flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#086B3C] text-[9px] font-black text-white">
                    01
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#086B3C]">
                    YOUR NAME
                  </span>

                </label>


                <input
                  type="text"
                  placeholder="WHAT SHOULD WE CALL YOU?"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    border-[3px]
                    border-[#111111]
                    bg-white
                    px-4
                    py-4
                    text-base
                    font-black
                    uppercase
                    tracking-wide
                    text-[#111111]
                    outline-none
                    placeholder:text-[#111111]/25
                    transition
                    focus:border-[#FF087F]
                    focus:shadow-[5px_5px_0_#F3E600]
                  "
                />

              </div>


              {/* ROLE */}

              <div className="mb-6">

                <label className="mb-2 flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF087F] text-[9px] font-black text-white">
                    02
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#086B3C]">
                    WHAT DO YOU DO?
                  </span>

                </label>


                <input
                  type="text"
                  placeholder="STUDENT • CREATOR • DESIGNER • DREAMER"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value,
                    })
                  }
                  className="
                    w-full
                    border-[3px]
                    border-[#111111]
                    bg-white
                    px-4
                    py-4
                    text-base
                    font-black
                    uppercase
                    tracking-wide
                    text-[#111111]
                    outline-none
                    placeholder:text-[#111111]/25
                    transition
                    focus:border-[#FF087F]
                    focus:shadow-[5px_5px_0_#F3E600]
                  "
                />

              </div>


              {/* INTEREST */}

              <div>

                <label className="mb-2 flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F3E600] text-[9px] font-black text-[#111111]">
                    03
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#086B3C]">
                    WHAT ARE YOU INTO?
                  </span>

                </label>


                <input
                  type="text"
                  placeholder="AI • MUSIC • DESIGN • IDEAS • FOOD • ANYTHING"
                  value={formData.tech}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tech: e.target.value,
                    })
                  }
                  className="
                    w-full
                    border-[3px]
                    border-[#111111]
                    bg-white
                    px-4
                    py-4
                    text-base
                    font-black
                    uppercase
                    tracking-wide
                    text-[#111111]
                    outline-none
                    placeholder:text-[#111111]/25
                    transition
                    focus:border-[#FF087F]
                    focus:shadow-[5px_5px_0_#F3E600]
                  "
                />

              </div>

            </section>


            {/* =================================================
                RANDOM BUILDER NOTE
            ================================================== */}

            <div className="relative mt-8 overflow-hidden bg-[#F3E600] px-5 py-4">

              <div className="absolute -right-3 -top-5 h-16 w-16 rotate-12 border-[5px] border-[#FF087F]" />

              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#111111]/60">
                ONE CARD.
              </p>

              <p className="mt-1 text-xl font-black uppercase leading-none tracking-[-0.03em] text-[#111111]">
                YOUR ENERGY.
              </p>

            </div>


            {/* =================================================
                GENERATE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={generateCard}
              className="
                group
                relative
                mt-6
                w-full
                overflow-hidden
                bg-[#FF087F]
                px-6
                py-5
                text-left
                transition
                hover:bg-[#086B3C]
                active:translate-y-1
              "
            >

              {/* Decorative circle */}

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[10px] border-[#F3E600]/70 transition-transform duration-300 group-hover:rotate-45" />


              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60">
                    READY?
                  </p>

                  <p className="mt-1 text-2xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-3xl">
                    GENERATE MY CARD
                  </p>

                </div>


                <div className="text-4xl font-black text-[#F3E600] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </div>

              </div>

            </button>


            {/* =================================================
                BOTTOM META
            ================================================== */}

            <div className="mt-6 flex items-center justify-between border-t-2 border-[#111111]/15 pt-4">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#111111]/45">
                HH GOA / 2026
              </p>

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FF087F]">
                #FRAMEINGOA
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            FOOTER
        ================================================== */}

        <div className="mt-8 flex items-center justify-between">

          <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#111111]/45">
            HACK • BUILD • CONNECT
          </p>

          <div className="flex items-center gap-1">

            <span className="h-3 w-8 bg-[#086B3C]" />

            <span className="h-3 w-3 bg-[#FF087F]" />

            <span className="h-3 w-3 bg-[#F3E600]" />

          </div>

        </div>

      </main>

    </div>
  );
}

export default Home;