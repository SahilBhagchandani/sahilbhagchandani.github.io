/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Sahil Bhagchandani",
  title: "Hi, I'm Sahil",
  subTitle:
    "Software Engineer building Enterpise Application and integrate AI — React, NodeJS, NoSQL, AWS, LLMs, RAG, and scalable data/ML pipelines across Python/Flask.",
  resumeLink: "https://drive.google.com/file/d/1m4THX62Q891mezCcJCrpGl-kGMbgj3uz/view?usp=sharing", // optional: add Google Drive / PDF link
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/SahilBhagchandani", // e.g. https://github.com/SahilBhagchandani
  linkedin: "https://www.linkedin.com/in/sahil-bhagchandani-05276b16a/",
  gmail: "sahil.bhagchandani520@gmail.com",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "I design and ship AI based products end-to-end: data → model → APIs → UI → evaluation → monitoring.",
  skills: [
    "⚡ Build and deploy LLM apps (RAG, semantic search, summarization, assistants) with measurable quality improvements.",
    "⚡ Engineer scalable preprocessing + analytics pipelines (Pandas/SQL) for multi-million row datasets.",
    "⚡ Ship microservices with Python (Flask/FastAPI) + Node.js, and production UIs with React.",
    "⚡ Implement evaluation + experimentation (A/B tests, F1/Precision/Recall/BLEU) and monitor drift/usage.",
  ],
  softwareSkills: [
    // Languages
    { skillName: "Python", iconifyClassName: "logos:python" },
    { skillName: "JavaScript", fontAwesomeClassName: "fab fa-js-square" },
    { skillName: "Java", fontAwesomeClassName: "fab fa-java" },
    { skillName: "SQL", fontAwesomeClassName: "fas fa-database" },
    { skillName: "Go", fontAwesomeClassName: "fas fa-code" },

    // AI / ML
    { skillName: "Transformers", fontAwesomeClassName: "fas fa-robot" },
    { skillName: "LangChain", fontAwesomeClassName: "fas fa-link" },
    { skillName: "RAG", fontAwesomeClassName: "fas fa-network-wired" },
    { skillName: "PyTorch", fontAwesomeClassName: "fas fa-fire" },
    { skillName: "TensorFlow", fontAwesomeClassName: "fas fa-brain" },
    { skillName: "scikit-learn", fontAwesomeClassName: "fas fa-chart-line" },

    // Backend / Frontend
    { skillName: "Node.js", fontAwesomeClassName: "fab fa-node-js" },
    { skillName: "Flask", fontAwesomeClassName: "fas fa-flask" },
    { skillName: "FastAPI", fontAwesomeClassName: "fas fa-bolt" },
    { skillName: "React", fontAwesomeClassName: "fab fa-react" },
    { skillName: "GraphQL", fontAwesomeClassName: "fas fa-project-diagram" },

    // Data / DB
    { skillName: "PostgreSQL", fontAwesomeClassName: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassName: "fas fa-database" },
    { skillName: "Databricks", fontAwesomeClassName: "fas fa-server" },
    { skillName: "Amazon Redshift", fontAwesomeClassName: "fas fa-database" },

    // Cloud / DevOps
    { skillName: "AWS", fontAwesomeClassName: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassName: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassName: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassName: "fas fa-cubes" },

    // Testing / Observability
    { skillName: "PyTest", fontAwesomeClassName: "fas fa-vial" },
    { skillName: "JUnit", fontAwesomeClassName: "fas fa-check-circle" },
  ],
  display: true,
};

