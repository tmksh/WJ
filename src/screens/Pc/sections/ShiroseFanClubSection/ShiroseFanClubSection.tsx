export const ShiroseFanClubSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-20 pb-0 px-4 lg:px-[236px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col h-[86px] items-center justify-center gap-3 relative">
          <h2 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[16px] lg:text-[24px] text-center tracking-[0] leading-[1.2] whitespace-nowrap">
            もっとSHIROSEを知りたい方は…
          </h2>

          <h3 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-extrabold text-text text-[22px] lg:text-[36px] text-center tracking-[0] leading-[1.2] whitespace-nowrap">
            SHIROSE ファンクラブ プリンセス
          </h3>
        </div>
      </header>

      <article className="flex flex-col w-full max-w-[968px] min-h-0 lg:min-h-[400px] lg:h-[588px] items-start gap-2.5 p-0 lg:p-2 relative lg:bg-black-000 border-0 lg:border-8 lg:border-solid lg:border-transparent lg:[border-image:linear-gradient(180deg,rgba(176,123,11,1)_0%,rgba(255,230,145,1)_53%,rgba(176,123,11,0.69)_97%)_1] -mt-[6px] lg:-ml-[8px]">
        {/* SP: 金枠・黒背景なし、画像を横幅いっぱい（アスペクト比維持） */}
        <div className="lg:hidden w-full relative">
          <img
            src="/img/shirose-fanclub-sp.png"
            alt="SHIROSEファンクラブは、「1年中の記念日を一緒に過ごしたい」という思いで生まれました。1年中のいろんな記念日にいつも配信します。"
            className="w-full h-auto block"
          />
        </div>
        {/* PC: 既存レイアウト */}
        <div className="hidden lg:flex flex-col lg:flex-row w-full max-w-[952px] min-h-0 lg:h-[572px] items-start justify-end relative -mt-[8px] lg:-ml-[8px]">
          <div className="flex flex-col w-full max-w-[525px] lg:h-[572px] items-start justify-end relative overflow-visible">
            <img
              className="relative flex-shrink-0 object-cover"
              style={{ width: 612, height: 408, minWidth: 612, minHeight: 408 }}
              alt="SHIROSE ファンクラブの写真"
              src="https://c.animaapp.com/h73j2KJP/img/231004-164.png"
            />

            <div className="flex w-full max-w-[525px] h-[164px] items-center justify-center gap-2.5 px-4 lg:px-[22px] py-[34px] relative bg-[url(https://c.animaapp.com/h73j2KJP/img/frame-90.png)] bg-cover bg-[50%_50%]">
              <p className="relative w-[481px] mt-[-1.00px] [text-shadow:0px_0px_2px_#ffffff9e] bg-[linear-gradient(150deg,rgba(176,123,11,1)_0%,rgba(255,230,145,1)_53%,rgba(176,123,11,0.69)_97%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-xl text-justify tracking-[0] leading-[32.0px]">
                <span className="font-medium text-black">
                  SHIROSEファンクラブは、
                </span>

                <span className="font-extrabold text-black">
                  「1年中の記念日を一緒に過ごしたい」
                </span>

                <span className="font-medium text-black">
                  という思いで生まれました。1年中のいろんな記念日にいつも配信します。
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[427px] items-start gap-7 relative">
            <img
              className="relative self-stretch w-full aspect-[1.76]"
              alt="SHIROSE ファンクラブイベントの写真"
              src="https://c.animaapp.com/h73j2KJP/img/241209-074@2x.png"
            />

            <div className="flex w-full max-w-[427px] h-[301px] items-center justify-end gap-[25px] relative">
              <img
                className="relative w-[200.83px] h-[301.21px] mt-[-0.11px] mb-[-0.11px] aspect-[0.67] object-cover"
                alt="SHIROSE ファンクラブの活動写真1"
                src="https://c.animaapp.com/h73j2KJP/img/231004-185@2x.png"
              />

              <img
                className="relative w-[200.83px] h-[301.21px] mt-[-0.11px] mb-[-0.11px] aspect-[0.67] object-cover"
                alt="SHIROSE ファンクラブの活動写真2"
                src="https://c.animaapp.com/h73j2KJP/img/250108-691@2x.png"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
