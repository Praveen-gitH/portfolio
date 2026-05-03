// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Uppara",
  middleName: "",
  lastName: "Praveen",
  message:
    "Entry-Level Software Engineer · Java Backend Developer · AI & ML · Building scalable applications with Core Java & OOP.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Praveen-gitH",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/praveen-uppara-a53173307/",
    },
    {
      image: "fa-envelope",
      url: "mailto:praveenupraveen20@gmail.com",
    },
  ],
  customLinks: [
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/Praveen_uppara/",
    },
    {
      label: "HackerRank",
      url: "https://www.hackerrank.com/profile/praveenupraveen1",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: null,
  imageSize: 375,
  message:
    "I'm Uppara Praveen, a B.Tech student at Mohan Babu University (2023–2027) with a current CGPA of 8.66, specializing in Artificial Intelligence and Machine Learning. " +
    "I have strong fundamentals in Java programming with hands-on knowledge of Core Java, OOP principles, and backend development concepts for building scalable applications. " +
    "I enjoy solving problems through code and have built projects like a Student Management System and a Snake Game using Core Java. " +
    "I'm actively seeking a Java Backend Developer role to apply my technical skills and grow in a professional software environment.",
  resume: "",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Praveen-gitH",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 85 },
    { name: "Core Java / OOP", value: 85 },
    { name: "Data Structures & Algorithms", value: 75 },
    { name: "Python (Basics)", value: 50 },
    { name: "Git & GitHub", value: 75 },
    { name: "Debugging Java Programs", value: 80 },
    { name: "VS Code / Eclipse", value: 70 },
    { name: "Software Development Lifecycle", value: 65 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 85 },
    { name: "Logical Thinking", value: 88 },
    { name: "Adaptability", value: 80 },
    { name: "Collaboration", value: 78 },
    { name: "Goal-Oriented", value: 82 },
    { name: "Communication", value: 75 },
    { name: "Organization", value: 75 },
    { name: "Creativity", value: 78 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Java Backend Developer opportunities. If you have a position available, a question, or just want to say hi, feel free to reach out at",
  email: "praveenupraveen20@gmail.com",
};

// EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: "Projects",
  data: [
    {
      role: "Student Management System – Java",
      companyLogo: "fa-database",
      date: "Core Java Project",
      bullets: [
        "Developed a console-based Student Management System using Core Java.",
        "Implemented features to add, update, delete, and view student records.",
        "Used GitHub for version control and project management.",
      ],
    },
    {
      role: "Snake Game – Java",
      companyLogo: "fa-gamepad",
      date: "Core Java Project",
      bullets: [
        "Built a classic Snake game using Core Java and OOP concepts.",
        "Implemented game logic, keyboard controls, collision detection, and scoring system.",
        "Strengthened understanding of event handling and game loops.",
      ],
    },
    {
      role: "Java Practice Programs",
      companyLogo: "fa-code",
      date: "Ongoing",
      bullets: [
        "Developed multiple Java programs focusing on arrays, strings, loops, and methods.",
        "Improved logical thinking and problem-solving skills through regular practice.",
      ],
    },
  ],
};

// ACHIEVEMENTS & CERTIFICATIONS SECTION
const achievements = {
  show: true,
  heading: "Education",
  data: [
    {
      title: "B.Tech – Mohan Babu University (2023–2027)",
      description: "Pursuing B.Tech in AI & ML with a current CGPA of 8.66.",
      icon: "fa-graduation-cap",
    },
    {
      title: "Intermediate – Narayana Jr College (2021–2023)",
      description: "Completed Intermediate with 89% from Narayana Jr College.",
      icon: "fa-book",
    },
    {
      title: "Class X – Narayana Group of School (2020–2021)",
      description: "Scored 100% in Class X from Narayana Group of School.",
      icon: "fa-star",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  achievements,
};
