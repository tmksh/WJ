export const FanClubComparisonSection = (): JSX.Element => {
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

  const decorativeIcons = [
    {
      src: "https://c.animaapp.com/h73j2KJP/img/dish-17040887-2-5.svg",
      alt: "Dish",
      top: "89.18%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2337972-6.svg",
      alt: "Sofa",
      top: "0",
      left: "2.90%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/plants-2338011-5.svg",
      alt: "Plants",
      top: "44.37%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/table-lamp-6480817-5.svg",
      alt: "Table lamp",
      top: "22.21%",
      left: "2.18%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2338077-5.svg",
      alt: "Sofa",
      top: "66.58%",
    },
  ];

  const decorativeIconsSecond = [
    {
      src: "https://c.animaapp.com/h73j2KJP/img/dish-17040887-2-6.svg",
      alt: "Dish",
      top: "89.18%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2337972-7.svg",
      alt: "Sofa",
      top: "0",
      left: "2.90%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/plants-2338011-6.svg",
      alt: "Plants",
      top: "44.37%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/table-lamp-6480817-6.svg",
      alt: "Table lamp",
      top: "22.21%",
      left: "2.18%",
    },
    {
      src: "https://c.animaapp.com/h73j2KJP/img/sofa-2338077-6.svg",
      alt: "Sofa",
      top: "66.58%",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 pt-20 pb-0 px-[236px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-4xl text-center tracking-[0] leading-[43.2px] whitespace-nowrap">
            入会特典・継続特典
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <table className="items-end self-stretch w-full flex-[0_0_auto] border-2 border-solid border-text flex flex-col relative">
          <thead className="inline-flex items-center relative flex-[0_0_auto]">
            <tr className="inline-flex items-center relative flex-[0_0_auto]">
              <th className="flex w-[284px] h-[76px] items-center justify-center gap-2.5 p-4 relative bg-main">
                <span className="w-fit mt-[-1.00px] font-black text-white text-lg text-center leading-[21.6px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  ファンクラブ
                  <br />
                  ホワイトジャムハウス
                </span>
              </th>

              <th className="flex w-[284px] h-[76px] items-center justify-center gap-2.5 p-4 relative bg-light-blue border-l [border-left-style:solid] border-grey-1">
                <span className="w-fit font-black text-white text-lg text-center leading-[21.6px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                  ファンクラブ+プラス
                </span>
              </th>

              <th className="flex w-[284px] h-[76px] items-center justify-center gap-2.5 p-4 relative bg-[linear-gradient(180deg,rgba(176,123,11,1)_0%,rgba(255,230,145,1)_53%,rgba(176,123,11,0.69)_97%)]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-black-000 text-lg text-center tracking-[0] leading-[21.6px]">
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
                  className={`flex w-[116px] ${row.height || "h-[83px]"} items-center justify-center gap-2.5 p-4 relative ${row.bgClass}`}
                >
                  <span
                    className="w-fit font-bold text-text text-lg text-center leading-[21.6px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {row.rowLabel}
                  </span>
                </th>

                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`${row.height || "h-[83px]"} ${row.borderClass} ${row.bgClass} flex flex-col w-[284px] items-center justify-center gap-2 p-4 relative border-l [border-left-style:solid]`}
                  >
                    {cell.title && (
                      <span
                        className="w-fit mt-[-1.00px] font-bold text-text text-xl text-center leading-[24.0px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]"
                        style={{
                          whiteSpace: cell.subtitle ? "nowrap" : "pre-line",
                        }}
                      >
                        {cell.title}
                      </span>
                    )}
                    {cell.subtitle && (
                      <span className="w-fit font-medium text-text text-base text-center leading-[19.2px] whitespace-nowrap relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
                        {cell.subtitle}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-black text-text text-lg text-center tracking-[0] leading-[28.8px]">
            【Webファンクラブ】の入会特典について
          </h3>

          <p className="self-stretch font-medium text-text text-lg text-justify leading-[28.8px] relative [font-family:'Noto_Sans_JP',Helvetica] tracking-[0]">
            入会時【住民カード（実物）】と、更新（一年毎）【アクリルキーホルダー(Webファンクラブ限定デザイン)】のお届けは、年会費コースのみが対象となります。月額コースは対象外となります。
            <br />
            住⺠カード（デジタル）については、年会費コース/月額コースの全てが対象となります。
          </p>
        </div>
      </div>

      <div
        className="flex flex-col w-[76px] items-start gap-16 absolute top-2.5 left-[1349px]"
        aria-hidden="true"
      >
        <div className="relative self-stretch w-full h-[676.18px]">
          {decorativeIcons.map((icon, index) => (
            <img
              key={index}
              className={`absolute w-[84.41%] h-[9.46%] ${icon.left ? `left-[${icon.left}]` : "left-0"}`}
              style={{ top: icon.top }}
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>

        <div className="relative self-stretch w-full h-[676.18px]">
          {decorativeIconsSecond.map((icon, index) => (
            <img
              key={index}
              className={`absolute w-[84.41%] h-[9.46%] ${icon.left ? `left-[${icon.left}]` : "left-0"}`}
              style={{ top: icon.top }}
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>
      </div>

      <div
        className="flex flex-col w-[73px] items-start gap-16 absolute top-[47px] left-5"
        aria-hidden="true"
      >
        <div className="relative self-stretch w-full h-[673.42px] bg-[url(https://c.animaapp.com/h73j2KJP/img/group-13-6.png)] bg-[100%_100%]" />

        <div className="relative self-stretch w-full h-[673.42px] bg-[url(https://c.animaapp.com/h73j2KJP/img/group-13-7.png)] bg-[100%_100%]" />
      </div>
    </section>
  );
};
