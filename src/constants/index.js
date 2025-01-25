import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,

  threejs,
  geenovate,
  cosmic,
  java,
  fitlife,
  vidtube,
  codepen,
  cosmicquest,
  webgaurd,
  chatty,
  chat,
  vid,
  fit,
  cat,
  shot,
  code,
  unity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const underlearning = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Moblie Devlopment",
    icon: mobile,
  },
  {
    title: "Backend Developement",
    icon: backend,
  },
  {
    title: "MERN Stack Devlopment",
    icon: creator,
  },
];

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "unity",
    icon: unity,
  },
];

// Certificates
// This file contains all the certificate data

const certificates = [
  {
    name: "Geenovate 2K24",
    description: "First in national level hackathon at Geetanjali college of enginnering and technology",
    tags: [
      { name: "Hackathon", color: "text-green-500" },
      { name: "First price", color: "text-blue-500" },
    ],
    image: geenovate, // Replace with actual image URL
  },
  {
    name: "Cosmic Craftathon",
    description: "Landed under top 5 in national level hackathon at IIIT Nagpur",
    tags: [
      { name: "Hackathon", color: "text-orange-500" },
      { name: "Top 5 ", color: "text-red-500" },
    ],
    image: cosmic, // Replace with actual image URL
  },
  {
    name: "Java Certificate",
    description: "Acheived Java Certificate from Hackerrank",
    tags: [
      { name: "Java", color: "text-cyan-500" },
      { name: "Hackerrank", color: "text-yellow-500" },
    ],
    image: java, // Replace with actual image URL
  },
];


// Projects (formerly Experiences)
const projects = [
  {
    title: "Codepen Projects",
    company_name: "Personal Portfolio",
    icon: code,
    iconBg: "#383E56",
    date: "Ongoing",
    image: codepen,
    points: [
      "Built various interactive front-end projects using HTML, CSS, JavaScript, and React.",
      "Focused on UI/UX design, implementing modern and responsive design techniques.",
      "Explored and showcased creative coding experiments with animation and interactive elements.",
    ],
  },
  {
    title: "Chat Application",
    company_name: "Personal Project",
    icon: chat, // Placeholder, replace with your actual icon
    iconBg: "#E6DEDD",
    date: "Ongoing",
    image: chatty,
    points: [
      "Built a real-time chat application using React, Node.js, and Socket.io.",
      "Implemented features such as user authentication, message notifications, and group chats.",
      "Optimized the application for both desktop and mobile devices using responsive design.",
    ],
  },
  {
    title: "YouTube Clone",
    company_name: "Personal Project",
    icon: vid, // Placeholder, replace with your actual icon
    iconBg: "#E6DEDD",
    date: "Ongoing",
    image: vidtube,
    points: [
      "Developed a YouTube clone using React and Redux for state management.",
      "Integrated video streaming and search functionality similar to YouTube.",
      "Created a modern and mobile-responsive UI using CSS and Tailwind.",
    ],
  },
  {
    title: "FitLifeForge",
    company_name: "Health & Fitness App",
    icon: fit, // Placeholder, replace with actual icon
    iconBg: "#383E56",
    date: "Ongoing",
    image: fitlife,
    points: [
      "Developed a health-based mobile app using React Native to track fitness goals.",
      "Integrated features like workout plans, meal tracking, and health assessments.",
      "Added a real-time chat feature to connect users with fitness experts for advice.",
    ],
  },
  {
    title: "WebGuard",
    company_name: "Security App",
    icon: cat, // Placeholder, replace with actual icon
    iconBg: "#E6DEDD",
    date: "Ongoing",
    image: webgaurd,
    points: [
      "Developed an app to detect fake websites, fake news, and fraudulent activities.",
      "Integrated web scraping and machine learning algorithms for real-time threat detection.",
      "Focused on a user-friendly UI with informative alerts and notifications.",
    ],
  },
  {
    title: "Cosmic Craftathon",
    company_name: "IIIT Nagpur",
    icon: shot, // Replace with actual icon if available
    iconBg: "#E6DEDD",
    date: "Completed",
    image: cosmicquest, // Replace with actual image if available
    points: [
      "Landed in the top 5 of the national-level hackathon at IIIT Nagpur.",
      "Worked on innovative solutions for real-world problems in the event.",
      "Collaborated with a team to develop a project that received recognition from judges.",
    ],
  },
];


export { underlearning, technologies, certificates, projects };
