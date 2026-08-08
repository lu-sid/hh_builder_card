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
        w-[380px]
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#111111]
        bg-[#F7F1DF]
        text-[#111111]
        shadow-[0_18px_45px_rgba(0,0,0,0.25)]
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -right-16 top-24 h-40 w-40 rounded-full border-[18px] border-[#086B3C]/10" />

      <div className="pointer-events-none absolute -left-10 top-[300px] h-24 w-24 rounded-full bg-[#FF087F]/10" />

      <div className="pointer-events-none absolute -right-8 bottom-24 h-20 w-20 rounded-full bg-[#F3E600]/30" />

      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div className="relative flex items-center justify-between bg-[#086B3C] px-5 py-3">

        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.35em] text-[#F3E600]">
            HH GOA
          </p>

          <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.2em] text-white/60">
            BUILDER ID / 2026
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#F3E600]" />
          <span className="h-2 w-2 rounded-full bg-[#FF087F]" />
          <span className="h-2 w-2 rounded-full bg-white" />
        </div>

      </div>


      {/* =====================================================
          COMPACT HERO
      ====================================================== */}

      <div className="relative px-5 pt-5">

        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-[#FF087F]">
          GOA / INDIA
        </p>

        <div className="relative mt-1">

          <h1 className="text-[43px] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#086B3C]">
            BUILDER
          </h1>

          <h1 className="ml-6 text-[43px] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#111111]">
            2026
          </h1>

          {/* Pink slash */}
          <div className="absolute right-10 top-1 h-14 w-4 rotate-[25deg] bg-[#FF087F]" />

          {/* Yellow circle */}
          <div className="absolute right-2 top-3 h-9 w-9 rounded-full bg-[#F3E600]" />

        </div>

        <div className="mt-3 flex items-center gap-2">

          <div className="h-[3px] w-10 bg-[#FF087F]" />

          <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#111111]/50">
            LESS NOISE / MORE SIGNAL
          </p>

        </div>

      </div>


      {/* =====================================================
          PHOTO + NAME
      ====================================================== */}

      <div className="relative mt-5 px-5">

        <div className="flex items-center gap-5">

          {/* PHOTO */}

          <div className="relative shrink-0">

            {/* Offset yellow frame */}
            <div className="absolute left-2 top-2 h-[120px] w-[120px] bg-[#F3E600]" />

            {/* Image */}
            <div className="relative h-[120px] w-[120px] overflow-hidden border-[4px] border-[#111111] bg-[#086B3C]">

              <img
                src={image}
                alt="Builder"
                crossOrigin="anonymous"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Number */}
            <div className="absolute -bottom-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111111] bg-[#FF087F]">

              <span className="text-[9px] font-black text-white">
                01
              </span>

            </div>

          </div>


          {/* NAME */}

          <div className="min-w-0">

            <p className="text-[7px] font-black uppercase tracking-[0.35em] text-[#FF087F]">
              BUILDER
            </p>

            <h2 className="mt-1 break-words text-[23px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#111111]">
              {formData.name}
            </h2>

            <div className="mt-3 h-[3px] w-8 bg-[#086B3C]" />

            <p className="mt-2 text-[8px] font-bold uppercase leading-relaxed tracking-[0.1em] text-[#111111]/50">
              {formData.role}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          BUILDER CLASS
      ====================================================== */}

      <div className="relative mx-5 mt-5 overflow-hidden bg-[#FF087F] px-4 py-3">

        {/* Yellow decoration */}
        <div className="absolute -right-5 -top-5 h-12 w-12 rotate-45 bg-[#F3E600]" />

        <p className="text-[7px] font-black uppercase tracking-[0.35em] text-white/70">
          YOUR BUILDER CLASS
        </p>

        <h3 className="mt-1 max-w-[260px] text-[19px] font-black uppercase leading-none tracking-[-0.02em] text-white">
          {builderTitle}
        </h3>

      </div>


      {/* =====================================================
          INFO ROW
      ====================================================== */}

      <div className="mx-5 mt-4 grid grid-cols-2 gap-2">

        {/* Tech */}

        <div className="border-2 border-[#086B3C] bg-[#F7F1DF] px-3 py-2.5">

          <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#086B3C]/60">
            CURRENTLY INTO
          </p>

          <p className="mt-1 truncate text-[11px] font-black uppercase text-[#086B3C]">
            {formData.tech || "GOOD IDEAS"}
          </p>

          <div className="mt-2 flex gap-1">
            <div className="h-1 w-5 bg-[#FF087F]" />
            <div className="h-1 w-2 bg-[#F3E600]" />
          </div>

        </div>


        {/* Location */}

        <div className="bg-[#086B3C] px-3 py-2.5">

          <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#F3E600]">
            FREQUENCY
          </p>

          <p className="mt-1 text-[11px] font-black uppercase text-white">
            GOA
          </p>

          <p className="text-[7px] font-bold uppercase tracking-wider text-white/50">
            2026
          </p>

          <div className="mt-2 flex gap-1">
            <div className="h-1 w-6 bg-[#F3E600]" />
            <div className="h-1 w-2 bg-[#FF087F]" />
          </div>

        </div>

      </div>


      {/* =====================================================
          ID SECTION
      ====================================================== */}

      <div className="mx-5 mt-4 flex items-end justify-between border-t-2 border-[#111111] pt-3">

        <div>

          <p className="text-[7px] font-black uppercase tracking-[0.3em] text-[#111111]/40">
            BUILDER ID
          </p>

          <p className="mt-0.5 text-[15px] font-black tracking-wider text-[#111111]">
            {builderId}
          </p>

        </div>


        <div className="text-right">

          <p className="text-[7px] font-black uppercase tracking-[0.3em] text-[#111111]/40">
            SIGNAL
          </p>

          <p className="mt-0.5 text-[12px] font-black text-[#FF087F]">
            #FrameInGoa
          </p>

        </div>

      </div>


      {/* =====================================================
          COMPACT FOOTER
      ====================================================== */}

      <div className="relative mt-4 flex items-center justify-between overflow-hidden bg-[#111111] px-5 py-3">

        {/* Pink line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#FF087F]" />

        <div>

          <p className="text-[7px] font-black uppercase tracking-[0.3em] text-[#F3E600]">
            HH GOA
          </p>

          <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
            2026
          </p>

        </div>


        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-[#FF087F]" />

          <span className="h-2 w-2 rounded-full bg-[#F3E600]" />

          <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white">
            #FRAMEINGOA
          </p>

        </div>

      </div>

    </div>
  );
}

export default BuilderCard;