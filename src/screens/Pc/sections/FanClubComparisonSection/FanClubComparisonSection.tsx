import { useRef, useEffect } from "react";

export const FanClubComparisonSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || window.innerWidth >= 1024) return;
    const centerScroll = (): void => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        el.scrollLeft = maxScroll / 2;
      }
    };
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(centerScroll);
    });
    const ro = new ResizeObserver(centerScroll);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(t);
      ro.disconnect();
    };
  }, []);

  const comparisonData = [
    {
      rowLabel: "入会時",
      bgClass:
        "bg-[linear-gradient(0deg,rgba(112,112,112,0.05)_0%,rgba(112,112,112,0.05)_100%),linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] bg-grey-2",
      borderClass: "border-grey-1",
      cells: [
        {
          title: "住民カード",
          subtitle: "（デジタル）",
        },
        {
          title: "住民カード",
          subtitle: "（実物）",
        },
        {
          title: "バスタオル",
          subtitle: null,
        },
      ],
    },
    {
      rowLabel: "更新\n（1年毎）",
      bgClass: "",
      borderClass: "border-[#7070701a]",
      cells: [
        {
          title: "アクリルキーホルダー",
          subtitle: "(アプリファンクラブ限定デザイン)",
        },
        {
          title: "アクリルキーホルダー",
          subtitle: "(Webファンクラブ限定デザイン)",
        },
        {
          title: "1年記念日",
          subtitle: null,
        },
      ],
    },
    {
      rowLabel: "継続\n1年",
      bgClass:
        "bg-[linear-gradient(0deg,rgba(112,112,112,0.05)_0%,rgba(112,112,112,0.05)_100%),linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] bg-grey-2",
      borderClass: "border-grey-1",
      height: "h-[107px]",
      cells: [
        {
          title: null,
          subtitle: null,
        },
        {
          title: "住⺠カード\nイエローデザイン",
          subtitle: "（デジタル）",
        },
        {
          title: "2年記念日",
          subtitle: null,
        },
      ],
    },
    {
      rowLabel: "継続\n3年",
      bgClass: "",
      borderClass: "border-[#7070701a]",
      height: "h-[107px]",
      cells: [
        {
          title: null,
          subtitle: null,
        },
        {
          title: "住⺠カード\nピンクデザイン",
          subtitle: "（デジタル）",
        },
        {
          title: "3年記念日",
          subtitle: null,
        },
      ],
    },
    {
      rowLabel: "継続\n5年",
      bgClass:
        "bg-[linear-gradient(0deg,rgba(112,112,112,0.05)_0%,rgba(112,112,112,0.05)_100%),linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] bg-grey-2",
      borderClass: "border-grey-1",
      height: "h-[107px]",
      cells: [
        {
          title: null,
          subtitle: null,
        },
        {
          title: "住⺠カード\nブルーデザイン",
          subtitle: "（デジタル）",
        },
        {
          title: "5年記念日",
          subtitle: null,
        },
      ],
    },
    {
      rowLabel: "継続\n10年",
      bgClass: "",
      borderClass: "border-[#7070701a]",
      height: "h-[107px]",
      cells: [
        {
          title: null,
          subtitle: null,
        },
        {
          title: "住⺠カード\nゴールドデザイン",
          subtitle: "（デジタル）",
        },
        {
          title: "10年記念日",
          subtitle: null,
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-20 pb-0 px-4 lg:px-[236px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="inline-flex flex-col items-center justify-center gap-4 relative z-10 flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap">
            入会特典・継続特典
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start lg:items-center gap-10 relative z-10 self-stretch w-full flex-[0_0_auto] fanclub-comparison-scroll">
        <div ref={scrollContainerRef} className="w-full overflow-x-auto lg:overflow-visible">
        <div className="w-max min-w-full lg:w-full lg:flex lg:justify-center lg:min-w-0 lg:text-center">
        <div className="fanclub-comparison-table-scaler flex justify-start lg:justify-center w-full lg:w-auto lg:min-w-0 lg:mx-auto lg:inline-block">
          <table className="items-end self-stretch w-[780px] lg:w-[968px] min-w-0 flex-[0_0_auto] border-2 border-solid border-text flex flex-col relative mx-0 lg:mx-auto bg-[#F7F6F3]">
          <thead className="inline-flex items-center relative flex-[0_0_auto]">
            <tr className="inline-flex items-center relative flex-[0_0_auto] w-full">
              <th className="flex w-[90px] lg:w-[116px] h-[70px] lg:h-[76px] flex-shrink-0 items-center justify-center relative border-transparent bg-transparent" aria-hidden="true">
                {/* 行ラベル列と幅を揃える空セル */}
              </th>
              <th className="flex w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 h-[70px] lg:h-[76px] items-center justify-center gap-1 lg:gap-2.5 px-3 py-2 lg:p-4 relative bg-main box-border">
                <span className="w-fit mt-[-1.00px] font-black text-white text-sm lg:text-lg text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  ファンクラブ
                  <br />
                  ホワイトジャムハウス
                </span>
              </th>

              <th className="flex w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 h-[70px] lg:h-[76px] items-center justify-center gap-1 lg:gap-2.5 px-3 py-2 lg:p-4 relative bg-light-blue border-l [border-left-style:solid] border-grey-1 box-border">
                <span className="w-fit font-black text-white text-sm lg:text-lg text-center leading-[1.2] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  ファンクラブ+プラス
                </span>
              </th>

              <th className="flex w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 h-[70px] lg:h-[76px] items-center justify-center gap-1 lg:gap-2.5 px-3 py-2 lg:p-4 relative bg-[linear-gradient(180deg,rgba(176,123,11,1)_0%,rgba(255,230,145,1)_53%,rgba(176,123,11,0.69)_97%)] box-border">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-black-000 text-sm lg:text-lg text-center tracking-[0] leading-[1.2]">
                  SHIROSE
                  <br />
                  ファンクラブ プリンセス
                </span>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            {comparisonData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
              >
                <th
                  scope="row"
                  className={`flex w-[90px] min-w-[90px] lg:w-[116px] lg:min-w-[116px] flex-shrink-0 ${row.height ? "h-[99px] lg:h-[107px]" : "h-[77px] lg:h-[83px]"} items-center justify-center gap-1 lg:gap-2.5 p-2 lg:p-4 relative ${row.bgClass} ${row.borderClass}`}
                >
                  <span
                    className="w-fit font-bold text-text text-sm lg:text-lg text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {row.rowLabel}
                  </span>
                </th>

                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`${row.height ? "h-[99px] lg:h-[107px]" : "h-[77px] lg:h-[83px]"} ${row.borderClass} ${row.bgClass} flex flex-col w-[230px] min-w-[230px] lg:w-[284px] lg:min-w-[284px] flex-shrink-0 items-center justify-center gap-1 lg:gap-2 px-3 py-2 lg:p-4 relative border-l [border-left-style:solid] box-border`}
                  >
                    {cell.title && (
                      <span
                        className="w-full max-w-full mt-[-1.00px] font-bold text-text text-base lg:text-xl text-center leading-[1.2] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0] break-words"
                        style={{
                          whiteSpace: (cell.subtitle && !cell.title?.includes("\n")) ? "nowrap" : "pre-line",
                        }}
                      >
                        {cell.title}
                      </span>
                    )}
                    {cell.subtitle && (
                      <span className="w-fit font-medium text-text text-xs lg:text-base text-center leading-[1.2] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                        {cell.subtitle}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
        </div>
        </div>

        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-base lg:text-lg text-center tracking-[0] leading-[28.8px]">
            【Webファンクラブ】の入会特典について
          </h3>

          <p className="self-stretch font-medium text-text text-sm lg:text-lg text-justify leading-[22px] lg:leading-[28.8px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            入会時【住民カード（実物）】と、更新（一年毎）【アクリルキーホルダー(Webファンクラブ限定デザイン)】のお届けは、年会費コースのみが対象となります。月額コースは対象外となります。
            <br />
            住⺠カード（デジタル）については、年会費コース/月額コースの全てが対象となります。
          </p>
        </div>
      </div>
    </section>
  );
};
