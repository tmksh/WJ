export const ShiroseFanClubSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-20 pb-0 px-4 lg:px-[max(1rem,16.5vw)] relative self-stretch w-full flex-[0_0_auto]">
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

      {/* PC: 添付画像1枚で表示（枠線・背景なし） */}
      <div className="hidden lg:block shirose-fanclub-article-scaler w-full max-w-[968px] min-h-0 -mt-[6px]">
        <article className="shirose-fanclub-article flex flex-col w-full min-h-0 lg:w-full lg:max-w-[67vw] lg:h-[560px] lg:min-h-[560px] items-center justify-center p-0 relative lg:overflow-hidden">
          <img
            src="/img/shirose-fanclub-pc.png"
            alt="SHIROSEファンクラブは、「1年中の記念日を一緒に過ごしたい」という思いで生まれました。1年中のいろんな記念日にいつも配信します。"
            className="w-full h-full object-contain object-center"
          />
        </article>
      </div>
      {/* SP: MembershipPlansSectionのarticleと同じ幅（max-w-[464px]）に揃える */}
      <article className="flex lg:hidden flex-col w-full max-w-[464px] min-h-0 items-start gap-2.5 p-0 relative mx-auto">
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
