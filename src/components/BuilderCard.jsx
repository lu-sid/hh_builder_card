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
          BASE GOA GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.055]
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
          GOA SUN
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          top-[125px]
          h-[115px]
          w-[115px]
          rounded-full
          bg-[#F3E600]
          opacity-90
        "
      />

      {/* Pink sunset layer */}

      <div
        className="
          pointer-events-none
          absolute
          -right-2
          top-[195px]
          h-[55px]
          w-[125px]
          rounded-t-full
          bg-[#FF087F]
          opacity-25
        "
      />


      {/* =====================================================
          GOA PALM
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-1
          top-[115px]
          z-[1]
          h-[150px]
          w-[90px]
        "
      >

        {/* Palm trunk */}

        <div
          className="
            absolute
            right-[38px]
            top-[42px]
            h-[105px]
            w-[7px]
            rotate-[11deg]
            rounded-full
            bg-[#086B3C]
          "
        />

        {/* Palm leaves */}

        <div
          className="
            absolute
            right-[27px]
            top-[27px]
            h-8
            w-[62px]
            rotate-[10deg]
            rounded-[100%]
            border-t-[7px]
            border-[#086B3C]
          "
        />

        <div
          className="
            absolute
            right-[29px]
            top-[22px]
            h-8
            w-[65px]
            rotate-[-27deg]
            rounded-[100%]
            border-t-[7px]
            border-[#086B3C]
          "
        />

        <div
          className="
            absolute
            right-[18px]
            top-[31px]
            h-8
            w-[68px]
            rotate-[37deg]
            rounded-[100%]
            border-t-[7px]
            border-[#086B3C]
          "
        />

        <div
          className="
            absolute
            right-[42px]
            top-[17px]
            h-8
            w-[65px]
            rotate-[-55deg]
            rounded-[100%]
            border-t-[7px]
            border-[#086B3C]
          "
        />

        <div
          className="
            absolute
            right-[10px]
            top-[15px]
            h-8
            w-[62px]
            rotate-[55deg]
            rounded-[100%]
            border-t-[7px]
            border-[#086B3C]
          "
        />

      </div>


      {/* =====================================================
          GOA SEA WAVES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-[270px]
          z-[1]
          h-[55px]
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            -left-[40px]
            top-2
            h-8
            w-[440px]
            rounded-[50%]
            border-t-[5px]
            border-[#086B3C]
          "
        />

        <div
          className="
            absolute
            -left-[70px]
            top-6
            h-8
            w-[440px]
            rounded-[50%]
            border-t-[4px]
            border-[#FF087F]
          "
        />

        <div
          className="
            absolute
            -left-[20px]
            top-10
            h-8
            w-[430px]
            rounded-[50%]
            border-t-[3px]
            border-[#086B3C]/40
          "
        />

      </div>


      {/* =====================================================
          GOA TILE PATTERN
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[95px]
          right-0
          z-[0]
          grid
          grid-cols-4
          opacity-60
        "
      >

        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className={`
              relative
              h-5
              w-5
              border
              border-[#086B3C]/20
              ${
                index % 3 === 0
                  ? "bg-[#F3E600]/30"
                  : index % 3 === 1
                    ? "bg-[#FF087F]/10"
                    : "bg-[#086B3C]/5"
              }
            `}
          >
            {index % 4 === 0 && (
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-2
                  w-2
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-45
                  bg-[#086B3C]/30
                "
              />
            )}
          </div>
        ))}

      </div>


      {/* =====================================================
          GOA DECORATIVE CIRCLES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-12
          top-[340px]
          h-24
          w-24
          rounded-full
          bg-[#FF087F]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          bottom-28
          h-24
          w-24
          rounded-full
          border-[12px]
          border-[#086B3C]/10
        "
      />


      {/* =====================================================
          HACKERHOUSE TOP BAR
      ====================================================== */}

      <div
        className="
          relative
          z-10
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

          <span className="h-2 w-2 rounded-full bg-[#F3E600]" />

          <span className="h-2 w-2 rounded-full bg-[#FF087F]" />

          <span className="h-2 w-2 rounded-full bg-white" />

        </div>

      </div>


      {/* =====================================================
          SYSTEM STRIP
      ====================================================== */}

      <div
        className="
          relative
          z-10
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

        <div className="flex items-center gap-1.5">

          <span className="h-1.5 w-1.5 rounded-full bg-[#F3E600]" />

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
          z-10
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
          HACKERHOUSE / GOA / INDIA
        </p>


        <div className="relative mt-2">

          <h1
            className="
              text-[45px]
              font-black
              uppercase
              leading-[0.76]
              tracking-[-0.08em]
              text-[#086B3C]
            "
          >
            BUILD
          </h1>

          <h1
            className="
              ml-7
              text-[45px]
              font-black
              uppercase
              leading-[0.76]
              tracking-[-0.08em]
              text-[#111111]
            "
          >
            IN GOA
          </h1>

          {/* Pink slash */}

          <div
            className="
              absolute
              right-12
              top-1
              h-14
              w-4
              rotate-[25deg]
              bg-[#FF087F]
            "
          />

        </div>


        {/* Goa tagline */}

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
              h-[4px]
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
            SUN / SEA / BUILD
          </p>

        </div>

      </div>


      {/* =====================================================
          PHOTO + BUILDER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-5
          px-5
        "
      >

        <div className="flex items-center gap-5">

          {/* PHOTO */}

          <div className="relative shrink-0">

            {/* Yellow offset frame */}

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

            {/* Photo */}

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
                className="h-full w-full object-cover"
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

              <span className="text-[9px] font-black text-white">
                01
              </span>

            </div>

          </div>


          {/* BUILDER INFO */}

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
              01 / BUILDER
            </p>

            <p
              className="
                mt-1
                text-[6px]
                font-black
                uppercase
                tracking-[0.25em]
                text-[#086B3C]/60
              "
            >
              GOA NETWORK MEMBER
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
              {formData.role || "BUILDER / CREATOR"}
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
          z-10
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
          {builderTitle || "BUILDER"}
        </h3>

      </div>


      {/* =====================================================
          INFO ROW
      ====================================================== */}

      <div
        className="
          relative
          z-10
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
            {formData.tech || "GOOD IDEAS"}
          </p>

          <div className="mt-2 flex gap-1">

            <div className="h-1 w-5 bg-[#FF087F]" />

            <div className="h-1 w-2 bg-[#F3E600]" />

          </div>

        </div>


        {/* GOA LOCATION */}

        <div
          className="
            border-2
            border-[#111111]
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
            HACKERHOUSE
          </p>

          <div className="mt-2 flex gap-1">

            <div className="h-1 w-6 bg-[#F3E600]" />

            <div className="h-1 w-2 bg-[#FF087F]" />

          </div>

        </div>

      </div>


      {/* =====================================================
          GOA + HACKERHOUSE DATA STRIP
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-5
          mt-4
          border-y-2
          border-[#111111]
          py-2
        "
      >

        <div className="flex items-center justify-between">

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


        <div className="mt-1 flex items-center justify-between">

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#111111]/40
            "
          >
            ENVIRONMENT
          </p>

          <p
            className="
              text-[6px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#FF087F]
            "
          >
            SUN • SEA • BUILD
          </p>

        </div>


        <div className="mt-1 flex items-center justify-between">

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

          <div className="flex items-center gap-1.5">

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
          relative
          z-10
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
          z-10
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

        {/* Pink vertical line */}

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
              mt-1
              text-[6px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/45
            "
          >
            SUN • SEA • BUILD
          </p>

        </div>


        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-[#FF087F]" />

          <span className="h-2 w-2 rounded-full bg-[#F3E600]" />

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