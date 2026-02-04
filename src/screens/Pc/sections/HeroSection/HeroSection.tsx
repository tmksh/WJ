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
      className="relative w-full min-h-[100dvh] lg:min-h-0 lg:w-full lg:max-w-[100vw] lg:h-[min(768px,100vh)] lg:max-h-[100vh] lg:overflow-hidden lg:mx-auto mb-[56px]"
      aria-label="Hero section"
    >
      <div className="absolute top-0 left-0 bg-grey-1 w-full h-full min-h-[100dvh] lg:w-full lg:max-w-[100vw] lg:h-[min(768px,100vh)] lg:max-h-[100vh]">
        {/* SP: ロゴの下からコンテンツ開始、FVを1画面に収めて表示 */}
        <div className="flex flex-col items-center justify-center lg:hidden w-full h-full min-h-[100dvh] pt-4 px-4 pb-4 box-border">
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[min(360px,calc(100vw-32px))] h-full max-h-[calc(100dvh-32px)] min-h-0 overflow-hidden mx-auto">
            <div className="flex flex-col items-center justify-center gap-3 w-full min-w-0 min-h-0 flex-1 overflow-hidden animate-hero-fade-up">
              <div className="flex-shrink-0 flex items-center justify-center min-h-0">
                <img
                  className="w-[261px] max-w-[70vw] max-h-[18dvh] aspect-[1.19] object-contain"
                  alt="White House official logo"
                  src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo-1@2x.png"
                />
              </div>
              <div className="flex flex-col items-center gap-[3px] w-full flex-shrink-0 min-h-0">
                <h1 className="[text-shadow:2px_2px_0px_#bc1e69] text-[clamp(1.25rem,5dvh,2.875rem)] leading-tight [font-family:'Poppins',Helvetica] font-bold text-light-blue text-center tracking-[0]">
                  FANCLUB
                </h1>
                <h2 className="[text-shadow:2px_2px_0px_#8acbd8] [font-family:'Poppins',Helvetica] font-bold text-main text-[clamp(1.25rem,5dvh,2.875rem)] leading-tight text-center tracking-[0]">
                  WHITE JAM
                  <br />
                  HOUSE
                </h2>
              </div>
              <div className="flex-1 min-h-0 min-w-0 w-full flex items-center justify-center overflow-visible p-1">
                <div className="relative w-full max-w-full aspect-square max-h-full min-h-0 flex items-center justify-center mx-auto">
                  {/* 添付画像どおり: 丸いメイン画像＋右下にバッジを重ねて配置（SPで中央表示） */}
                  <div className="relative w-full h-full max-w-full max-h-full rounded-full overflow-hidden bg-grey-1 flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain object-center"
                      alt="White House Jam promotional image"
                      src="https://c.animaapp.com/h73j2KJP/img/img.png"
                    />
                  </div>
                  <div
                    className="absolute bottom-[2%] right-[2%] flex items-center justify-center animate-hero-fade-up-delayed"
                    role="img"
                    aria-label="会員募集中"
                  >
                    <img
                      src="/img/badge-members-wanted.png"
                      alt="会員募集中"
                      className="w-[108px] h-auto object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PC: キービジュアル（ビューポート幅に合わせて % 配置） */}
        <img
          className="hidden lg:block absolute top-[194px] left-[46.5%] -translate-x-1/2 w-[37.5vw] max-w-[540px] h-auto aspect-square object-contain animate-hero-fade-up"
          alt="White House Jam promotional image"
          src="https://c.animaapp.com/h73j2KJP/img/img.png"
        />

        {/* PC: タイトルブロック */}
        <div className="hidden lg:flex flex-col w-full max-w-[29vw] lg:min-w-0 items-center gap-4 lg:gap-[26px] absolute top-[204px] left-[13%] px-4 animate-hero-fade-up">
          <img
            className="self-stretch w-[261px] max-w-full relative aspect-[1.19] object-cover mx-auto"
            alt="White House official logo"
            src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo-1@2x.png"
          />

          <div className="flex flex-col w-full max-w-[261px] items-center gap-[3px] relative flex-[0_0_auto]">
            <h1 className="mt-[-1.00px] [text-shadow:2px_2px_0px_#bc1e69] text-[46px] leading-[49px] relative self-stretch [font-family:'Poppins',Helvetica] font-bold text-light-blue text-center tracking-[0]">
              FANCLUB
            </h1>

            <h2 className="[text-shadow:2px_2px_0px_#8acbd8] [font-family:'Poppins',Helvetica] font-bold text-main text-[46px] leading-[49px] text-center relative self-stretch tracking-[0]">
              WHITE JAM
              <br />
              HOUSE
            </h2>
          </div>
        </div>

        {/* PC: バッジ */}
        <div
          className="hidden lg:block absolute top-[152px] left-[74.5%] w-[12.3vw] max-w-[177px] aspect-[177/129] animate-hero-fade-up-delayed"
          role="img"
          aria-label="Recruitment badge"
        >
          <img
            className="absolute -top-0.5 -left-0.5 w-full h-full max-w-[187px] max-h-[141px] object-contain"
            alt=""
            src="https://c.animaapp.com/h73j2KJP/img/vector-1.svg"
            aria-hidden="true"
          />
          <div className="absolute top-[22%] left-[12%] rotate-[10.97deg] font-extrabold text-main text-[clamp(14px,2.4vw,34px)] leading-[1.01] [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
            会員
            <br />
            募集中!!
          </div>
        </div>
      </div>

      <img
        src="/img/logo-whitetjam.png"
        alt="WHITE JAM"
        className="absolute top-0 left-0 lg:fixed lg:top-4 lg:left-[max(1rem,5vw)] lg:right-auto h-10 lg:h-[58px] w-auto object-contain z-10"
        aria-hidden="false"
      />

      <nav
        className="inline-flex items-center gap-2 lg:gap-4 fixed top-4 right-4 left-auto z-10 lg:right-[max(1rem,5vw)]"
        aria-label="Language selection"
      >
        {languageOptions.map((language) => (
          <button
            key={language.id}
            className="flex w-8 h-8 lg:w-[58px] lg:h-[58px] items-center justify-center gap-2.5 px-2 lg:px-3.5 py-1.5 relative bg-main rounded-full lg:rounded-[29px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2"
            aria-label={`Switch to ${language.label} language`}
            type="button"
          >
            <div className="flex flex-col w-4 lg:w-[30px] items-center gap-[3px] relative">
              <img
                className="relative w-4 h-4 lg:w-[30px] lg:h-[30px] aspect-[1]"
                alt=""
                src={language.icon}
                aria-hidden="true"
              />

              <span className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-light-blue text-[8px] lg:text-[13px] text-center tracking-[0] leading-[8px] lg:leading-[13px]">
                {language.label}
              </span>
            </div>
          </button>
        ))}
      </nav>
    </section>
  );
};
