import { FanClubComparisonSection } from "./sections/FanClubComparisonSection";
import { FanClubOverviewSection } from "./sections/FanClubOverviewSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MembershipBenefitsSection } from "./sections/MembershipBenefitsSection";
import { MembershipPlansSection } from "./sections/MembershipPlansSection";
import { ShiroseFanClubSection } from "./sections/ShiroseFanClubSection";

const decorativeIconsLeft = [
  {
    src: "https://c.animaapp.com/h73j2KJP/img/dish-17040887-2.svg",
    alt: "Dish",
    top: "89.18%",
    left: "0",
  },
  {
    src: "https://c.animaapp.com/h73j2KJP/img/sofa-2337972.svg",
    alt: "Sofa",
    top: "0",
    left: "2.90%",
  },
  {
    src: "https://c.animaapp.com/h73j2KJP/img/plants-2338011.svg",
    alt: "Plants",
    top: "44.37%",
    left: "0",
  },
  {
    src: "https://c.animaapp.com/h73j2KJP/img/table-lamp-6480817.svg",
    alt: "Table lamp",
    top: "22.21%",
    left: "2.18%",
  },
  {
    src: "https://c.animaapp.com/h73j2KJP/img/sofa-2338077.svg",
    alt: "Sofa",
    top: "66.58%",
    left: "0",
  },
];

const decorativeIconsRight = [
  {
    src: "https://c.animaapp.com/h73j2KJP/img/sofa-2337972-1.svg",
    alt: "Sofa",
    top: "0",
    left: "2.90%",
  },
];

export const Pc = (): JSX.Element => {
  return (
    <div
      className="bg-grey-1 overflow-hidden w-full min-w-0 min-h-screen lg:min-h-[6182px] lg:w-full relative"
      data-model-id="42:2"
    >
      <aside
        className="hidden lg:flex flex-col w-[76px] items-start gap-16 absolute top-[5412px] left-[1349px]"
        aria-hidden="true"
      >
        <div className="relative self-stretch w-full h-[676.18px]">
          {decorativeIconsLeft.map((icon, index) => (
            <img
              key={index}
              className="absolute w-[84.41%] h-[9.46%]"
              style={{ top: icon.top, left: icon.left }}
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>

        <div className="relative self-stretch w-full h-[676.18px]">
          <img
            className="absolute w-[84.41%] h-[9.46%] top-[-725.87%] left-[-15289.26%]"
            alt="Dish"
            src="/img/dish-17040887-2.png"
          />

          {decorativeIconsRight.map((icon, index) => (
            <img
              key={index}
              className="absolute w-[84.41%] h-[9.46%]"
              style={{ top: icon.top, left: icon.left }}
              alt={icon.alt}
              src={icon.src}
            />
          ))}

          <img
            className="top-[-770.68%] left-[-15290.58%] absolute w-[84.41%] h-[9.46%]"
            alt="Plants"
            src="/img/plants-2338011.png"
          />

          <img
            className="absolute w-[84.41%] h-[9.46%] top-[-794.31%] left-[-15276.07%]"
            alt="Table lamp"
            src="/img/table-lamp-6480817.png"
          />

          <img
            className="top-[-749.94%] left-[-15273.44%] absolute w-[84.41%] h-[9.46%]"
            alt="Sofa"
            src="/img/sofa-2338077.png"
          />
        </div>
      </aside>

      <aside
        className="hidden lg:flex flex-col w-[73px] items-start gap-16 absolute top-[5449px] left-5"
        aria-hidden="true"
      >
        <div className="relative self-stretch w-full h-[673.42px] bg-[url(https://c.animaapp.com/h73j2KJP/img/group-13.png)] bg-[100%_100%]" />

        <div className="relative self-stretch w-full h-[673.42px] mt-[-4818.00px] ml-[-10265.00px] bg-[url(https://c.animaapp.com/h73j2KJP/img/group-13-1.png)] bg-[100%_100%]" />
      </aside>

      <img
        className="absolute top-4 left-4 lg:left-[92px] w-[60px] h-auto lg:w-[77px] lg:h-[65px] aspect-[1.19] object-cover"
        alt="White House Logo"
        src="https://c.animaapp.com/h73j2KJP/img/250529-white-house-logo@2x.png"
      />

      <main className="flex flex-col w-full max-w-full lg:w-full items-start relative lg:absolute lg:top-0 lg:left-0">
        <HeroSection />
        <MembershipBenefitsSection />
        <MembershipPlansSection />
        <ShiroseFanClubSection />
        <FanClubComparisonSection />
        <FanClubOverviewSection />
        <FooterSection />
      </main>
    </div>
  );
};
