export const TICK_PAGES = [
  {
    src: "/src/assets/images/list.png",
    name: "To-do list",
    features: [
      "Effortlessly create tasks with a due date",
      "Check / uncheck, and edit tasks with ease",
    ],
    id: 0,
  },
  {
    src: "/src/assets/images/calendar.png",
    name: "Calendar",
    features: [
      "Click to add new task directly in calendar",
      "Edit a task by clicking it",
    ],
    id: 1,
  },
  {
    src: "/src/assets/images/focus.png",
    name: "Focus",
    features: [
      "Choose a task to start a Focus",
      "Add Focus note to record your thinking",
    ],
    id: 2,
  },
  {
    src: "/src/assets/images/statistics.png",
    name: "Statistics",
    features: ["Summary of focus hours", "Trend charts of focus hours"],
    id: 3,
  },
];

export const CERTIFICATES = [
  {
    src: "/src/assets/images/FullStackOpen-core.png",
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
    src: "/src/assets/images/Typescript-FullStackOpen.png",
    institution: "University of Helsinki",
    name: "Full Stack Open - TypeScript",
    knowledges: ["TypeScript"],
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/e594c94ae89bf51b11504b78c5c7add1",
  },
  {
    src: "/src/assets/images/responsive web design.png",
    institution: "freeCodeCamp",
    name: "Responsive Web Desisn",
    knowledges: ["HTML", "CSS"],
    link: "https://www.freecodecamp.org/certification/renfu/responsive-web-design",
  },
  {
    src: "/src/assets/images/front end.png",
    institution: "freeCodeCamp",
    name: "Front End Development Libraries",
    knowledges: ["Bootstrap", "jQuery", "SASS", "React", "Redux"],
    link: "https://www.freecodecamp.org/certification/renfu/front-end-development-libraries",
  },
  {
    src: "/src/assets/images/back end.png",
    institution: "freeCodeCamp",
    name: "Back End Development & APIs",
    knowledges: ["Node", "Express", "Mongoose"],
    link: "https://www.freecodecamp.org/certification/renfu/back-end-development-and-apis",
  },
  {
    src: "/src/assets/images/JS algorithm & data structure.png",
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
    src: "/src/assets/images/calculator.png",
    name: "Calculator",
    link: "https://codepen.io/Renfu-Li/pen/MWLgmZo",
  },
  {
    src: "/src/assets/images/markdown-previewer.png",
    name: "Markdown previewer",
    link: "https://codepen.io/Renfu-Li/pen/XWovVyN",
  },
  {
    src: "/src/assets/images/pomodoro-clock.png",
    name: "Pomodoro clock",
    link: "https://codepen.io/Renfu-Li/pen/zYeYKqV",
  },
  {
    src: "/src/assets/images/drum-machine.png",
    name: "Drum machine",
    link: "https://codepen.io/Renfu-Li/pen/bGzbVar",
  },
];

export const OPEN_SOURCE = [
  {
    src: "/src/assets/images/outPath.png",
    link: "https://github.com/OceanNetworksCanada/api-python-client/pull/20",
    name: "first open-source contribution",
    contribution:
      "I added an @property decorator to protect _out_path, and modified the code to make the it accept both str & Path.",
    takeAways: [
      "Read, understand and modify an existing codebase",
      "Git & GitHub collaborating workflow (e.g. amend commits & rebase) ",
      "Real-life experiences on Python OOP, such as using decorators to protect an attribute",
      "Python's native libraries (e.g. pathlib) & related PEPs",
    ],
  },
  {
    src: "/src/assets/images/docString.png",
    link: "https://github.com/OceanNetworksCanada/api-python-client/pull/21",
    name: "second open-source contribution",
    contribution:
      "I wrote docstrings for a section of core methods, using the NumPy style",
    takeAways: [
      "Get used to read & understand code created by others",
      "Use NumPy style to document code",
      "Knowledge on automatically generate documentation from docstring",
      "Effectively communicate with collaborators",
    ],
  },
];
