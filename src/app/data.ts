type Project = {
  name: string;
  description: string;
  link?: string;
  video?: string;
  id: string;
  year: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: "bbvaculture",
    name: "BBVA Culture Projects",
    description:
      "At Kraftend, we collaborated with SALT Research to build public research and publishing platforms for BBVA’s cultural programs (e.g. Research on Performance in Turkey, Istanbul Encyclopedia, Hashwords, Çeviri, and GRAFT Online) with the SALT Online relaunch underway. We delivered searchable archives, custom media and editorial tools with accessible UX, clear information architecture, and maintainable workflows that help curators and researchers publish, cross‑link, and preserve materials.",
    year: "2022 - 2025",
  },
  {
    id: "bekostreamhub",
    name: "Beko Online Event Platform",
    description:
      "At Kraftend, we developed a scalable online event platform for Beko Global. Teams can create and broadcast live streams that tens of thousands of employees can access and interact with. The platform is extensible through sub-applications from employee networking and live quizzes to AI photo booths, allowing customization and evolving with new use cases.",
    year: "2022 - 2025",
  },
  {
    id: "samsungolympics",
    name: "Samsung Galaxy Media Center for Olympics",
    description:
      "At Kraftend, we helped Samsung, a Worldwide Olympic Partner, to launch digital first activations to connect media, athletes and fans worldwide. We've designed and developed a virtual experience, enhancing the Olympic games through its immersive technology. The virtual event area took place at both 2020 Tokyo and 2022 Beijing Winter Olympics.",
    year: "2021 - 2022",
  },
  {
    id: "netflixlove101",
    name: "Netflix Love101 Virtual Event",
    description:
      "At Kraftend, We developed a virtual world that visualizes the 90s Istanbul where Love101 takes place. In addition to many interactive experiences, we also hosted the live broadcast for the final season premiere watched by hundreds of thousands of people.",
    year: "2021",
  },
  {
    id: "autoshowmobility",
    name: "Autoshow Mobility",
    description:
      "At Kraftend, we designed the user experience and developed the infrastructure for the virtual expo platform for Autoshow Mobility. As a result Autoshow Mobility is the world's first and largest digital autoshow with 37 brands and more than 350 vehicles. Our technology helped to make the experience more engaging and interactive.",
    year: "2021",
  },
  {
    id: "redbullmeo",
    name: "Red Bull M.E.O. World Finals",
    description:
      "At Kraftend, We have developed the digital festival website where fans can enjoy virtual Istanbul, watch live streams, engage in interactive challenges and much more for Red Bull M.E.O. which is a competitive celebration of the mobile gaming scene where winners from 28 countries compete to identify the best players.",
    year: "2020",
  },
  {
    id: "turkcellds",
    name: "Turkcell Interactive Digital Signage",
    description:
      "Turkcell, the largest GSM operator in Turkey, chose Kraftend for developing interactive experiences in their stores. As a result, we produced and developed more than 50 interactive contents for the largest interactive digital signage project with over 1.200 store locations.",
    year: "2018 - 2020",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/cemreinanc",
  },
  {
    label: "X",
    link: "https://x.com/cemreinanc",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/cemreinanc",
  },
  {
    label: "Github",
    link: "https://github.com/cemreinanc",
  },
];

export const EMAIL = "cemre@kraftend.com";
