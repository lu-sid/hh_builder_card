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

  const [builderTitle, setBuilderTitle] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function generateBuilderClass() {
    const classes = [
      "IDEA MACHINE",
      "SIGNAL FINDER",
      "SHIP MODE",
      "CURIOUS BUILDER",
      "PROBLEM SOLVER",
      "CHAOS ENGINEER",
      "MIDNIGHT BUILDER",
      "SYSTEM THINKER",
      "PIXEL PUSHER",
      "CODE ALCHEMIST",
    ];

    return classes[
      Math.floor(
        Math.random() * classes.length
      )
    ];
  }

  function generateCard() {
    if (!image) {
      alert("Add your photo first.");
      return;
    }

    if (!formData.name.trim()) {
      alert("Tell us your name.");
      return;
    }

    const title =
      builderTitle ||
      generateBuilderClass();

    const builderId =
      "HH26-" +
      Math.floor(
        1000 + Math.random() * 9000
      );

    navigate("/builder-card", {
      state: {
        image,
        formData,
        builderTitle: title,
        builderId,
      },
    });
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#F7F1DF]
        text-[#111111]
      "
    >

      {/* ==================================================
          TOP BAR
      ================================================== */}

      <header
        className="
          border-b-[3px]
          border-[#111111]
          bg-[#086B3C]
          px-5
          py-4
          sm:px-8
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
          "
        >

          {/* LOGO */}

          <div>

            <div
              className="
                text-xl
                font-black
                uppercase
                tracking-[-0.04em]
                text-white
              "
            >
              HH GOA
            </div>

            <div
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.35em]
                text-[#F3E600]
              "
            >
              HACKER HOUSE
            </div>

          </div>

          {/* DATE */}

          <div
            className="
              text-right
              text-[9px]
              font-black
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            <div>
              GOA, INDIA
            </div>

            <div className="text-[#F3E600]">
              28—31 OCT 2026
            </div>
          </div>

        </div>

      </header>


      {/* ==================================================
          HERO
      ================================================== */}

      <main
        className="
          mx-auto
          max-w-6xl
          px-5
          pb-16
          pt-10
          sm:px-8
          sm:pt-16
        "
      >

        <section
          className="
            relative
            overflow-hidden
            border-[3px]
            border-[#111111]
            bg-[#F7F1DF]
            shadow-[10px_10px_0_#086B3C]
          "
        >

          {/* PINK BLOCK */}

          <div
            className="
              absolute
              right-0
              top-0
              h-28
              w-8
              bg-[#FF087F]
            "
          />

          {/* YELLOW CIRCLE */}

          <div
            className="
              absolute
              -right-12
              top-20
              h-40
              w-40
              rounded-full
              bg-[#F3E600]
            "
          />

          {/* HERO CONTENT */}

          <div
            className="
              relative
              z-10
              px-6
              py-10
              sm:px-12
              sm:py-14
            "
          >

            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.4em]
                text-[#FF087F]
              "
            >
              BUILDER ID / TASK #1
            </p>


            <h1
              className="
                mt-3
                max-w-3xl
                text-[clamp(3.5rem,10vw,7rem)]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.07em]
                text-[#086B3C]
              "
            >
              BUILD
              <br />

              <span className="text-[#111111]">
                YOUR
              </span>

              <br />

              <span className="text-[#FF087F]">
                IDENTITY.
              </span>
            </h1>


            <div
              className="
                mt-8
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  h-[5px]
                  w-14
                  bg-[#FF087F]
                "
              />

              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#111111]
                "
              >
                LESS NOISE. MORE SIGNAL.
              </p>

            </div>


            <p
              className="
                mt-6
                max-w-xl
                text-sm
                font-semibold
                leading-relaxed
                text-[#111111]/70
              "
            >
              Create your own HH Goa 2026
              Builder ID. Add your photo,
              tell us what you're into,
              and get your personalized
              #FrameInGoa card.
            </p>

          </div>


          {/* BOTTOM STRIP */}

          <div
            className="
              relative
              flex
              items-center
              justify-between
              border-t-[3px]
              border-[#111111]
              bg-[#FF087F]
              px-6
              py-3
              text-white
            "
          >

            <span
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.35em]
              "
            >
              HH GOA 2026
            </span>

            <span
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.35em]
              "
            >
              #FRAMEINGOA
            </span>

          </div>

        </section>


        {/* ==================================================
            FORM
        ================================================== */}

        <section
          className="
            mt-12
            grid
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >

          {/* ================================================
              PHOTO
          ================================================= */}

          <div
            className="
              border-[3px]
              border-[#111111]
              bg-white
              p-5
              shadow-[8px_8px_0_#FF087F]
            "
          >

            <div
              className="
                mb-4
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#FF087F]
                  "
                >
                  01 / PHOTO
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-black
                    uppercase
                    tracking-[-0.04em]
                    text-[#086B3C]
                  "
                >
                  SHOW US YOU
                </h2>

              </div>

              <span
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#111111]/40
                "
              >
                SELFIE
                <br />
                OR PHOTO
              </span>

            </div>


            <UploadBox
              image={image}
              setImage={setImage}
            />

          </div>


          {/* ================================================
              DETAILS
          ================================================= */}

          <div
            className="
              border-[3px]
              border-[#111111]
              bg-[#086B3C]
              p-6
              text-white
              shadow-[8px_8px_0_#F3E600]
            "
          >

            <p
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.3em]
                text-[#F3E600]
              "
            >
              02 / YOU
            </p>

            <h2
              className="
                mt-1
                text-3xl
                font-black
                uppercase
                tracking-[-0.05em]
              "
            >
              TELL US
              <br />
              WHO YOU ARE.
            </h2>


            {/* NAME */}

            <div className="mt-8">

              <label
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                YOUR NAME
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME"
                className="
                  mt-2
                  w-full
                  border-b-[3px]
                  border-[#F3E600]
                  bg-transparent
                  px-0
                  py-3
                  text-lg
                  font-black
                  uppercase
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-[#FF087F]
                "
              />

            </div>


            {/* ROLE / IDENTITY */}

            <div className="mt-7">

              <label
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                YOUR THING
              </label>

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="WHAT DO YOU BUILD?"
                className="
                  mt-2
                  w-full
                  border-b-[3px]
                  border-[#F3E600]
                  bg-transparent
                  px-0
                  py-3
                  text-lg
                  font-black
                  uppercase
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-[#FF087F]
                "
              />

            </div>


            {/* TECH */}

            <div className="mt-7">

              <label
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                CURRENTLY INTO
              </label>

              <input
                type="text"
                name="tech"
                value={formData.tech}
                onChange={handleChange}
                placeholder="AI / CODE / DESIGN / IDEAS..."
                className="
                  mt-2
                  w-full
                  border-b-[3px]
                  border-[#F3E600]
                  bg-transparent
                  px-0
                  py-3
                  text-lg
                  font-black
                  uppercase
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-[#FF087F]
                "
              />

            </div>

          </div>

        </section>


        {/* ==================================================
            BUILDER CLASS
        ================================================== */}

        <section
          className="
            mt-10
            border-[3px]
            border-[#111111]
            bg-[#F3E600]
            p-6
            shadow-[8px_8px_0_#086B3C]
          "
        >

          <p
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#086B3C]
            "
          >
            03 / YOUR SIGNAL
          </p>

          <h2
            className="
              mt-1
              text-3xl
              font-black
              uppercase
              tracking-[-0.05em]
              text-[#111111]
            "
          >
            WHAT'S YOUR
            <br />
            BUILDER ENERGY?
          </h2>


          <input
            type="text"
            value={builderTitle}
            onChange={(e) =>
              setBuilderTitle(
                e.target.value
              )
            }
            placeholder="LEAVE BLANK — LET US PICK"
            className="
              mt-5
              w-full
              border-[3px]
              border-[#111111]
              bg-[#F7F1DF]
              px-4
              py-4
              text-sm
              font-black
              uppercase
              text-[#111111]
              outline-none
              placeholder:text-[#111111]/30
              focus:border-[#FF087F]
            "
          />

          <p
            className="
              mt-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-[#111111]/50
            "
          >
            Leave this empty to get a
            randomly generated builder class.
          </p>

        </section>


        {/* ==================================================
            GENERATE
        ================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
          "
        >

          <button
            type="button"
            onClick={generateCard}
            className="
              w-full
              max-w-lg
              border-[3px]
              border-[#111111]
              bg-[#FF087F]
              px-8
              py-5
              text-xl
              font-black
              uppercase
              tracking-wide
              text-white
              shadow-[8px_8px_0_#086B3C]
              transition
              duration-200
              hover:-translate-y-1
              hover:bg-[#086B3C]
              hover:shadow-[8px_8px_0_#FF087F]
            "
          >
            BUILD MY HH GOA CARD →
          </button>


          <div
            className="
              mt-6
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#086B3C]
              "
            />

            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.3em]
                text-[#111111]/50
              "
            >
              GOA / INDIA · HH GOA 2026
            </p>

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#FF087F]
              "
            />

          </div>

        </div>

      </main>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer
        className="
          border-t-[3px]
          border-[#111111]
          bg-[#111111]
          px-5
          py-8
          text-white
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.15em]
            "
          >
            HH GOA
          </p>

          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#F3E600]
            "
          >
            LESS NOISE. MORE SIGNAL.
          </p>

          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/40
            "
          >
            #FRAMEINGOA
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;