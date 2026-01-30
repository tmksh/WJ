export const FanClubOverviewSection = (): JSX.Element => {
  const membershipButtons = [
    { label: "iPhoneの方", sublabel: "(キャリア決済)" },
    { label: "Androidの方", sublabel: "(キャリア決済)" },
    { label: "カード決済の方", sublabel: "" },
  ];

  return (
    <section className="flex flex-col items-center gap-12 pt-20 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex flex-col w-[547px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex self-stretch w-full flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-4xl text-center tracking-[0] leading-[43.2px] whitespace-nowrap">
              WHITE JAMファンクラブ
            </h2>
          </div>
        </div>

        <div
          className="inline-flex items-center gap-4 relative flex-[0_0_auto]"
          role="banner"
          aria-label="入会受付中"
        >
          <div
            className="inline-flex items-end relative flex-[0_0_auto]"
            aria-hidden="true"
          >
            <img
              className="relative w-[22.41px] h-[28.79px]"
              alt=""
              src="https://c.animaapp.com/h73j2KJP/img/line-2-4.svg"
            />

            <img
              className="mt-[-1.25px] relative w-[23.73px] h-[47.25px] mr-[-2.73px] -ml-2.5"
              alt=""
              src="https://c.animaapp.com/h73j2KJP/img/line-1-4.svg"
            />
          </div>

          <p className="w-fit mt-[-1.00px] font-black text-main text-[50px] text-center leading-[50px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            入会受付中
          </p>

          <div
            className="inline-flex items-end relative flex-[0_0_auto] rotate-180"
            aria-hidden="true"
          >
            <img
              className="-rotate-180 relative w-[22.41px] h-[28.79px]"
              alt=""
              src="https://c.animaapp.com/h73j2KJP/img/line-2-5.svg"
            />

            <img
              className="mb-[-1.25px] -rotate-180 relative w-[23.73px] h-[47.25px] mr-[-2.73px] -ml-2.5"
              alt=""
              src="https://c.animaapp.com/h73j2KJP/img/line-1-5.svg"
            />
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <article className="flex flex-col w-[720px] items-center gap-8 px-[84px] py-10 relative bg-main">
          <img
            className="relative w-[463px] h-[514.11px]"
            alt="ファンクラブ会員特典イラスト"
            src="https://c.animaapp.com/h73j2KJP/img/frame-41.svg"
          />

          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="w-fit mt-[-1.00px] font-extrabold text-white text-xl text-center leading-[28.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
              配信多めで、メンバーのプライベートが見れる
              <br />
              ファンクラブです
            </p>

            <nav
              className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
              aria-label="入会方法選択"
            >
              {membershipButtons.map((button, index) => (
                <button
                  key={index}
                  className="all-[unset] box-border w-[168px] bg-white flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-PC cursor-pointer hover:opacity-90 transition-opacity"
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

        <article className="flex flex-col w-[720px] h-[756px] items-center justify-end gap-8 px-36 py-10 relative bg-light-blue">
          <img
            className="relative self-stretch w-full h-[514px] ml-[-15.50px] mr-[-15.50px]"
            alt="ファンクラブ+プラス会員特典イラスト"
            src="https://c.animaapp.com/h73j2KJP/img/frame-47.svg"
          />

          <div className="flex flex-col w-[194px] items-center gap-4 px-px py-0 relative flex-[0_0_auto]">
            <p className="self-stretch mt-[-1.00px] font-extrabold text-white text-xl text-center leading-[28.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
              さらに知りたい方は
              <br />
              ファンクラブ+プラス
            </p>

            <button
              className="all-[unset] box-border w-[168px] bg-white flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-[2px_4px_4px_#00000040] cursor-pointer hover:opacity-90 transition-opacity"
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
