export const FooterSection = (): JSX.Element => {
  const copyrightTexts = [
    "掲載されているすべてのコンテンツ(記事、画像、音声データ、映像データ等)の無断転載を禁じます。",
    "© 2025 WJ Inc. All Rights Reserved. Powered by SKIYAKI Inc.",
  ];

  return (
    <footer className="flex flex-col items-center gap-6 px-4 lg:px-[max(1rem,8.5vw)] py-8 lg:py-10 relative self-stretch w-full flex-[0_0_auto] overflow-visible">
      <div className="flex flex-col w-[130px] items-center gap-1.5 relative flex-[0_0_auto]">
        <img
          className="w-20 h-[68px] relative aspect-[1.19] object-cover"
          alt="White House Logo"
          src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo-2@2x.png"
        />

        <div className="flex flex-col items-center gap-[1.49px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="mt-[-0.50px] [text-shadow:1px_1px_0px_#bc1e69] text-[22px] leading-[24.4px] relative self-stretch [font-family:'Poppins',Helvetica] font-bold text-light-blue text-center tracking-[0]">
            FANCLUB
          </div>

          <div className="[text-shadow:1px_1px_0px_#8acbd8] [font-family:'Poppins',Helvetica] font-bold text-main text-[22px] text-center leading-[24.4px] relative self-stretch tracking-[0]">
            WHITE JAM
            <br />
            HOUSE
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-2 lg:gap-6 relative self-stretch w-full flex-[0_0_auto] min-h-[2.5rem]">
        {copyrightTexts.map((text, index) => (
          <p
            key={index}
            className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-text text-[10px] text-center tracking-[0] leading-[10px] lg:whitespace-nowrap"
          >
            {text}
          </p>
        ))}
      </div>
    </footer>
  );
};
