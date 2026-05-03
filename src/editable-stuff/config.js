// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "C Vamsi Krishna",
  middleName: "",
  lastName: "Reddy",
  message:
    "Aspiring Full Stack & Salesforce Developer · Java · Spring Boot · React · Building real-world solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/VKR-Githu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vamsireddy0306",
    },
    {
      image: "fa-envelope",
      url: "mailto:vamsireddy0306@gmail.com",
    },
  ],
  customLinks: [
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/chinthavamsikrishnareddy/",
    },
    {
      label: "HackerRank",
      url: "https://www.hackerrank.com/profile/chinthavamsikri1",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/vamsi.png.jpeg"),
  imageSize: 375,
  message:
    "I'm Vamsi Krishna Reddy, a B.Tech Computer Science (AIML) student at Mohan Babu University, Tirupati with a CGPA of 8.84. " +
    "I'm passionate about Full Stack Development and Salesforce, with hands-on experience in Java, Spring Boot, React, and cloud technologies. " +
    "I interned at Infosys where I built a Smart RideSharing platform, and completed a Salesforce Developer Virtual Internship. " +
    "Outside of coding, I captain my college basketball team and coordinate events as part of the ACM Student Chapter.",
  resume: "https://drive.google.com/file/d/1CAViB4ZHfjezM_q85FKfcZVk-qKAAIIF/view?usp=drive_link",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "VKR-Githu",
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
    { name: "Spring Boot", value: 80 },
    { name: "JavaScript", value: 75 },
    { name: "Python", value: 70 },
    { name: "React / TypeScript", value: 70 },
    { name: "HTML / CSS", value: 80 },
    { name: "MongoDB / MySQL", value: 75 },
    { name: "Salesforce / Apex", value: 72 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 85 },
    { name: "Leadership", value: 90 },
    { name: "Collaboration", value: 88 },
    { name: "Adaptability", value: 85 },
    { name: "Goal-Oriented", value: 82 },
    { name: "Communication", value: 80 },
    { name: "Organization", value: 78 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Full Stack or Salesforce Developer opportunities. If you have a position available, a question, or just want to say hi, feel free to reach out at",
  email: "vamsireddy0306@gmail.com",
};

// EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Infosys Intern",
      companyLogo: "fa-building",
      date: "Aug 2025 – Oct 2025",
      bullets: [
        "Developed Smart RideSharing platform using Spring Boot and MySQL",
        "Integrated Spring Security, JWT, Google Maps API, and payment gateways",
        "Followed Agile practices with testing using JUnit and JMeter",
      ],
    },
    {
      role: "Salesforce Developer Virtual Intern",
      companyLogo: "fa-cloud",
      date: "May 2025 – Jul 2025",
      bullets: [
        "Developed custom Salesforce applications and Apex workflows",
        "Improved system automation and user experience",
      ],
    },
  ],
};

// ACHIEVEMENTS & CERTIFICATIONS SECTION
const achievements = {
  show: true,
  heading: "Achievements & Certifications",
  data: [
    {
      title: "SYNAPSE 2K25",
      description: "Ranked 11th among 200+ teams in a national hackathon by Hubexes.",
      icon: "fa-trophy",
    },
    {
      title: "HackerRank",
      description: "Earned a Problem Solving badge in Java.",
      icon: "fa-code",
    },
    {
      title: "GDG-Tech24",
      description: "Performed outstandingly in Tech24 organized by GDG-MBU, Tirupati.",
      icon: "fa-star",
    },
    {
      title: "Infosys SpringBoard 6.0",
      description: "Certification in software development fundamentals.",
      icon: "fa-certificate",
    },
    {
      title: "Salesforce Developer with Agentblazer Champion",
      description: "Certified Salesforce Developer with Agentblazer Champion credential.",
      icon: "fa-certificate",
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      description: "Google certification for building GenAI applications.",
      icon: "fa-certificate",
    },
    {
      title: "Prompt Design in Vertex AI",
      description: "Google certification for prompt engineering in Vertex AI.",
      icon: "fa-certificate",
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
