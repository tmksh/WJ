export const MembershipPlansSection = (): JSX.Element => {
  const pricingOptions = [
    { label: "月額", price: "¥500" },
    { label: "年額", price: "¥5,000" },
  ];

  const membershipButtons = [
    { title: "ファンクラブ+プラス", subtitle: "" },
  ];

  const benefits = [
    "チケット先行",
    "チケット割引",
    "ムービー",
    "フォトアルバム",
    "ファンクラブ限定グッズ",
    "年に2回の会報誌",
    "壁紙ダウンロード",
    "スケジュール共有",
  ];

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-16 pb-0 px-4 lg:px-[max(1rem,17vw)] relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex flex-col w-full max-w-[720px] items-center gap-4 lg:gap-3 relative flex-[0_0_auto]">
        <div className="flex self-stretch w-full flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col min-h-[86px] items-center justify-center gap-2 lg:gap-3 relative w-full max-w-[720px]">
            <h2 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap">
              ファンクラブ+プラス
            </h2>

            <p className="text-text text-[16px] leading-[1.5] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-center tracking-[0]">
              WHITE JAMをさらに知りたい方は、
              <br />
              会員証と年2回の会報誌が送られてくるファンクラブ+プラス
            </p>
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

          <p className="w-fit mt-[-1.00px] font-black text-main text-[30px] lg:text-[50px] text-center leading-[30px] lg:leading-[50px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            ファンクラブ
            <br />
            ＋プラスに入る
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

      <div className="flex flex-col w-full max-w-[968px] lg:max-w-[67vw] items-center gap-8 lg:gap-14 relative flex-[0_0_auto] mx-0 lg:ml-[-10.00px] lg:mr-[-10.00px]">
        <div className="flex flex-col w-fit items-start gap-4 relative flex-[0_0_auto]">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`${index === 0 ? "inline-flex" : "flex"} items-center gap-3 relative ${index === 0 ? "flex-[0_0_auto]" : "self-stretch w-full flex-[0_0_auto]"}`}
            >
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                <span className="w-fit mt-[-1.00px] font-semibold text-text text-[16px] lg:text-[24px] text-center leading-[1.5] lg:leading-6 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  {option.label}
                </span>
              </div>

              <span className="text-[30px] lg:text-[40px] leading-[1.2] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap">
                {option.price}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center relative self-stretch w-full max-w-[464px] lg:max-w-none flex-[0_0_auto] mx-auto">
          {membershipButtons.map((button, index) => (
            <button
              key={index}
              className="w-full max-w-[464px] lg:max-w-none lg:w-[296px] bg-light-blue flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-PC cursor-pointer hover:opacity-90 transition-opacity"
              aria-label={`${button.title}${button.subtitle ? ` ${button.subtitle}` : ""}`}
            >
              <span
                className="ml-[-18.00px] mr-[-18.00px] leading-6 relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-main text-[18px] lg:text-[24px] text-center tracking-[0] whitespace-nowrap"
              >
                {button.title}
              </span>

              {button.subtitle && (
                <span className="self-stretch font-bold text-main text-[10px] text-center leading-[10px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  {button.subtitle}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="membership-plans-scaler w-full flex justify-center lg:min-w-0 lg:w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 relative self-stretch w-full flex-[0_0_auto] lg:flex-1 lg:min-w-0 membership-plans-scaler-inner">
          <article className="flex flex-col w-full max-w-[464px] lg:flex-1 lg:min-w-0 lg:max-w-full items-center gap-6 pt-0 pb-6 px-4 lg:px-0 mx-6 lg:mx-0 relative overflow-hidden rounded-[20px_20px_0px_0px] border-4 border-solid border-light-blue bg-[#F7F6F3]" style={{ backgroundColor: "#F7F6F3" }}>
            <div className="benefit-card-header flex items-center justify-center gap-2.5 p-4 relative self-stretch w-[calc(100%+32px)] lg:w-full lg:min-w-0 flex-[0_0_auto] bg-light-blue rounded-[16px_16px_0px_0px] -mx-4 lg:mx-0">
              <h3 className="benefit-card-title w-fit mt-[-1.00px] font-extrabold text-white text-[24px] lg:text-[32px] text-center leading-[38.4px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                Webファンクラブ
              </h3>
            </div>

            <div className="benefit-card-content flex flex-col w-full max-w-[424px] lg:max-w-none lg:w-[min(396px,calc(100%-32px))] lg:min-w-0 mx-auto lg:mx-auto items-center lg:items-center gap-6 relative flex-[0_0_auto]">
              <figure className="flex flex-col w-full aspect-[3/2] lg:w-full lg:max-w-[396px] lg:min-w-0 lg:aspect-[3/2] lg:h-auto items-start justify-end gap-2.5 relative overflow-hidden rounded-none" style={{ backgroundColor: "#F7F6F3" }}>
                <img
                  src="/img/web-fanclub-pc-1@2x.png"
                  alt="Webファンクラブの様子"
                  className="absolute inset-0 -top-px w-full h-full object-cover object-[50%_50%] rounded-none"
                />
              </figure>

              <div className="inline-flex items-end gap-6 relative flex-[0_0_auto] w-full lg:w-full lg:min-w-0 lg:flex-wrap lg:gap-4 lg:justify-center">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] w-fit lg:flex-[0_1_auto] lg:min-w-[216px] lg:max-w-full">
                  <div className="flex flex-col w-fit max-w-full lg:w-full lg:max-w-[282px] lg:min-w-0 items-start gap-3 relative flex-[0_0_auto]">
                    <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[14px] lg:text-[18px] tracking-[0] leading-[18px]">
                      WHITE JAM HOUSE
                    </h4>

                    <p className="w-fit lg:self-stretch font-bold text-text text-[12px] lg:text-[14px] text-justify leading-[19.6px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                      会報誌がもらえるファンクラブです
                    </p>
                  </div>

                  <div className="flex flex-col w-[216px] lg:max-w-[216px] lg:w-full lg:min-w-0 items-start gap-[18px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                        <span className="w-fit mt-[-1.00px] font-semibold text-text text-[13px] lg:text-[16px] text-center leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                          月額
                        </span>
                      </div>

                      <span className="text-[24px] lg:text-[30px] leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap">
                        ¥500
                      </span>
                    </div>

                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                        <span className="w-fit mt-[-1.00px] font-semibold text-text text-[13px] lg:text-[16px] text-center leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                          年額
                        </span>
                      </div>

                      <span className="text-[24px] lg:text-[30px] leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap">
                        ¥5,000
                      </span>
                    </div>
                  </div>
                </div>

                <div className="click-center-when-wrapped flex flex-col w-[70px] lg:flex-shrink-0 items-center gap-0.5 relative ml-auto lg:ml-auto">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[6.89px] h-[12.45px] object-cover"
                      alt=""
                      src="https://c.animaapp.com/h73j2KJP/img/line-4-1.svg"
                    />

                    <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-text text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                      CLICK
                    </span>

                    <img
                      className="relative w-[6.89px] h-[12.45px] object-cover"
                      alt=""
                      src="https://c.animaapp.com/h73j2KJP/img/line-5-1.svg"
                    />
                  </div>

                  <div className="door-hover-group group relative w-[70px] cursor-pointer">
                    <img
                      className="door-default-img relative w-[70px] h-auto object-contain block opacity-100"
                      alt="Click to join"
                      src="https://c.animaapp.com/h73j2KJP/img/group-6-1@2x.png"
                    />
                    {/* ホバー時: SP用水色ドア */}
                    <img
                      src="/img/door-mizu-sp.svg"
                      alt="入会する"
                      className="door-overlay-img absolute inset-0 w-[70px] h-auto m-auto object-contain opacity-0 lg:hidden"
                      aria-hidden="true"
                    />
                    {/* ホバー時: PC用水色ドア */}
                    <img
                      src="/img/door-mizu-pc.svg"
                      alt="入会する"
                      className="door-overlay-img absolute inset-0 w-[70px] h-auto m-auto object-contain opacity-0 hidden lg:block"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col w-full max-w-[464px] lg:flex-1 lg:min-w-0 lg:max-w-[464px] items-center gap-[19px] relative">
            <h3 className="relative self-stretch mt-[-1.00px] font-bold text-text text-[24px] lg:text-[32px] leading-8 [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
              特典内容
            </h3>

            <ul className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-2.5 px-2.5 py-[18px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-text"
                >
                  <span className="w-fit mt-[-1.00px] font-semibold text-text text-[14px] lg:text-[18px] text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                    {benefit}
                  </span>
                </li>
              ))}

              <li className="flex flex-col items-center gap-2 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-text">
                <span className="relative self-stretch mt-[-1.00px] font-semibold text-text text-[14px] lg:text-[18px] leading-[18px] [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
                  ルームコンテンツ
                </span>

                <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="hidden lg:flex w-full lg:w-56 items-center justify-start lg:justify-end gap-2.5 pl-3 pr-0 py-0 relative">
                    <p className="w-fit lg:flex-1 mt-[-1.00px] font-semibold text-[10px] leading-[13.0px] relative [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
                      （第1水曜）GASHIMA ルーム・ラジオ
                      <br />
                      （第3水曜）SHIROSE ルーム・ダイアリー
                    </p>
                  </div>

                  <div className="flex w-fit lg:w-56 items-center justify-center gap-2.5 pl-3 lg:pl-0 pr-3 py-0 relative self-center lg:self-auto mx-auto lg:mx-0">
                    {/* SP: 全項目を1列で表示 */}
                    <p className="relative w-fit lg:flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-text text-[10px] tracking-[0] leading-[13.0px] lg:hidden">
                      （第1水曜）GASHIMA ルーム・ラジオ
                      <br />
                      （第2水曜）NIKKI ルーム・生配信
                      <br />
                      （第3水曜）SHIROSE ルーム・ダイアリー
                      <br />
                      （第4水曜）WHITE JAM ルーム・生配信
                      <br />
                      <span className="inline-block pl-[9.5ch]">※WEB会員はアーカイブのみ</span>
                    </p>
                    {/* PC: 右列は第2・第4水曜と注釈のみ（第1・第3は左列に表示） */}
                    <p className="relative w-fit lg:flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-text text-[10px] tracking-[0] leading-[13.0px] hidden lg:block">
                      （第2水曜）NIKKI ルーム・生配信
                      <br />
                      （第4水曜）WHITE JAM ルーム・生配信
                      <br />
                      <span className="inline-block pl-[9.5ch]">※WEB会員はアーカイブのみ</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
