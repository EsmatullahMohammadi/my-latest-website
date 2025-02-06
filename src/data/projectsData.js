
import AfghanJob from "./../assets/portfolioImages/afghan job.png";
import Ecoton from "./../assets/portfolioImages/ecotone.png";
import ReactGame from "./../assets/portfolioImages/reactGame.jpg"
import CipherAlgorithm from "./../assets/portfolioImages/cipherAlgorithm.png"

// in progress projects
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "Ecotone Security Service",
    img: Ecoton,
    name: "Ecotone Security Service",
    stack: ["< RESTful API />", "< Tailwind css />", "< React.js />", "< Framer Motion />"],
    live: "https://ecotone-security-services.vercel.app/",
    source: "https://github.com/EsmatullahMohammadi/Ecotone-Security-Services-",
    description:
      "Ecotone Security Services is a professional website built using React and Tailwind CSS, designed for a security services company based in the USA. This project provides a sleek, modern, and user-friendly platform that highlights the company’s services, expertise, and commitment to safety. Key Features: Responsive Design: Ensures a seamless experience across all devices. Service Showcase: Clearly presents the range of security solutions offered.  User-Friendly Navigation: Easy-to-access information for potential clients.  Modern UI: Styled with Tailwind CSS for a clean and professional look.This website enhances the company’s online presence, helping them connect with clients efficiently while maintaining a strong, trustworthy brand image.",
  },
  {
    id: "AfghanJob",
    img: AfghanJob,
    name: "Afghan Job Portal",
    stack: ["< RESTful API />", "< Tailwind css />", "< React.js />", "< Node.js />", "< Express.js />", "< MongoDB />"],
    live: "https://afghan-job-portal.onrender.com/",
    source: "https://github.com/EsmatullahMohammadi/Afghan-job-portal",
    description:
      "I’m thrilled to introduce the Afghan Job Portal, a platform built using the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS. This project serves as a job listing platform specifically designed for the Afghan job market.  Key Features: 1-Multi-language Support: Accessible to a diverse audience with language options.   2-Secure Authentication: Users can sign up and log in securely via Firebase.  3-Job Filtering: Easily filter jobs based on user preferences to find relevant opportunities.",
  },
  {
    id: "react-game",
    img: ReactGame,
    name: "React Game Project",
    stack: ["< RESTful API />", "< Chakra UI />", "< React.js />"],
    live: "https://react-game-project-pi.vercel.app/",
    source: "https://github.com/EsmatullahMohammadi/react_game_project",
    description:
      "SPA (Single Page Application) for Dynamic User Interaction: This application offers an interactive experience built with ReactJS, utilizing Chakra UI for styling and responsive design. It employs React Router DOM for seamless navigation and Zustand for efficient state management. The app communicates with a REST API for data handling and features a dark and light theme toggle, providing users with a customizable interface.",
  },
  {
    id: "cipher-algorithm",
    img: CipherAlgorithm,
    name: "Cipher Algorithm Project",
    stack: ["cripto js", "< Tailwind css />", "< React.js />"],
    live: "https://cipher-algorithms.vercel.app/",
    source: "https://github.com/EsmatullahMohammadi/Cipher-algorithms",
    description:
      "This application implements various cipher algorithms, including Additive, Multiplicative, Affine, Autokey, DES, and AES. Built with React and styled using Tailwind CSS, it provides an intuitive interface for users to explore different encryption methods. The project allows users to input text and select algorithms for encryption and decryption, showcasing the functionality of each cipher in a user-friendly manner.",
  }
];

const InprogressProjectsData = [

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default { ProjectsData, InprogressProjectsData }