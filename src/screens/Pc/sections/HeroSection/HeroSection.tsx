export const HeroSection = (): JSX.Element => {
  const languageOptions = [
    {
      id: "en",
      label: "EN",
      icon: "https://c.animaapp.com/h73j2KJP/img/earth-globe-1798477.svg",
      alt: "English language globe icon",
    },
    {
      id: "ch",
      label: "CH",
      icon: "https://c.animaapp.com/h73j2KJP/img/earth-globe-1798477-1.svg",
      alt: "Chinese language globe icon",
    },
  ];

  return (
    <section
      className="relative w-[1438px] h-[850px]"
      aria-label="Hero section"
    >
      <div className="absolute top-0 left-0 bg-grey-1 w-[1438px] h-[850px]">
        <img
          className="absolute top-[179px] left-[658px] w-[580px] h-[580px]"
          alt="White House Jam promotional image"
          src="https://c.animaapp.com/h73j2KJP/img/img.png"
        />

        <div className="flex flex-col w-[420px] items-center gap-[26px] absolute top-[204px] left-[189px]">
          <img
            className="self-stretch w-full relative aspect-[1.19] object-cover"
            alt="White House official logo"
            src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo-1@2x.png"
          />

          <div className="flex flex-col w-[261px] items-center gap-[3px] relative flex-[0_0_auto]">
            <h1 className="mt-[-1.00px] [text-shadow:2px_2px_0px_#bc1e69] text-[46px] leading-[49px] relative self-stretch [font-family:'Poppins',Helvetica] font-bold text-light-blue text-center tracking-[0]">
              FANCLUB
            </h1>

            <h2 className="[text-shadow:2px_2px_0px_#8acbd8] [font-family:'Poppins',Helvetica] font-bold text-main text-[46px] text-center leading-[49px] relative self-stretch tracking-[0]">
              WHITE JAM
              <br />
              HOUSE
            </h2>
          </div>
        </div>

        <div
          className="absolute top-[152px] left-[1076px] w-[177px] h-[129px]"
          role="img"
          aria-label="Recruitment badge"
        >
          <img
            className="absolute -top-0.5 -left-0.5 w-[187px] h-[141px]"
            alt=""
            src="https://c.animaapp.com/h73j2KJP/img/vector-1.svg"
            aria-hidden="true"
          />

          <div className="absolute top-6 left-[21px] rotate-[10.97deg] font-extrabold text-main text-[34px] leading-[34.3px] [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
            会員
            <br />
            募集中!!
          </div>
        </div>
      </div>

      <nav
        className="inline-flex items-center gap-4 absolute top-4 left-[1188px]"
        aria-label="Language selection"
      >
        {languageOptions.map((language) => (
          <button
            key={language.id}
            className="flex w-[58px] h-[58px] items-center gap-2.5 px-3.5 py-1.5 relative bg-main rounded-[29px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2"
            aria-label={`Switch to ${language.label} language`}
            type="button"
          >
            <div className="flex flex-col w-[30px] items-center gap-[3px] relative">
              <img
                className="relative w-[30px] h-[30px] aspect-[1]"
                alt=""
                src={language.icon}
                aria-hidden="true"
              />

              <span className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-light-blue text-[13px] text-center tracking-[0] leading-[13px]">
                {language.label}
              </span>
            </div>
          </button>
        ))}
      </nav>
    </section>
  );
};
