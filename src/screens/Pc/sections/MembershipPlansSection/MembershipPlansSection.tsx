export const MembershipPlansSection = (): JSX.Element => {
  const pricingOptions = [
    { label: "月額", price: "¥500" },
    { label: "年額", price: "¥5,000" },
  ];

  const membershipButtons = [
    { title: "iPhoneの方", subtitle: "(キャリア決済)" },
    { title: "Androidの方", subtitle: "(キャリア決済)" },
    { title: "カード決済の方", subtitle: "" },
  ];

  const benefits = [
    "チケット先行",
    "チケット割引",
    "ムービー",
    "フォトアルバム",
    "タイムライン",
    "ファンクラブ限定グッズ",
    "スケジュール共有",
  ];

  const decorativeIcons = [
    {
      src: "https://c.animaapp.com/h73j2KJP/img/dish-17040887-2-3.svg",
      alt: "Dish",
      top: "89.18%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2337972-4.svg",
      alt: "Sofa",
      top: "0",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/plants-2338011-3.svg",
      alt: "Plants",
      top: "44.37%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/table-lamp-6480817-3.svg",
      alt: "Table lamp",
      top: "22.21%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2338077-3.svg",
      alt: "Sofa",
      top: "66.58%",
    },
  ];

  const decorativeIconsSecond = [
    {
      src: "https://c.animaapp.com/h73j2KJP/img/dish-17040887-2-4.svg",
      alt: "Dish",
      top: "89.18%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2337972-5.svg",
      alt: "Sofa",
      top: "0",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/plants-2338011-4.svg",
      alt: "Plants",
      top: "44.37%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/table-lamp-6480817-4.svg",
      alt: "Table lamp",
      top: "22.21%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2338077-4.svg",
      alt: "Sofa",
      top: "66.58%",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 pt-16 pb-0 px-[246px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex flex-col w-[548px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex self-stretch w-full flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col h-[86px] items-center justify-center gap-3 relative">
            <h2 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-4xl text-center tracking-[0] leading-[43.2px] whitespace-nowrap">
              Webファンクラブで加入できます
            </h2>

            <p className="text-text leading-[28.8px] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-2xl text-center tracking-[0] whitespace-nowrap">
              (PC・スマートフォン)
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          {/* 左側の装飾（入会するの斜線） */}
          <img
            src="/img/Frame4.png"
            alt=""
            className="flex-shrink-0 w-7 h-12 object-contain"
            width={28}
            height={48}
            aria-hidden={true}
          />

          <p className="w-fit mt-[-1.00px] font-black text-main text-[50px] text-center leading-[50px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            入会する
          </p>

          {/* 右側の装飾（デスクトップの Frame 5.svg） */}
          <img
            src="/img/Frame5.svg"
            alt=""
            className="flex-shrink-0 w-7 h-12 object-contain"
            width={28}
            height={48}
            aria-hidden={true}
          />
        </div>
      </header>

      <div className="flex flex-col w-[968px] items-center gap-14 relative flex-[0_0_auto] ml-[-10.00px] mr-[-10.00px]">
        <div className="flex flex-col w-[216px] items-start gap-4 relative flex-[0_0_auto]">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`${index === 0 ? "inline-flex" : "flex"} items-center gap-3 relative ${index === 0 ? "flex-[0_0_auto]" : "self-stretch w-full flex-[0_0_auto]"}`}
            >
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                <span className="w-fit mt-[-1.00px] font-semibold text-text text-2xl text-center leading-6 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  {option.label}
                </span>
              </div>

              <span className="text-[40px] leading-10 relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap">
                {option.price}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          {membershipButtons.map((button, index) => (
            <button
              key={index}
              className="w-[296px] bg-light-blue flex flex-col h-[58px] items-center justify-center gap-[5px] px-[82px] py-2 relative rounded-[1000px] shadow-PC cursor-pointer hover:opacity-90 transition-opacity"
              aria-label={`${button.title}${button.subtitle ? ` ${button.subtitle}` : ""}`}
            >
              <span
                className={`${index === 0 ? "relative w-fit ml-[-0.50px] mr-[-0.50px]" : index === 1 ? "ml-[-6.00px] mr-[-6.00px] leading-6 relative w-fit" : "ml-[-18.00px] mr-[-18.00px] leading-6 relative w-fit"} [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-main text-2xl text-center tracking-[0] ${index === 0 ? "leading-6" : ""} whitespace-nowrap`}
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

        <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <article className="flex flex-col w-[464px] items-center gap-6 pt-0 pb-6 px-0 relative bg-grey-1 rounded-[20px_20px_0px_0px] border-4 border-solid border-light-blue">
            <div className="flex items-center justify-center gap-2.5 p-4 relative self-stretch w-full flex-[0_0_auto] bg-light-blue rounded-[20px_20px_0px_0px]">
              <h3 className="w-fit mt-[-1.00px] font-extrabold text-white text-[32px] text-center leading-[38.4px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                Webファンクラブ
              </h3>
            </div>

            <div className="flex flex-col w-[396px] items-start gap-6 relative flex-[0_0_auto]">
              <figure className="flex flex-col w-[396px] h-[264px] items-start justify-end gap-2.5 relative overflow-hidden bg-grey-1">
                <img
                  src="/img/web-fanclub-pc-1@2x.png"
                  alt="Webファンクラブの様子"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_50%]"
                />
                <figcaption className="flex w-[396px] items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#8acbd899] z-10">
                  <p className="w-fit mt-[-1.00px] font-bold text-white text-xs text-center leading-[15.6px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                    3人のプライベートなど、Web限定でのぞき見できます。
                    <br />
                    メンバーの共同生活の様子も発信。
                  </p>
                </figcaption>
              </figure>

              <div className="inline-flex items-end gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[282px] items-start gap-3 relative flex-[0_0_auto]">
                    <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-lg tracking-[0] leading-[18px]">
                      WHITE JAM HOUSE プライベート
                    </h4>

                    <p className="self-stretch font-bold text-text text-sm text-justify leading-[19.6px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                      配信多めで、メンバーのプライベートが見れるファンクラブです
                    </p>
                  </div>

                  <div className="flex flex-col w-[216px] items-start gap-[18px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                        <span className="w-fit mt-[-1.00px] font-semibold text-text text-base text-center leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                          月額
                        </span>
                      </div>

                      <span className="text-3xl leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap">
                        ¥500
                      </span>
                    </div>

                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                        <span className="w-fit mt-[-1.00px] font-semibold text-text text-base text-center leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                          年額
                        </span>
                      </div>

                      <span className="text-3xl leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap">
                        ¥5,000
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[90px] items-center gap-0.5 relative">
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

                  <img
                    className="relative w-[90px] h-[130px]"
                    alt="Click to join"
                    src="https://c.animaapp.com/h73j2KJP/img/group-6-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col w-[464px] items-center gap-[19px] relative">
            <h3 className="relative self-stretch mt-[-1.00px] font-bold text-text text-[32px] leading-8 [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
              特典内容
            </h3>

            <ul className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-2.5 px-2.5 py-[18px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-text"
                >
                  <span className="w-fit mt-[-1.00px] font-semibold text-text text-lg text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                    {benefit}
                  </span>
                </li>
              ))}

              <li className="flex flex-col items-center gap-2 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-text">
                <span className="relative self-stretch mt-[-1.00px] font-semibold text-text text-lg leading-[18px] [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]">
                  ルームコンテンツ
                </span>

                <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-56 items-center justify-end gap-2.5 pl-3 pr-0 py-0 relative">
                    <p className="flex-1 mt-[-1.00px] font-semibold text-[10px] leading-[13.0px] relative [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
                      （第1水曜）GASHIMA ルーム・ラジオ
                      <br />
                      （第3水曜）SHIROSE ルーム・ダイアリー
                    </p>
                  </div>

                  <div className="flex w-56 items-center gap-2.5 pl-0 pr-3 py-0 relative">
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-text text-[10px] tracking-[0] leading-[13.0px]">
                      （第2水曜）NIKKI ルーム・生配信
                      <br />
                      （第4水曜）WHITE JAM ルーム・生配信
                      <br />
                      ※WEB会員はアーカイブのみ
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col w-[76px] items-start gap-16 absolute top-16 left-[1344px]"
        aria-hidden={true}
      >
        <div className="relative self-stretch w-full h-[676.18px]">
          {decorativeIcons.map((icon, index) => (
            <img
              key={index}
              className={`absolute w-[84.41%] h-[9.46%] ${index === 0 ? "left-0" : index === 1 ? "left-[2.90%]" : index === 2 ? "left-0" : index === 3 ? "left-[2.18%]" : "left-0"}`}
              style={{ top: icon.top }}
              alt=""
              src={icon.src}
            />
          ))}
        </div>

        <div className="relative self-stretch w-full h-[676.18px]">
          {decorativeIconsSecond.map((icon, index) => (
            <img
              key={index}
              className={`absolute w-[84.41%] h-[9.46%] ${index === 0 ? "left-0" : index === 1 ? "left-[2.90%]" : index === 2 ? "left-0" : index === 3 ? "left-[2.18%]" : "left-0"}`}
              style={{ top: icon.top }}
              alt=""
              src={icon.src}
            />
          ))}
        </div>
      </div>

      <div
        className="flex flex-col w-[73px] items-start gap-16 absolute top-16 left-5"
        aria-hidden={true}
      >
        <div className="relative self-stretch w-full h-[673.42px] bg-[url(https://c.animaapp.com/h73j2KJP/img/group-13-4.png)] bg-[100%_100%]" />

        <div className="relative self-stretch w-full h-[673.42px] bg-[url(https://c.animaapp.com/h73j2KJP/img/group-13-5.png)] bg-[100%_100%]" />
      </div>
    </section>
  );
};