// Skill Progress (required by template imports; disabled)
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false,
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer – AI",
      company: "Walmart Global Tech",
      companylogo: require("./assets/images/walmart.png"),
      date: "Jan 2023 – Present",
      desc:
        "Built and deployed production GenAI pipelines and LLM microservices across Python/Node.js + React, enabling summarization, report generation, chatbots, entity recognition, and semantic search.",
      descBullets: [
        "Deployed GenAI pipelines using Flask/FastAPI, Hugging Face Transformers, Node.js APIs, and React UI.",
        "Built scalable preprocessing pipelines with Pandas + SQL for multi-million row datasets.",
        "Fine-tuned and served LLMs (BERT, LLaMA) for classification/NER/semantic search with ~90% accuracy.",
        "Implemented ML/DL models including RAG, Gradient Boosting, XGBoost, and Logistic Regression for predictive analytics.",
        "Built model analytics dashboards (Tableau/Looker) to monitor drift, usage, and performance.",
        "Implemented A/B testing + evaluation using F1, precision, recall, and BLEU.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Intuit",
      companylogo: require("./assets/images/intuit-logo.jfif"),
      date: "May 2022 – Jul 2022",
      desc:
        "Built LLM applications and vector-search workflows for recommendations, assistants, and large-scale document analysis.",
      descBullets: [
        "Developed AI-powered content recommendation system using React, Node.js, LangChain + Pinecone; improved engagement by ~40%.",
        "Built a multi-model AI assistant integrating OpenAI GPT; improved support efficiency by ~60%.",
        "Implemented real-time document analysis using LlamaIndex + PostgreSQL; processed 1M+ docs/day with 99.9% accuracy.",
        "Performed time series forecasting using VAR and NNAR to model trends and system/user behavior.",
        "Contributed to a GenAI synthetic data platform improving model performance by ~30%.",
      ],
    },
  ],
};

// Open Source (required by template imports; disabled)
const openSource = {
  showGithubProfile: "true", // must be string in this template
  display: false,
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "San José State University",
      logo: require("./assets/images/SJSU-logo.png"),
      subHeader: "M.S. in Computer Software Engineering",
      duration: "Jan 2021 – Dec 2022",
      desc: "",
      descBullets: [],
    },
    {
      schoolName: "Indus University, Gujarat",
      logo: require("./assets/images/indus-logo.jpg"),
      subHeader: "B.Tech in Computer Engineering",
      duration: "Aug 2016 – Jun 2020",
      desc: "",
      descBullets: [],
    },
  ],
};

// Certifications / Achievements
const achievementSection = {
  title: "Certifications 🏆",
  subtitle: "Industry certifications and foundations",
  achievements: [], // keep for compatibility
  achievementsCards: [
    {
      title: "AWS Security Fundamentals",
      subtitle: "",
      image: require("./assets/images/AWS.webp"), // keep empty if you don't use images
      imageAlt: "AWS",
      footerLink: [], // MUST be an array
    },
    {
      title: "Cisco Python Essentials",
      subtitle: "",
      image: require("./assets/images/cisco-logo.png"),
      imageAlt: "Cisco",
      footerLink: [], // MUST be an array
    },
  ],
  display: true,
};


// Publications
const publicationsSection = {
  title: "Publications",
  subtitle: "Research and applied ML work",
  publications: [
    {
      title: "Imbalanced Network Traffic Intrusion Detection Using Deep Learning",
      conferenceName: "Aug 2022 – Dec 2022",
      description:
        "Reduced redundant majority-class data using ENN + K-Means; trained and benchmarked ML/DL pipelines with TensorFlow + scikit-learn and tuned hyperparameters to prevent overfitting.",
      footerLink: [{ name: "Paper", url: "" }],
    },
  ],
  display: true,
};

// Big Projects (required by template imports; disabled per request)
const bigProjects = {
  title: "Projects",
  subtitle: "Applied AI/ML + full-stack engineering",
  projects: [],
  display: false,
};

// Talks (required by template imports; disabled)
const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false,
};

// Podcast (required by template imports; disabled)
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "",
  podcast: [],
  display: false,
};

// Twitter (required by template imports; disabled)
const twitterDetails = {
  userName: "",
  display: false,
};

const blogSection = {
  title: "Blog",
  subtitle: "",
  blogs: [],
  display: false,
};


// Contact
const contactInfo = {
  title: "Contact me",
  subtitle:
    "Want to collaborate on Enterprise Application, GenAI/LLM products, data pipelines, or scalable systems? Let’s talk.",
  number: "",
  email_address: "sahil.bhagchandani520@gmail.com",
};

const resumeSection = {
  title: "Resumes",
  subtitle: "Download Resme",
  resumes: [],
  display: true,
};



const isHireable = true;

export {
  illustration,
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  publicationsSection,
  achievementSection,
  talkSection,
  podcastSection,
  twitterDetails,
  educationInfo,
  contactInfo,
  blogSection,
  resumeSection,
  isHireable,
};
