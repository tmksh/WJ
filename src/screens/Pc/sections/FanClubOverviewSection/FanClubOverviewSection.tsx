export const FanClubOverviewSection = (): JSX.Element => {
  const membershipButtons = [
    { label: "iPhoneの方", sublabel: "(キャリア決済)" },
    { label: "Androidの方", sublabel: "(キャリア決済)" },
    { label: "カード決済の方", sublabel: "" },
  ];

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-20 pb-0 px-4 lg:px-0 relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex flex-col w-full max-w-[547px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex self-stretch w-full flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap">
              WHITE JAMファンクラブ
            </h2>
          </div>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div
            className="inline-flex items-end relative flex-[0_0_auto]"
            aria-hidden="true"
          >
            <img
              src="/img/Frame5-decor.png"
              alt=""
              className="flex-shrink-0 h-[38px] w-auto lg:w-[46px] lg:h-auto object-contain -scale-x-100"
              width={33}
              height={38}
            />
          </div>

          <p className="w-fit mt-[-1.00px] font-black text-main text-[30px] lg:text-[50px] text-center leading-[30px] lg:leading-[50px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            入会受付中
          </p>

          <div
            className="inline-flex items-end relative flex-[0_0_auto]"
            aria-hidden="true"
          >
            <img
              src="/img/Frame5-decor.png"
              alt=""
              className="flex-shrink-0 h-[38px] w-auto lg:w-[46px] lg:h-auto object-contain"
              width={33}
              height={38}
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-8 lg:gap-0 relative self-stretch w-full min-w-0 flex-[0_0_auto]">
        <article className="flex flex-col w-full max-w-[720px] lg:max-w-none lg:flex-1 lg:min-w-0 items-center gap-0 lg:gap-8 px-4 lg:px-[84px] py-10 relative bg-main">
          <img
            className="relative w-[463px] h-[514.11px] -my-5 lg:my-0 object-contain"
            alt="ファンクラブ会員特典イラスト"
            src="https://c.animaapp.com/h73j2KJP/img/frame-41.svg"
          />

          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="w-fit mt-[-1.00px] font-extrabold text-white text-[18px] lg:text-[20px] text-center leading-[28.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
              <span className="block">配信多めで、メンバーのプライベート</span>
              <span className="block">が見れるファンクラブです</span>
            </p>

            <nav
              className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 relative self-stretch w-full flex-[0_0_auto]"
              aria-label="入会方法選択"
            >
              {membershipButtons.map((button, index) => (
                <button
                  key={index}
                  className="all-[unset] box-border w-full lg:w-[168px] bg-white flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-PC cursor-pointer hover:opacity-90 transition-opacity"
                  type="button"
                  aria-label={`${button.label}${button.sublabel ? ` ${button.sublabel}` : ""}`}
                >
                  <span
                    className={`w-fit ${index === 0 ? "ml-[-48.00px] mr-[-48.00px]" : index === 1 ? "ml-[-52.00px] mr-[-52.00px]" : "ml-[-61.00px] mr-[-61.00px]"} font-extrabold text-main text-lg text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]`}
                  >
                    {button.label}
                  </span>

                  {button.sublabel && (
                    <span className="relative w-fit ml-[-32.00px] mr-[-32.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-main text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap">
                      {button.sublabel}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </article>

        <article className="flex flex-col w-full max-w-[720px] lg:max-w-none lg:flex-1 lg:min-w-0 min-h-[400px] lg:h-[756px] items-center justify-end gap-0 lg:gap-8 px-4 lg:px-36 py-10 relative bg-light-blue">
          <img
            className="relative self-stretch w-full h-[514px] ml-0 mr-0 lg:ml-[-15.50px] lg:mr-[-15.50px] -my-5 lg:my-0 object-contain"
            alt="ファンクラブ+プラス会員特典イラスト"
            src="https://c.animaapp.com/h73j2KJP/img/frame-47.svg"
          />

          <div className="flex flex-col w-full lg:w-[194px] items-center gap-4 px-4 lg:px-0 py-0 relative flex-[0_0_auto]">
            <p className="self-stretch mt-[-1.00px] font-extrabold text-white text-[18px] lg:text-[20px] text-center leading-[28.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
              さらに知りたい方は
              <br />
              ファンクラブ+プラス
            </p>

            <button
              className="all-[unset] box-border w-full lg:w-[168px] bg-white flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-[2px_4px_4px_#00000040] cursor-pointer hover:opacity-90 transition-opacity"
              type="button"
              aria-label="ファンクラブ+プラスに入会する"
            >
              <span className="w-fit ml-[-34.00px] mr-[-34.00px] font-extrabold text-light-blue text-lg text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                入会する
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
