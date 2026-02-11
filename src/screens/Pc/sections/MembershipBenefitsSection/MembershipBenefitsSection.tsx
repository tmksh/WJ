import { useLanguage } from "../../../../contexts/LanguageContext";
import type { Lang } from "../../../../translations";

const APP_FANCLUB_IMG: Record<Lang, string> = {
  ja: "/img/web-fanclub-pc@2x.png",
  en: "/img/web-fanclub-pc-en@2x.png",
  zh: "/img/web-fanclub-pc-zh@2x.png",
};

/** ピンクドア ホバー画像（英語・中国語はPNGで差し替え、日本語は現状のSVGのまま） */
const DOOR_PINK_PC: Record<Lang, string> = {
  ja: "/img/door-pink-pc.svg",
  en: "/img/door-pink-pc-en.png",
  zh: "/img/door-pink-pc-zh.png",
};
const DOOR_PINK_SP: Record<Lang, string> = {
  ja: "/img/door-pink-sp.svg",
  en: "/img/door-pink-sp-en.png",
  zh: "/img/door-pink-sp-zh.png",
};

/** ルーム注釈「※Web…」の左余白（WHITE JAMのWの位置に揃える、英語・中国語のみ調整） */
const BENEFITS_ROOM_NOTE_INDENT: Record<Lang, string> = {
  ja: "9.5ch",
  en: "5.5em",
  zh: "7em",
};

