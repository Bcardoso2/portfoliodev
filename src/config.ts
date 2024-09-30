import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Bricio Cardoso",
  logo: "/eueu.png",
  email: "briciodevpa@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/bcardoso2",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:briciodevpa@gmail.com",
    icon: "mdi:email",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/briciocardoso/",
    icon: "mdi:linkedin",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Bricio Cardoso",
    description:
      "I’m a passionate Fullstack Developer with experience in Flutter, ReactJS, Typescript, Python, Docker, and Git. I began my career as a Systems Analyst, where I gained valuable insights into support and the implementation of ERP and HCM solutions. I enjoy working with business and people management, always looking for ways to innovate and enhance user experiences. I’m excited to take on new challenges and continue learning!",
    image: identity.logo,
  },
  role: "Fullstack Developer",
  description:
    "I’m a passionate Fullstack Developer experienced in Flutter, ReactJS, Typescript, Python, Docker, and Git. I started my career as a Systems Analyst, focusing on ERP and HCM solutions. I enjoy innovating in business and people management, and I'm always eager to take on new challenges and continue learning!",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Bricio Cardoso",
    description:
      "Fullstack Developer who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `My name is Bricio Cardoso, and I’m 24 years old, living in Belém, Brazil. I’m a Fullstack Developer with a deep passion for knowledge and continuous learning. Currently, I’m part of the Devs Norte community, where I actively participate in events and knowledge sharing.<br/><br/>

Growing up, I was always fascinated by technology, which led me to a career in software development. I enjoy exploring languages and frameworks like Flutter, ReactJS, Python, Docker, and Git. My journey began as a Systems Analyst, where I honed my skills in ERP and HCM solutions.<br/><br/>

Recently, I’ve been collaborating with Engineer Andrey Albuquerque on the development of a CRM to optimize activities. This experience has been very enriching, allowing me to apply and expand my technical knowledge in practical projects.<br/><br/>

Outside of work, I’m a car enthusiast—both modern and classic—and I have a strong fascination with Formula 1. In my free time, I also enjoy playing airsoft, which is a fun way to connect with friends.<br/><br/>

I’m excited about new challenges and committed to continuing my learning and creating impactful solutions.`, // Markdown is supported
    image_l: {
      url: "/devdizapp.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/frigorificogoiasapp.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Fullstack Developer",
        company: {
          name: "Mednutri Hospitalar - Grupo NB",
          image: "/mednutri.webp",
          url: "https://github.com/Bcardoso2",
        },
        date: "May - 2023 - Jun - 2024",
      },
      {
        title: "ERP Developer",
        company: {
          name: "Synergie Consulting",
          image: "/synergie.jpeg",
          url: "https://github.com/Bcardoso2",
        },
        date: "Jan - 2023 - Apr -  2023",
      },
      {
        title: "Senior Systems Analyst",
        company: {
          name: "Agrotools",
          image: "/agrotools.jpeg",
          url: "https://github.com/Bcardoso2",
        },
        date: " Jan - 2022 - Oct 2022",
      },{
        title: "System Analyst",
        company: {
          name: "Agropalma",
          image: "/agropalma.png",
          url: "https://github.com/Bcardoso2",
        },
        date: "Apr - 2019 - Apr - 2022",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Bricio Cardoso",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Dizimo App",
      description: "The tithing app simplifies donations to your church, allowing users to contribute quickly and securely. With features to track donation history and receive reminders, it promotes transparency and engagement within the community.",
      image: "/devdizapp.jpg",
      year: "2024",
      url: "https://github.com/Bcardoso2",
    },
    {
      title: "Frigorifico Goias",
      description: "This app optimizes inventory control in refrigeration facilities with a robust system for managing goods. It allows for the division and deduction of loss percentages, performing complex calculations to ensure inventory accuracy. With an intuitive interface, it facilitates monitoring product integrity and reducing waste.",
      image: "/frigorificogoiasapp.jpg",
      year: "2023",
      url: "https://github.com/Bcardoso2",
    },
    {
      title: "Reception App",
      description: "This reception app generates QR codes to streamline visitor entry into the company. Clients receive a unique code that can be scanned at the entrance, simplifying the check-in process. Additionally, the app features a display panel showcasing visitor names and details, ensuring efficient and organized management of foot traffic.",
      image: "/portaria.png",
      year: "2023",
      url: "https://github.com/Bcardoso2",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Bricio Cardoso",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
