function BuilderCard({
  image,
  formData,
  builderTitle,
  builderId,
}) {
  return (
    <div
      id="builder-card"
      className="
        relative
        w-[360px]
        overflow-hidden
        border-[3px]
        border-[#111111]
        bg-[#F7F1DF]
        text-[#111111]
        shadow-[10px_10px_0_#111111]
      "
    >

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
        "
        style={{
          backgroundImage: `
            linear-gradient(#086B3C 1px, transparent 1px),
            linear-gradient(90deg, #086B3C 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* =====================================================
          DECORATIVE SHAPES
      ====================================================== */}

      {/* Green ring */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-24
          h-40
          w-40
          rounded-full
          border-[18px]
          border-[#086B3C]/15
        "
      />

      {/* Pink circle */}

      <div
        className="
          pointer-events-none
          absolute
          -left-10
          top-[300px]
          h-24
          w-24
          rounded-full
          bg-[#FF087F]/10
        "
      />

      {/* Yellow circle */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          bottom-24
          h-20
          w-20
          rounded-full
          bg-[#F3E600]/30
        "
      />

      {/* =====================================================
          HACKERHOUSE TOP BAR
      ====================================================== */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
          border-b-[3px]
          border-[#111111]
          bg-[#086B3C]
          px-5
          py-3
        "
      >

        <div>

          <p
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.35em]
              text-[#F3E600]
            "
          >
            HACKERHOUSE GOA
          </p>

          <p
            className="
              mt-0.5
              text-[7px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/70
            "
          >
            HH GOA / BUILDER ID / 2026
          </p>

        </div>

        {/* Status lights */}

        <div className="flex items-center gap-1.5">

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#F3E600]
            "
          />

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
              h-2
              w-2
              rounded-full
              bg-white
            "
          />

        </div>

      </div>


      {/* =====================================================
          SYSTEM / TERMINAL STRIP
      ====================================================== */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
          border-b-2
          border-[#111111]
          bg-[#111111]
          px-5
          py-2
        "
      >

        <p
          className="
            text-[6px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-white/50
          "
        >
          SYSTEM_STATUS
        </p>

        <div
          className="
            flex
            items-center
            gap-1.5
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#F3E600]
            "
          />

          <span
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.25em]
              text-[#F3E600]
            "
          >
            BUILDER_ONLINE
          </span>

        </div>

      </div>


      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className="
          relative
          px-5
          pt-5
        "
      >

        <p
          className="
            text-[7px]
            font-black
            uppercase
            tracking-[0.4em]
            text-[#FF087F]
          "
        >
          GOA / INDIA
        </p>

        <div
          className="
            relative
            mt-2
          "
        >

          <h1
            className="
              text-[42px]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
              text-[#086B3C]
            "
          >
            HACKER
          </h1>

          <h1
            className="
              ml-7
              text-[42px]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
              text-[#111111]
            "
          >
            HOUSE
          </h1>

          <h1
            className="
              text-[42px]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
              text-[#FF087F]
            "
          >
            GOA
          </h1>

          {/* Pink slash */}

          <div
            className="
              absolute
              right-10
              top-1
              h-16
              w-4
              rotate-[25deg]
              bg-[#FF087F]
            "
          />

          {/* Yellow circle */}

          <div
            className="
              absolute
              right-2
              top-2
              h-10
              w-10
              rounded-full
              bg-[#F3E600]
            "
          />

        </div>


        {/* Tagline */}

        <div
          className="
            mt-4
            flex
            items-center
            gap-2
          "
        >

          <div
            className="
              h-[3px]
              w-10
              bg-[#FF087F]
            "
          />

          <p
            className="
              text-[7px]
              font-black
              uppercase
              tracking-[0.25em]
              text-[#111111]/60
            "
          >
            LESS NOISE / MORE SIGNAL
          </p>

        </div>

      </div>


      {/* =====================================================
          PHOTO + BUILDER
      ====================================================== */}

      <div
        className="
          relative
          mt-5
          px-5
        "
      >

        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          {/* PHOTO */}

          <div
            className="
              relative
              shrink-0
            "
          >

            {/* Yellow offset */}

            <div
              className="
                absolute
                left-2
                top-2
                h-[120px]
                w-[120px]
                bg-[#F3E600]
              "
            />

            {/* Image */}

            <div
              className="
                relative
                h-[120px]
                w-[120px]
                overflow-hidden
                border-[4px]
                border-[#111111]
                bg-[#086B3C]
              "
            >

              <img
                src={image}
                alt="Builder"
                crossOrigin="anonymous"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>


            {/* Number */}

            <div
              className="
                absolute
                -bottom-3
                -right-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border-2
                border-[#111111]
                bg-[#FF087F]
              "
            >

              <span
                className="
                  text-[9px]
                  font-black
                  text-white
                "
              >
                01
              </span>

            </div>

          </div>


          {/* BUILDER INFORMATION */}

          <div className="min-w-0">

            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.35em]
                text-[#FF087F]
              "
            >
              BUILDER_IDENTITY
            </p>

            <h2
              className="
                mt-1
                break-words
                text-[22px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
                text-[#111111]
              "
            >
              {formData.name}
            </h2>

            <div
              className="
                mt-3
                h-[3px]
                w-8
                bg-[#086B3C]
              "
            />

            <p
              className="
                mt-2
                text-[8px]
                font-bold
                uppercase
                leading-relaxed
                tracking-[0.1em]
                text-[#111111]/50
              "
            >
              {formData.role ||
                "BUILDER / CREATOR"}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          BUILDER CLASS
      ====================================================== */}

      <div
        className="
          relative
          mx-5
          mt-5
          overflow-hidden
          border-[3px]
          border-[#111111]
          bg-[#FF087F]
          px-4
          py-4
        "
      >

        {/* Yellow corner */}

        <div
          className="
            absolute
            -right-6
            -top-6
            h-14
            w-14
            rotate-45
            bg-[#F3E600]
          "
        />

        {/* Small terminal text */}

        <p
          className="
            text-[6px]
            font-black
            uppercase
            tracking-[0.35em]
            text-white/60
          "
        >
          // BUILDER_CLASS
        </p>

        <p
          className="
            mt-1
            text-[7px]
            font-black
            uppercase
            tracking-[0.3em]
            text-white/70
          "
        >
          YOUR SIGNAL
        </p>

        <h3
          className="
            mt-1
            max-w-[270px]
            text-[19px]
            font-black
            uppercase
            leading-none
            tracking-[-0.02em]
            text-white
          "
        >
          {builderTitle ||
            "BUILDER"}
        </h3>

      </div>


      {/* =====================================================
          INFO ROW
      ====================================================== */}

      <div
        className="
          mx-5
          mt-4
          grid
          grid-cols-2
          gap-2
        "
      >

        {/* CURRENTLY INTO */}

        <div
          className="
            border-2
            border-[#086B3C]
            bg-[#F7F1DF]
            px-3
            py-2.5
          "
        >

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.25em]
              text-[#086B3C]/60
            "
          >
            CURRENTLY_INTO
          </p>

          <p
            className="
              mt-1
              truncate
              text-[10px]
              font-black
              uppercase
              text-[#086B3C]
            "
          >
            {formData.tech ||
              "GOOD IDEAS"}
          </p>

          <div
            className="
              mt-2
              flex
              gap-1
            "
          >

            <div
              className="
                h-1
                w-5
                bg-[#FF087F]
              "
            />

            <div
              className="
                h-1
                w-2
                bg-[#F3E600]
              "
            />

          </div>

        </div>


        {/* LOCATION */}

        <div
          className="
            bg-[#086B3C]
            px-3
            py-2.5
          "
        >

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.25em]
              text-[#F3E600]
            "
          >
            LOCATION
          </p>

          <p
            className="
              mt-1
              text-[10px]
              font-black
              uppercase
              text-white
            "
          >
            GOA / INDIA
          </p>

          <p
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-wider
              text-white/50
            "
          >
            HH GOA 2026
          </p>

          <div
            className="
              mt-2
              flex
              gap-1
            "
          >

            <div
              className="
                h-1
                w-6
                bg-[#F3E600]
              "
            />

            <div
              className="
                h-1
                w-2
                bg-[#FF087F]
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          HACKERHOUSE DATA STRIP
      ====================================================== */}

      <div
        className="
          mx-5
          mt-4
          border-y-2
          border-[#111111]
          py-2
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.25em]
              text-[#111111]/40
            "
          >
            NETWORK
          </p>

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.25em]
              text-[#086B3C]
            "
          >
            HACKERHOUSE_GOA
          </p>

        </div>


        <div
          className="
            mt-1
            flex
            items-center
            justify-between
          "
        >

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#111111]/40
            "
          >
            STATUS
          </p>

          <div
            className="
              flex
              items-center
              gap-1.5
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#FF087F]
              "
            />

            <span
              className="
                text-[6px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#FF087F]
              "
            >
              READY_TO_BUILD
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          BUILDER ID
      ====================================================== */}

      <div
        className="
          mx-5
          mt-4
          flex
          items-end
          justify-between
        "
      >

        <div>

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#111111]/40
            "
          >
            BUILDER_ID
          </p>

          <p
            className="
              mt-0.5
              text-[15px]
              font-black
              tracking-wider
              text-[#111111]
            "
          >
            {builderId}
          </p>

        </div>


        <div className="text-right">

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#111111]/40
            "
          >
            SIGNAL
          </p>

          <p
            className="
              mt-0.5
              text-[11px]
              font-black
              text-[#FF087F]
            "
          >
            #FrameInGoa
          </p>

        </div>

      </div>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div
        className="
          relative
          mt-4
          flex
          items-center
          justify-between
          overflow-hidden
          border-t-[3px]
          border-[#111111]
          bg-[#111111]
          px-5
          py-3
        "
      >

        {/* Pink vertical bar */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            bg-[#FF087F]
          "
        />

        <div>

          <p
            className="
              text-[7px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#F3E600]
            "
          >
            HACKERHOUSE GOA
          </p>

          <p
            className="
              mt-0.5
              text-[6px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/40
            "
          >
            28—31 OCT 2026
          </p>

        </div>


        <div
          className="
            flex
            items-center
            gap-2
          "
        >

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
              h-2
              w-2
              rounded-full
              bg-[#F3E600]
            "
          />

          <p
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            #FRAMEINGOA
          </p>

        </div>

      </div>

    </div>
  );
}

export default BuilderCard;