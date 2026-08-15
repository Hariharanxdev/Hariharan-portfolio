/**
 * Developer portfolio data based on HariHaran E resume
 */

export interface DeveloperInfo {
  name: string;
  title: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
  resumeUrl: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
    grade?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  impact?: string;
  category: 'app' | 'ai' | 'web' | 'Full Stack Web Application' | 'Fullstack web application';
  coverImage: string;
  //year: string;
  sourceCode?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  description?: string;
  icon?: string;
  level?: number; // 1-100 for technical skills
  color?: string;
}

import image1 from '../assets/image1.PNG?url';
import image2 from '../assets/image2.jpg?url';
import image3 from '../assets/image3.png?url';
import image4 from '../assets/image4.png?url';
import image5 from '../assets/image5.jpg?url';
import image6 from '../assets/image6.jpg?url';


export const developerInfo: DeveloperInfo = {
  name: 'HariHaran E',
  title: 'Full-Stack Developer | Software Developer ',
  tagline: 'Building scalable solutions with modern technologies',
  heroIntroduction: 'Passionate about building innovative web applications and AI solutions that solve real-world problems. Specializing in full-stack development, and integrating AI/ML for smarter user experiences.',
  biography: `I am an Information Technology graduate with a strong interest in Fullstack Development, Backend Development and Artificial Intelligence. I enjoy solving real-world problems using technology and continuously improving my skills through hands-on projects and learning.

I have experience working with Python, SQL, ReactJS, Django and I am currently focused on building practical, impactful projects—especially in AI-based applications. I am motivated, detail-oriented, and eager to contribute to innovative teams while growing as a software professional.`,
  email: 'hariharanelumalai03@gmail.com',
  phone: '6369579892',
  location: 'Villupuram, Tamil Nadu',
  linkedIn: 'https://linkedin.com/in/hariharanxdev',
  github: 'https://github.com/Hariharanxdev',
  resumeUrl: '/HARIHARAN_RESUME.pdf',
  education: [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'I.F.E.T COLLEGE OF ENGINEERING VILLUPURAM, TAMIL NADU',
      duration: '2021 - 2025',

    },
    {
      degree: 'HSC',
      institution: 'V.R.P HIGHER SECONDARY SCHOOL, VILLUPURAM',
      duration: '2019 - 2021'
    },
    {
      degree: 'SSLC',
      institution: 'V.R.P HIGHER SECONDARY SCHOOL, VILLUPURAM',
      duration: '2018 - 2019'
    }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Online Unused Medicine Donation for NGOs',
    slug: 'medicine-donation-platform',
    description: 'A platform that enables donation of unused medicines to NGOs for safe and efficient distribution.',

    longDescription: 'A web platform that enables users to donate unused and unexpired medicines to NGOs, reducing waste and helping communities. It connects donors and NGOs through a centralized system with donation tracking and request management, ensuring smooth coordination. The platform also includes admin verification to ensure safe and transparent distribution of medicines.',

    techStack: [ 'Python', 'Django', 'SQL' , 'HTML', 'CSS', 'JavaScript',],
    features: [
      'User registration and login for donors and NGOs',
      'Medicine donation with expiry date validation',
      'NGO request and donation tracking system',
      'Admin verification for safe and transparent distribution',
      'Notifications and status updates for donors and NGOs on donation progress'
    ],
    category: 'web',
    coverImage: image1,
    sourceCode: 'https://github.com/Hariharanxdev/NGO-Project.git'
  },
  {
    id: '2',
    title: 'Future Decentralized Digital Commerce with ONDC Using Blockchain and AI',
    slug: 'decentralized-commerce',
    description: 'A decentralized commerce platform using ONDC, Blockchain, and AI for secure and intelligent transactions.',
    longDescription: 'A decentralized digital commerce platform built on ONDC using Blockchain and AI for secure and transparent transactions. Blockchain ensures data integrity, while AI enables smart recommendations and fraud detection. The system connects multiple vendors and buyers in an open, scalable, and efficient ecosystem.',
    techStack: ['ReactJS', 'Node.js', 'Express.js', 'PostgreSQL', 'Blockchain', 'AI'],
    features: [
      'Blockchain-based secure and transparent transactions',
      'AI-powered product recommendations and fraud detection',
      'Multi-vendor support through ONDC integration',
      'Decentralized system reducing dependency on central platforms',
      'Smart contract-based order and payment processing for automation and trust'
    ],
    //impact: 'Go Project',
    category: 'ai',
    coverImage: image2,
    //year: '',
    sourceCode: 'https://github.com/Hariharanxdev/ONDC-EASY-SHOP.git'
  },
  {
    id: '3',
    title: 'Medical plant identification using CNN',
    slug: 'Medical-plant-identification',
    description: 'AI-powered web application for identifying medicinal plants using CNN/MobileNetV2 and OpenCV, with image upload and live camera prediction.',
    longDescription: 'An AI-powered web application that identifies medicinal plants using a trained Convolutional Neural Network (CNN) model based on MobileNetV2 architecture and OpenCV for image processing. Users can upload images or use their device camera for real-time plant identification. The application provides information about the identified plant, including its medicinal properties and uses.',
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Python', 'CNN/MobileNetV2', 'TensorFlow/Keras', 'OpenCV'],
    features: [
      'Medicinal Plant Identification using CNN/MobileNetV2',
      ' Live Camera & Image Upload for plant prediction',
      ' Prediction Confidence Score',
      ' Scientific Name & Medicinal Uses',
      'Downloadable PDF Prediction Report',
      'AI-Powered Confidence-Based Prediction', 
      'Responsive React-Based Interface',
    ],
    category: 'ai',
    coverImage: image3,
    //year: '',
    sourceCode: 'https://github.com/Hariharanxdev/Medicine-Plant-Identification-Using-CNN-and-OPEN-CV.git'
  },
  {
    id: '4',
    title: 'Subscription Management And Billing System',
    slug: 'Billing-Platform',
    description: 'A subscription platform for secure, automated billing, payments, and invoices.',
    longDescription: 'A subscription management platform for secure and automated billing, payments, and invoice management. It provides customer and admin dashboards with subscription tracking and notifications. The platform also supports customer profile management and scalable backend services for automated billing workflows.',
    techStack: ['ReactJS','Python','Fast API','PostgreSQL','Redis','REST API'],
    features: [
      'Secure customer authentication',
      'Subscription management and tracking',
      'Automated billing and payment management',
      'Invoice generation and management',
      'Customer and admin dashboards',
      'Customer profile management',
      'Notification and email integration',
      'RESTful API integration with FastAPI'
    ],
    category: 'Fullstack web application',
    coverImage: image4,
    //year: '',
    sourceCode: 'https://github.com/Hariharanxdev/Subscription-Management-And-Billing-platform.git'
  },
  {
    id: '5',
    title: 'Netflix Clone',
    slug: 'netflix-clone',
    description: 'A web application that replicates Netflix UI to stream and browse movies.',
    longDescription: 'A Netflix-inspired web application that allows users to browse and stream movies with a modern UI. It features dynamic content loading, responsive design, and smooth navigation. The project focuses on frontend performance and user experience similar to real streaming platforms.',
    techStack: ['ReactJS','JavaScript', 'HTML', 'CSS'],
    features: [
      'Movie browsing with categories',
      'Responsive UI similar to Netflix',
      'Video streaming interface',
      'Search functionality for movies',
      'Dynamic data fetching using APIs'
    ],
    category: 'web',
    coverImage: image5,
    //year: '',
    sourceCode: 'https://github.com/Hariharanxdev/NETFLIX-Clone.git'
  },
  {
    id: '6',
    title: 'Course Registration System',
    slug: 'course-registration-system',
    description: 'A system for managing course registrations and enrollments',
    longDescription: 'A web application that allows students to browse available courses and register based on their preferences. It provides features for managing course details, enrollment, and schedules. The system ensures efficient handling of student registrations and reduces manual workload.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Secure login and student registration',
      'Course selection and enrollment system',
      'Designed admin panel for managing academic data',
      'Enabled real-time course availability tracking',
      'Integrated database for efficient data handling'
    ],
    category: 'web',
    coverImage: image6,
    //year: '',
    sourceCode: 'https://github.com/Hariharanxdev/Course-Registration-System.git'
  }
];

