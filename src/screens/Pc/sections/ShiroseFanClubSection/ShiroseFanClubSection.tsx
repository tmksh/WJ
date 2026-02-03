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

      {/* PC: article全体をそのまま縮小（ラッパーでスケール） */}
      <div className="hidden lg:block shirose-fanclub-article-scaler w-full max-w-[968px] min-h-0 -mt-[6px]">
        <article className="shirose-fanclub-article flex flex-col w-full min-h-0 lg:w-[968px] lg:h-[588px] lg:min-h-[588px] items-start gap-2.5 p-0 lg:p-2 relative lg:bg-black-000 border-0 lg:border-8 lg:border-solid lg:border-transparent lg:[border-image:linear-gradient(180deg,rgba(176,123,11,1)_0%,rgba(255,230,145,1)_53%,rgba(176,123,11,0.69)_97%)_1] lg:-ml-[8px]">
          {/* PC: 固定サイズの2カラムレイアウト（article全体のscaleで縮小される） */}
          <div className="hidden lg:flex flex-col lg:flex-row items-stretch justify-end gap-0 relative w-[952px] h-[572px] -mt-[8px] lg:-ml-[8px] flex-shrink-0">
          <div className="flex flex-col w-[525px] flex-shrink-0 lg:h-[572px] items-stretch justify-end overflow-hidden min-w-0">
            <div className="w-full flex-1 min-h-0 overflow-hidden flex items-start justify-center">
              <img
                className="relative max-w-full max-h-full w-full h-auto aspect-[612/408] object-contain object-top"
                alt="SHIROSE ファンクラブの写真"
                src="https://c.animaapp.com/h73j2KJP/img/231004-164.png"
              />
            </div>

            <div className="flex w-full h-[164px] flex-shrink-0 items-center justify-center gap-2.5 px-4 lg:px-[22px] py-[34px] relative bg-[url(https://c.animaapp.com/h73j2KJP/img/frame-90.png)] bg-cover bg-[50%_50%]">
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

          <div className="flex flex-col w-[427px] flex-shrink-0 items-stretch gap-7 relative overflow-hidden min-w-0 lg:h-[572px]">
            <div className="w-full flex-1 min-h-0 overflow-hidden flex items-start justify-center">
              <img
                className="relative max-w-full max-h-full w-full h-auto aspect-[1.76] object-contain object-center"
                alt="SHIROSE ファンクラブイベントの写真"
                src="https://c.animaapp.com/h73j2KJP/img/241209-074@2x.png"
              />
            </div>

            <div className="flex w-full flex-shrink-0 items-center justify-end gap-[25px] relative overflow-hidden min-w-0">
              <img
                className="relative max-w-[201px] max-h-[301px] w-full h-auto aspect-[201/301] object-contain flex-shrink-0 min-w-0"
                alt="SHIROSE ファンクラブの活動写真1"
                src="https://c.animaapp.com/h73j2KJP/img/231004-185@2x.png"
              />

              <img
                className="relative max-w-[201px] max-h-[301px] w-full h-auto aspect-[201/301] object-contain flex-shrink-0 min-w-0"
                alt="SHIROSE ファンクラブの活動写真2"
                src="https://c.animaapp.com/h73j2KJP/img/250108-691@2x.png"
              />
            </div>
          </div>
          </div>
        </article>
      </div>
      {/* SP: 金枠・黒背景なし、画像を横幅いっぱい */}
      <article className="flex lg:hidden flex-col w-full min-h-0 items-start gap-2.5 p-0 relative">
        <div className="w-full min-w-0 overflow-hidden relative">
          <img
            src="/img/shirose-fanclub-sp.png"
            alt="SHIROSEファンクラブは、「1年中の記念日を一緒に過ごしたい」という思いで生まれました。1年中のいろんな記念日にいつも配信します。"
            className="w-full max-w-full h-auto block object-contain"
          />
        </div>
      </article>
    </section>
  );
};
