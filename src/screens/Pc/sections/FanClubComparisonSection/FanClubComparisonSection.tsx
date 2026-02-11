import { useRef, useEffect } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const FanClubComparisonSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || window.innerWidth >= 1024) return;
    const centerScroll = (): void => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        el.scrollLeft = maxScroll / 2;
      }
    };
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(centerScroll);
    });
    const ro = new ResizeObserver(centerScroll);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  const comparisonData = [
    {
      rowLabelKey: "comparison_on_join" as const,
      bgClass:
        "bg-[linear-gradient(0deg,rgba(112,112,112,0.05)_0%,rgba(112,112,112,0.05)_100%),linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] bg-grey-2",
      borderClass: "border-grey-1",
      cells: [
        { titleKey: "comparison_resident_digital" as const, subtitleKey: "comparison_resident_sub" as const },
        { titleKey: "comparison_resident_digital" as const, subtitleKey: "comparison_resident_real" as const },
        { titleKey: "comparison_towel" as const, subtitleKey: null },
      ],
    },
    {
      rowLabelKey: "comparison_renew" as const,
      bgClass: "",
      borderClass: "border-[#7070701a]",
      cells: [
        { titleKey: "comparison_acrylic_app" as const, subtitleKey: "comparison_acrylic_app_sub" as const },
        { titleKey: "comparison_acrylic_app" as const, subtitleKey: "comparison_acrylic_web" as const },
        { titleKey: "comparison_1y_anniversary" as const, subtitleKey: null },
      ],
    },
    {
      rowLabelKey: "comparison_1y" as const,
      bgClass:
        "bg-[linear-gradient(0deg,rgba(112,112,112,0.05)_0%,rgba(112,112,112,0.05)_100%),linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] bg-grey-2",
      borderClass: "border-grey-1",
      height: "h-[107px]",
      cells: [
        { titleKey: null, subtitleKey: null },
        { titleKey: "comparison_yellow_card" as const, subtitleKey: "comparison_resident_sub" as const },
        { titleKey: "comparison_2y_anniversary" as const, subtitleKey: null },
      ],
    },
    {
      rowLabelKey: "comparison_3y" as const,
      bgClass: "",
      borderClass: "border-[#7070701a]",
      height: "h-[107px]",
      cells: [
        { titleKey: null, subtitleKey: null },
        { titleKey: "comparison_pink_card" as const, subtitleKey: "comparison_resident_sub" as const },
        { titleKey: "comparison_3y_anniversary" as const, subtitleKey: null },
      ],
    },
    {
      rowLabelKey: "comparison_5y" as const,
      bgClass:
        "bg-[linear-gradient(0deg,rgba(112,112,112,0.05)_0%,rgba(112,112,112,0.05)_100%),linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] bg-grey-2",
      borderClass: "border-grey-1",
      height: "h-[107px]",
      cells: [
        { titleKey: null, subtitleKey: null },
        { titleKey: "comparison_blue_card" as const, subtitleKey: "comparison_resident_sub" as const },
        { titleKey: "comparison_5y_anniversary" as const, subtitleKey: null },
      ],
    },
    {
      rowLabelKey: "comparison_10y" as const,
      bgClass: "",
      borderClass: "border-[#7070701a]",
      height: "h-[107px]",
      cells: [
        { titleKey: null, subtitleKey: null },
        { titleKey: "comparison_gold_card" as const, subtitleKey: "comparison_resident_sub" as const },
        { titleKey: "comparison_10y_anniversary" as const, subtitleKey: null },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-20 pb-0 px-4 lg:px-[max(1rem,16.5vw)] relative self-stretch w-full flex-[0_0_auto]">
      <header className="inline-flex flex-col items-center justify-center gap-4 relative z-10 flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap" data-i18n="comparison_title">
            {t("comparison_title")}
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start lg:items-center gap-10 relative z-10 self-stretch w-full flex-[0_0_auto]">
        <div ref={scrollContainerRef} className="fanclub-comparison-scroll w-full overflow-x-auto pb-[10px] lg:pb-0">
        <div className="w-max min-w-full lg:w-full lg:flex lg:justify-center lg:min-w-0 lg:text-center">
        <div className="fanclub-comparison-table-scaler flex justify-start lg:justify-center w-full lg:max-w-[67vw] lg:w-full lg:min-w-0 lg:mx-auto lg:inline-block">
          <table className="fanclub-comparison-table items-end self-stretch w-[780px] lg:w-[968px] lg:min-w-[968px] min-w-0 flex-[0_0_auto] border-2 border-solid border-text flex flex-col relative mx-0 lg:mx-auto bg-[#F7F6F3]">
          <colgroup>
            <col className="fanclub-comparison-col-1" />
            <col className="fanclub-comparison-col-2" />
            <col className="fanclub-comparison-col-3" />
            <col className="fanclub-comparison-col-4" />
          </colgroup>
          <thead className="inline-flex items-center relative flex-[0_0_auto]">
            <tr className="inline-flex items-center relative flex-[0_0_auto] w-full min-w-[780px] lg:min-w-[968px]">
              <th className="flex w-[90px] lg:w-[116px] h-[70px] lg:h-[76px] flex-shrink-0 items-center justify-center relative border-transparent bg-transparent" aria-hidden="true">
                {/* 行ラベル列と幅を揃える空セル */}
              </th>
              <th className="flex w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 h-[70px] lg:h-[76px] items-center justify-center gap-1 lg:gap-2.5 px-3 py-2 lg:p-4 relative bg-main box-border">
                <span className="w-fit mt-[-1.00px] font-black text-white text-sm lg:text-lg text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" style={{ whiteSpace: "pre-line" }} data-i18n="comparison_fanclub_wh">
                  {t("comparison_fanclub_wh")}
                </span>
              </th>

              <th className="flex w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 h-[70px] lg:h-[76px] items-center justify-center gap-1 lg:gap-2.5 px-3 py-2 lg:p-4 relative bg-light-blue border-l [border-left-style:solid] border-grey-1 box-border">
                <span className="w-fit font-black text-white text-sm lg:text-lg text-center leading-[1.2] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n="comparison_plus">
                  {t("comparison_plus")}
                </span>
              </th>

              <th className="flex w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 h-[70px] lg:h-[76px] items-center justify-center gap-1 lg:gap-2.5 px-3 py-2 lg:p-4 relative bg-[linear-gradient(180deg,rgba(176,123,11,1)_0%,rgba(255,230,145,1)_53%,rgba(176,123,11,0.69)_97%)] box-border">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-black-000 text-sm lg:text-lg text-center tracking-[0] leading-[1.2]" style={{ whiteSpace: "pre-line" }} data-i18n="comparison_shirose">
                  {t("comparison_shirose")}
                </span>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            {comparisonData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="flex items-center relative self-stretch w-full min-w-[780px] lg:min-w-[968px] flex-[0_0_auto]"
              >
                <th
                  scope="row"
                  className={`flex w-[90px] min-w-[90px] lg:w-[116px] lg:min-w-[116px] flex-shrink-0 ${row.height ? "h-[99px] lg:h-[107px]" : "h-[77px] lg:h-[83px]"} items-center justify-center gap-1 lg:gap-2.5 p-2 lg:p-4 relative ${row.bgClass} ${row.borderClass}`}
                >
                  <span
                    className="w-fit font-bold text-text text-sm lg:text-lg text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]"
                    style={{ whiteSpace: "pre-line" }}
                    data-i18n={row.rowLabelKey}
                  >
                    {t(row.rowLabelKey)}
                  </span>
                </th>

                {row.cells.map((cell, cellIndex) => {
                  const isEnAcrylic =
                    language === "en" &&
                    cell.titleKey === "comparison_acrylic_app" &&
                    cell.subtitleKey != null;
                  const enTwoLineText =
                    isEnAcrylic && cell.subtitleKey
                      ? `${t(cell.titleKey)}\n${t(cell.subtitleKey)}`
                      : null;
                  return (
                  <td
                    key={cellIndex}
                    className={`${row.height ? "h-[99px] lg:h-[107px]" : "h-[77px] lg:h-[83px]"} ${row.borderClass} ${row.bgClass} flex flex-col w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 items-center justify-center gap-1 lg:gap-2 px-3 py-2 lg:p-4 relative border-l [border-left-style:solid] box-border`}
                  >
                    {enTwoLineText != null ? (
                      <span
                        className="w-full max-w-full mt-[-1.00px] font-bold text-text text-base lg:text-xl text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] break-words"
                        style={{ whiteSpace: "pre-line" }}
                        data-i18n={cell.titleKey}
                      >
                        {enTwoLineText}
                      </span>
                    ) : (
                      <>
                        {cell.titleKey && (
                          <span
                            className="w-full max-w-full mt-[-1.00px] font-bold text-text text-base lg:text-xl text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] break-words"
                            style={{
                              whiteSpace:
                                language === "en" &&
                                (cell.titleKey === "comparison_towel" || cell.titleKey === "comparison_1y_anniversary")
                                  ? "nowrap"
                                  : cell.subtitleKey && !t(cell.titleKey).includes("\n")
                                    ? "nowrap"
                                    : "pre-line",
                            }}
                            data-i18n={cell.titleKey}
                          >
                            {t(cell.titleKey)}
                          </span>
                        )}
                        {cell.subtitleKey && (
                          <span className="w-fit font-medium text-text text-xs lg:text-base text-center leading-[1.2] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" data-i18n={cell.subtitleKey}>
                            {t(cell.subtitleKey)}
                          </span>
                        )}
                      </>
                    )}
                  </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
        </div>
        </div>

        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-base lg:text-lg text-center tracking-[0] leading-[28.8px]" data-i18n="comparison_web_note_title">
            {t("comparison_web_note_title")}
          </h3>

          <p className="self-stretch font-medium text-text text-sm lg:text-lg text-justify leading-[22px] lg:leading-[28.8px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]" style={{ whiteSpace: "pre-line" }} data-i18n="comparison_web_note_body">
            {t("comparison_web_note_body")}
          </p>
        </div>
      </div>
    </section>
  );
};