export const otherSkills: string[] = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'TypeScript',
  'Spring Boot',
  'Git & GitHub',
  'REST APIs',
  'Postman',
  'VS Code'
];

export const domains = [
  
  
  {
    name: 'Full Stack Development',
    description: 'Building end-to-end scalable web applications',
    icon: 'fullstack'
  },
  {
    name: 'Web Development',
    description: 'Crafting Modern Web Experiences,Designing & Developing High-Performance Websites',
    icon: 'web'
  },
  {
    name: 'Artificial Intelligence',
    description: 'Machine Learning, Deep Learning, NLP, Computer Vision',
    icon: 'ai'
  },
  {
    name: 'Blockchain',
    description: 'Smart Contracts, Web3, Decentralized Applications',
    icon: 'blockchain'
  },
];

//export const skills: Skill[] = [
  // Technical Skills
  
 // { name: 'Python', category: 'technical', level: 85, color: 'skill-python' },
  //{ name: 'Java', category: 'technical', level: 70, color: 'skill-java' },
  //{ name: 'Html/Css/Js', category: 'technical', level: 80, color: 'skill-web' },
  //{ name: 'ReactJs', category: 'technical', level: 80, color: 'skill-web' },
  //{ name: 'Artificial Intelligence', category: 'technical', level: 75, color: 'skill-web' },
  //{ name: 'Machine Learning', category: 'technical', level: 70, color: 'skill-ml' },
export const skills = [
  // Technical Skills
  {
    name: 'Python',
    category: 'technical',
    description: 'Scripting, Building Applications, Automation',
    icon: 'python'
  },
  {
    name: 'Django',
    category: 'technical',
    description: 'Web Development Framework',
    icon: 'django'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'technical',
    description: 'Modern JavaScript Development',
    icon: 'javascript'
  },
  {
    name: 'React.js',
    category: 'technical',
    description: 'Building UI with React & its ecosystem',
    icon: 'react'
  },
  {
    name: 'Node.js',
    category: 'technical',
    description: 'Server-side JavaScript Development',
    icon: 'node'
  },
  {
    name: 'SQL / MongoDB',
    category: 'technical',
    description: 'Relational & NoSQL Databases',
    icon: 'database'
  },
  {
    name: 'Java',
    category: 'technical',
    description: 'Core Java, OOPs, Backend Development',
    icon: 'java'
  },
  

  // Soft Skills
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
  { name: 'Teamwork', category: 'soft' },
  { name: 'Communication', category: 'soft' },

  // Languages
  { name: 'English', category: 'language' },
  { name: 'Tamil', category: 'language' },
  { name: 'Hindi', category: 'language' },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
