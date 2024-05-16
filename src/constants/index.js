// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  react,
  sass,
  tailwindcss,
  instagram,
  weather,
  dice,
  movies,
  drum,
  games,
  list,
  postgres,
  mysql,
  bootstrap,
  oracle,
  udemy,
  myskill,
  python,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: postgres,
    name: "Postgres",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "Mysql",
    type: "Database",
  },
  {
    imageUrl: oracle,
    name: "Oracle",
    type: "Database",
  },
];

export const experiences = [
  {
    title: "The Complete 2023 Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#BF55EC",
    date: "30 July 2023 - 30 October 2023",
    points: [
      "Learn basic web development programming such as HTML, CSS and JavaScript",
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
      "Build fully-fledged websites and web apps for your startup or business.",
    ],
    certificate:
      "https://drive.google.com/file/d/1C1NgZPElmexnfZq3G-DOa1KawvoNU8ES/view?usp=sharing",
  },
  {
    title: "DFO Database Foundations Learner ",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#eaeaea",
    date: "23 June 2023",
    points: [
      "ntroduction to Database Definition and basic concepts of databases. Differentiation between data, information, and databases.",
      "ntroduction to RDBMS and its role in managing databases. Tables, rows, and columns in the context of relational databases.",
      "Use of SQL (Structured Query Language) for retrieving, updating, and managing data in relational databases.",
      "Introduction to NoSQL databases and a comparison with relational databases",
      "Creating and managing simple databases. Writing and executing basic SQL queries.",
    ],
    certificate:
      "https://drive.google.com/file/d/1___MlpoBADK93K7DaOuOpKjEGLu_cnbf/view?usp=sharing",
  },
  {
    title: "Myskill Short Class UI/UX",
    company_name: "Myskill",
    icon: myskill,
    iconBg: "#FAF9F6",
    date: "11 May 2023",
    points: [
      "differences between ui and ux design.",
      "General processes in UI and UX design.",
      "explanation of design thinking.",
    ],
    certificate:
      "https://drive.google.com/file/d/1vxTsBoRt00kP8YKkeSNwFXl_t6AHyscS/view?usp=sharing",
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Instagram",
    iconUrl: instagram,
    link: "https://www.instagram.com/ridzwan.g/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ridzwan-gunawan/",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/RidzwanGunawan",
  },
];

export const projects = [
  {
    iconUrl: movies,
    theme: "btn-back-red",
    name: "Web Search Movies",
    description:
      "Creating Web Search Movies to make it easier for users to find complete information about various films and TV shows. With an intuitive interface, users can quickly search for movies by title, or year of release.",
    link: "https://github.com/RidzwanGunawan/web-search-movies",
    pages: "https://web-search-movies.vercel.app/",
  },
  {
    iconUrl: drum,
    theme: "btn-back-green",
    name: "Drum Kit",
    description:
      "Creating an interactive Website-based Drum Kit platform that allows users to explore and play drums online Designed with an intuitive and responsive interface that can be played directly via the keyboard or clicking the mouse.",
    link: "https://github.com/RidzwanGunawan/Drum-Kit",
    pages: "https://drum-kit-ten-rho.vercel.app/",
  },
  {
    iconUrl: games,
    theme: "btn-back-blue",
    name: "Simon Games",
    description:
      "Simon Games Website is a fun destination to enjoy classic Simon games online. With a colorful appearance and intuitive interface, this website offers an entertaining and challenging gaming experience for users of all ages.",
    link: "https://github.com/RidzwanGunawan/simon-game",
    pages: "https://ridzwangunawan.github.io/simon-game/",
  },
  {
    iconUrl: dice,
    theme: "btn-back-pink",
    name: "Dice Games",
    description:
      "Create a fun dice game website to enjoy your free time. This website offers a user interface that is attractive to look at and an interactive gaming experience that provides enjoyment for people of all ages.",
    link: "https://github.com/RidzwanGunawan/Dice-Games",
    pages: "https://ridzwangunawan.github.io/Dice-Games/",
  },
  {
    iconUrl: weather,
    theme: "btn-back-black",
    name: "Weather Apps",
    description:
      "create a Weather Application Website that provides fast and accurate access to the latest weather information and forecasts throughout the world easily and provides an attractive appearance to look at.",
    link: "https://github.com/RidzwanGunawan/Weather-Apps",
    pages: "https://ridzwangunawan.github.io/Weather-Apps/",
  },
  {
    iconUrl: list,
    theme: "btn-back-yellow",
    name: "To-Do-List",
    description:
      "created a To-Do List Website that allows users to create, organize, and track their to-do lists easily and efficiently online. This website provides useful tools for users to manage their daily work more organized and effective.",
    link: "https://github.com/RidzwanGunawan/To-Do-List",
    pages: "https://ridzwangunawan.github.io/To-Do-List/",
  },
];