export const MembershipBenefitsSection = (): JSX.Element => {
  const { language, t } = useLanguage();

  const pricingOptions = [
    { labelKey: "benefits_monthly" as const, priceKey: "benefits_price500" as const },
    { labelKey: "benefits_yearly" as const, priceKey: "benefits_price5000" as const },
  ];

  const membershipButtons = [
    { titleKey: "benefits_iphone" as const, subtitleKey: "benefits_carrier" as const },
    { titleKey: "benefits_android" as const, subtitleKey: "benefits_carrier" as const },
    { titleKey: "benefits_card" as const, subtitleKey: null as const },
  ];

  const benefitsKeys = [
    "benefits_ticket_advance",
    "benefits_ticket_discount",
    "benefits_movie",
    "benefits_photo",
    "benefits_timeline",
    "benefits_goods",
    "benefits_schedule",
  ] as const;

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-16 pb-0 px-4 lg:px-[max(1rem,17vw)] relative self-stretch w-full flex-[0_0_auto]">
      {/* 左端に配置するアイコン（SP: 左アイコン SP、PC: 左アイコン PCで1440px前後同じ表示） */}
      <img
        src="/img/left-icon-sp.svg"
        alt=""
        className="absolute top-0 left-0 w-[58px] h-auto lg:hidden"
        aria-hidden="true"
      />
      <img
        src="/img/left-icon-pc.svg"
        alt=""
        className="absolute top-0 left-0 w-[73px] h-auto hidden lg:block"
        aria-hidden="true"
      />
      <header className="flex flex-col w-[548px] items-center gap-0 relative flex-[0_0_auto]">
        <div className="flex self-stretch w-full flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col h-[86px] items-center justify-center gap-2 lg:gap-3 relative">
            <h2 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap" data-i18n="benefits_title">
               {t("benefits_title")}
            </h2>

            <p className="text-text text-[16px] leading-[1.5] relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-center tracking-[0] whitespace-nowrap" data-i18n="benefits_iphone_android">
              {t("benefits_iphone_android")}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto] mt-[16px] lg:mt-[12px]">
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

          <p className="w-fit mt-[-1.00px] font-black text-main text-[30px] lg:text-[50px] text-center leading-[30px] lg:leading-[50px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="benefits_join">
            {t("benefits_join")}
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

      <div className="flex flex-col w-full max-w-[968px] lg:max-w-[67vw] lg:min-w-0 items-center gap-8 lg:gap-14 relative flex-[0_0_auto] mx-0 lg:ml-[-10.00px] lg:mr-[-10.00px]">
        <div className="flex flex-col w-fit items-start gap-4 relative flex-[0_0_auto]">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`${index === 0 ? "inline-flex" : "flex"} items-center gap-3 relative ${index === 0 ? "flex-[0_0_auto]" : "self-stretch w-full flex-[0_0_auto]"}`}
            >
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                <span className="w-fit mt-[-1.00px] font-semibold text-text text-[16px] lg:text-[24px] text-center leading-[1.5] lg:leading-6 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n={option.labelKey}>
                  {t(option.labelKey)}
                </span>
              </div>

              <span className="text-[30px] lg:text-[40px] leading-[1.2] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap" data-i18n={option.priceKey}>
                {t(option.priceKey)}
              </span>
            </div>
          ))}
        </div>

        <div className="membership-buttons-row flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 relative self-stretch w-full max-w-[464px] lg:max-w-none lg:min-w-0 flex-[0_0_auto] lg:flex-[0_1_auto] mx-auto lg:mx-0">
          {membershipButtons.map((button, index) => (
            <button
              key={index}
              className="membership-btn-pc w-full lg:w-[296px] lg:flex-shrink-0 lg:max-w-[296px] bg-main flex flex-col h-[58px] items-center justify-center gap-[5px] px-4 lg:px-[82px] py-2 relative rounded-[1000px] shadow-PC cursor-pointer hover:opacity-90 transition-opacity"
              aria-label={`${t(button.titleKey)}${button.subtitleKey ? ` ${t(button.subtitleKey)}` : ""}`}
            >
              <span
                className={`${index === 0 ? "relative w-fit ml-[-0.50px] mr-[-0.50px]" : index === 1 ? "ml-[-6.00px] mr-[-6.00px] leading-6 lg:leading-6 relative w-fit" : "ml-[-18.00px] mr-[-18.00px] leading-6 lg:leading-6 relative w-fit"} [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-light-blue text-[18px] lg:text-2xl text-center tracking-[0] ${index === 0 ? "leading-6 lg:leading-6" : ""} whitespace-nowrap`}
              >
                {t(button.titleKey)}
              </span>

              {button.subtitleKey && (
                <span className="self-stretch font-bold text-light-blue text-[10px] text-center leading-[10px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n={button.subtitleKey}>
                  {t(button.subtitleKey)}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="membership-benefits-scaler w-full flex justify-center lg:min-w-0 lg:w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 relative self-stretch w-full flex-[0_0_auto] lg:flex-1 lg:min-w-0 membership-benefits-scaler-inner">
          <article className="flex flex-col w-full max-w-[464px] lg:flex-1 lg:min-w-0 lg:max-w-full items-center gap-6 pt-0 pb-6 px-4 lg:px-0 mx-6 lg:mx-0 relative overflow-hidden rounded-[20px_20px_0px_0px] border-4 border-solid border-main bg-[#F7F6F3]" style={{ backgroundColor: "#F7F6F3" }}>
            <div className="benefit-card-header flex items-center justify-center gap-2.5 p-4 relative self-stretch w-[calc(100%+32px)] lg:w-full lg:min-w-0 flex-[0_0_auto] bg-main rounded-[16px_16px_0px_0px] -mx-4 lg:mx-0">
              <h3 className="benefit-card-title w-fit mt-[-1.00px] font-extrabold text-white text-[24px] lg:text-[32px] text-center leading-[38.4px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="benefits_app_fanclub">
                {t("benefits_app_fanclub")}
              </h3>
            </div>

            <div className="benefit-card-content flex flex-col w-full max-w-[424px] lg:max-w-none lg:w-[min(396px,calc(100%-32px))] lg:min-w-0 mx-auto lg:mx-auto items-center lg:items-center gap-6 relative flex-[0_0_auto]">
              <figure className="flex flex-col w-full aspect-[3/2] lg:w-full lg:max-w-[396px] lg:min-w-0 lg:aspect-[3/2] lg:h-auto items-start justify-end gap-2.5 relative overflow-hidden rounded-none" style={{ backgroundColor: "#F7F6F3" }}>
                <img
                  src={APP_FANCLUB_IMG[language]}
                  alt={t("benefits_alt_app")}
                  className="absolute inset-0 -top-px w-full h-full object-cover object-[50%_50%] rounded-[0]"
                />
              </figure>

              <div className="inline-flex items-end gap-6 relative flex-[0_0_auto] w-full lg:w-full lg:min-w-0 lg:flex-wrap lg:gap-4 lg:justify-center">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] w-[216px] lg:flex-[0_1_auto] lg:min-w-0 lg:max-w-full">
                  <div className="flex flex-col w-full max-w-full lg:w-full lg:max-w-full lg:min-w-0 items-start gap-3 relative flex-[0_0_auto]">
                    <h4 className="benefit-h4-one-line relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[14px] lg:text-[18px] tracking-[0] leading-[18px] whitespace-nowrap lg:whitespace-normal" data-i18n="benefits_private">
                      {t("benefits_private")}
                    </h4>

                    <p className="w-fit lg:self-stretch lg:min-w-0 font-bold text-text text-[12px] lg:text-[14px] text-justify leading-[19.6px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                      <span className="whitespace-nowrap lg:whitespace-normal" data-i18n="benefits_private_desc">{t("benefits_private_desc")}</span>
                      <span className="hidden lg:inline"> </span>
                      <br className="lg:hidden" />
                      <span data-i18n="benefits_fanclub_suffix">{t("benefits_fanclub_suffix")}</span>
                    </p>
                  </div>

                  <div className="flex flex-col w-[216px] lg:max-w-[216px] lg:w-full lg:min-w-0 items-start gap-[18px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                        <span className="w-fit mt-[-1.00px] font-semibold text-text text-[13px] lg:text-[16px] text-center leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="benefits_monthly">
                          {t("benefits_monthly")}
                        </span>
                      </div>

                      <span className="text-[24px] lg:text-[30px] leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap" data-i18n="benefits_price500">
                        {t("benefits_price500")}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] border border-solid border-text">
                        <span className="w-fit mt-[-1.00px] font-semibold text-text text-[13px] lg:text-[16px] text-center leading-4 whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="benefits_yearly">
                          {t("benefits_yearly")}
                        </span>
                      </div>

                      <span className="text-[24px] lg:text-[30px] leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-center tracking-[0] whitespace-nowrap" data-i18n="benefits_price5000">
                        {t("benefits_price5000")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="click-center-when-wrapped flex flex-col w-[70px] lg:flex-shrink-0 items-center gap-0.5 relative ml-auto lg:ml-auto">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[6.89px] h-[12.45px] object-cover"
                      alt=""
                      src="https://c.animaapp.com/h73j2KJP/img/line-4.svg"
                    />

                    <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-text text-base text-center tracking-[0] leading-4 whitespace-nowrap" data-i18n="benefits_click">
                      {t("benefits_click")}
                    </span>

                    <img
                      className="relative w-[6.89px] h-[12.45px] object-cover"
                      alt=""
                      src="https://c.animaapp.com/h73j2KJP/img/line-5.svg"
                    />
                  </div>

                  <div className="door-hover-group group relative w-[70px] cursor-pointer">
                    <img
                      className="door-default-img relative w-[70px] h-auto object-contain block opacity-100"
                      alt={t("benefits_join_alt")}
                      src="https://c.animaapp.com/h73j2KJP/img/group-6@2x.png"
                    />
                    {/* ホバー時: SP用ドア（言語で差し替え） */}
                    <img
                      src={DOOR_PINK_SP[language]}
                      alt={t("benefits_join_alt")}
                      className="door-overlay-img absolute inset-0 w-[70px] h-auto m-auto object-contain opacity-0 lg:hidden"
                      aria-hidden="true"
                    />
                    {/* ホバー時: PC用ドア（言語で差し替え） */}
                    <img
                      src={DOOR_PINK_PC[language]}
                      alt={t("benefits_join_alt")}
                      className="door-overlay-img absolute inset-0 w-[70px] h-auto m-auto object-contain opacity-0 hidden lg:block"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col w-full max-w-[464px] lg:flex-1 lg:min-w-0 lg:max-w-[464px] items-center gap-[19px] relative mx-6 px-4 lg:mx-0 lg:px-0">
            <h3 className="relative self-stretch mt-[-1.00px] font-bold text-text text-[24px] lg:text-[32px] leading-8 [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]" data-i18n="benefits_benefits_title">
              {t("benefits_benefits_title")}
            </h3>

            <ul className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              {benefitsKeys.map((key, index) => (
                <li
key={key}
                className="flex items-center justify-center gap-2.5 px-2.5 py-[18px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-text"
                >
                  <span className="w-fit mt-[-1.00px] font-semibold text-text text-[14px] lg:text-[18px] text-center leading-[18px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n={key}>
                    {t(key)}
                  </span>
                </li>
              ))}

              <li className="flex flex-col items-center gap-2 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-text">
                <span className="relative self-stretch mt-[-1.00px] font-semibold text-text text-[14px] lg:text-[18px] leading-[18px] [font-family:'Noto_Sans_JP',Helvetica] text-center tracking-[0]" data-i18n="benefits_room">
                  {t("benefits_room")}
                </span>

                <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="hidden lg:flex w-full lg:w-56 items-center justify-start lg:justify-end gap-2.5 pl-3 pr-0 py-0 relative">
                    <p className="w-fit lg:flex-1 mt-[-1.00px] font-semibold text-[10px] leading-[13.0px] relative [font-family:'Noto_Sans_JP',Helvetica] text-text tracking-[0]">
                      {t("benefits_room_1st_wed")}
                      <br />
                      {t("benefits_room_3rd_wed")}
                    </p>
                  </div>

                  <div className="flex w-fit lg:w-56 items-center justify-center gap-2.5 pl-3 lg:pl-0 pr-3 py-0 relative self-center lg:self-auto mx-auto lg:mx-0">
                    {/* SP: 全項目を1列で表示 */}
                    <p className="relative w-fit lg:flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-text text-[10px] tracking-[0] leading-[13.0px] lg:hidden">
                      {t("benefits_room_1st_wed")}
                      <br />
                      {t("benefits_room_2nd_wed")}
                      <br />
                      {t("benefits_room_3rd_wed")}
                      <br />
                      {t("benefits_room_4th_wed")}
                      <br />
                      <span className="inline-block" style={{ paddingLeft: BENEFITS_ROOM_NOTE_INDENT[language] }} data-i18n="benefits_room_note">{t("benefits_room_note")}</span>
                    </p>
                    {/* PC: 右列は第2・第4水曜と注釈のみ（第1・第3は左列に表示） */}
                    <p className="relative w-fit lg:flex-1 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-semibold text-text text-[10px] tracking-[0] leading-[13.0px] hidden lg:block">
                      {t("benefits_room_2nd_wed")}
                      <br />
                      {t("benefits_room_4th_wed")}
                      <br />
                      <span className="inline-block" style={{ paddingLeft: BENEFITS_ROOM_NOTE_INDENT[language] }} data-i18n="benefits_room_note">{t("benefits_room_note")}</span>
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
