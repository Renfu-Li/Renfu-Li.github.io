export const TICK_PAGES = [
  {
    src: "/images/list.png",
    name: "To-do list",
    features: [
      "Effortlessly create tasks with a due date",
      "Check / uncheck, and edit tasks with ease",
    ],
    id: 0,
  },
  {
    src: "/images/calendar.png",
    name: "Calendar",
    features: [
      "Click to add new task directly in calendar",
      "Edit a task by clicking it",
    ],
    id: 1,
  },
  {
    src: "/images/focus.png",
    name: "Focus",
    features: [
      "Choose a task to start a Focus",
      "Add Focus note to record your thinking",
    ],
    id: 2,
  },
  {
    src: "/images/statistics.png",
    name: "Statistics",
    features: ["Summary of focus hours", "Trend charts of focus hours"],
    id: 3,
  },
];

export const CERTIFICATES = [
  {
    src: "/images/FullStackOpen-core.png",
    institution: "University of Helsinki",
    name: "Full Stack Open - Core",
    knowledges: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "ESLint",
      "Supertest",
      "Jest",
      "Cypress",
      "Redux",
      "React Router",
    ],
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/b4eae0973be90ed495eee9e667e7ea95",
  },
  {
    src: "/images/Typescript-FullStackOpen.png",
    institution: "University of Helsinki",
    name: "Full Stack Open - TypeScript",
    knowledges: ["TypeScript"],
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/e594c94ae89bf51b11504b78c5c7add1",
  },
  {
    src: "/images/responsive web design.png",
    institution: "freeCodeCamp",
    name: "Responsive Web Desisn",
    knowledges: ["HTML", "CSS"],
    link: "https://www.freecodecamp.org/certification/renfu/responsive-web-design",
  },
  {
    src: "/images/front end.png",
    institution: "freeCodeCamp",
    name: "Front End Development Libraries",
    knowledges: ["Bootstrap", "jQuery", "SASS", "React", "Redux"],
    link: "https://www.freecodecamp.org/certification/renfu/front-end-development-libraries",
  },
  {
    src: "/images/back end.png",
    institution: "freeCodeCamp",
    name: "Back End Development & APIs",
    knowledges: ["Node", "Express", "Mongoose"],
    link: "https://www.freecodecamp.org/certification/renfu/back-end-development-and-apis",
  },
  {
    src: "/images/JS algorithm & data structure.png",
    institution: "freeCodeCamp",
    name: "JavaScript Algorithms & Data Structures",
    knowledges: [
      "Regex",
      "Data structures",
      "Algorithm scripting",
      "Object-oriented programming",
      "Functional programming",
    ],
    link: "https://www.freecodecamp.org/certification/renfu/javascript-algorithms-and-data-structures",
  },
];

export const SMALL_PROJECTS = [
  {
    src: "/images/calculator.png",
    name: "Calculator",
    link: "https://codepen.io/Renfu-Li/pen/MWLgmZo",
  },
  {
    src: "/images/markdown-previewer.png",
    name: "Markdown previewer",
    link: "https://codepen.io/Renfu-Li/pen/XWovVyN",
  },
  {
    src: "/images/pomodoro-clock.png",
    name: "Pomodoro clock",
    link: "https://codepen.io/Renfu-Li/pen/zYeYKqV",
  },
  {
    src: "/images/drum-machine.png",
    name: "Drum machine",
    link: "https://codepen.io/Renfu-Li/pen/bGzbVar",
  },
];

export const OPEN_SOURCE = [
  {
    src: "/images/outPath.png",
    link: "https://github.com/OceanNetworksCanada/api-python-client/pull/20",
    name: "first open-source contribution",
    contribution:
      "I added an @property decorator to protect _out_path, and modified the code to make the it accept both str & Path.",
    takeAways: [
      "Read, understand and modify an existing codebase",
      "Git & GitHub collaborating workflow (e.g. amend commits & rebase) ",
      "Real-life experiences on Python OOP",
      "Python's native libraries & related PEPs",
    ],
  },
  {
    src: "/images/docString.png",
    link: "https://github.com/OceanNetworksCanada/api-python-client/pull/21",
    name: "second open-source contribution",
    contribution:
      "I wrote docstrings for a section of core methods, using the NumPy style",
    takeAways: [
      "Get familiar with a new codebase",
      "Use NumPy style to document code",
      "Automatically generate documentation from docstrings",
      "Effectively communicate with collaborators",
    ],
  },
];

export const TECH_STACK = {
  Languages: [
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ],
  Frontend: [
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "MUI",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Sass",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Redux",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ],
  Backend: [
    {
      name: "NodeJS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Flask",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
  ],
  Testing: [
    {
      name: "Jest",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Cypress",
      src: "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg",
    },
    {
      name: "Selenium",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
  ],
};
