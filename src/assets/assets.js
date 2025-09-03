
import profile from './charles.jpg'
import html from './stack_icons/html.png';
import css from './stack_icons/css.png'
import js from './stack_icons/js.png'
import react from './stack_icons/react.png'
import bootstrap from './stack_icons/bootstrap.png'
import tailwind from './stack_icons/tailwind.png'
import php from './stack_icons/php.png'
import mysql from './stack_icons/mysql.png'
import laravel from './stack_icons/laravel.png'
import nodejs from './stack_icons/nodejs.png'
import expressjs from './stack_icons/expressjs.png'
import mongodb from './stack_icons/mongodb.png'
import vscode from './stack_icons/vscode.png'
import git from './stack_icons/git.png'
import github from './stack_icons/github.png'
import postman from './stack_icons/postman.png'
import npm from './stack_icons/npm.png'
import photoshop from './stack_icons/photoshop.png'



import misOperations from './system_ss/mis-ops/mis-operations.png'
import misOperations1 from './system_ss/mis-ops/mis-ops1.png'


import isii_ops from './system_ss/isii-ops.png'
import isii from './system_ss/isi-website.png'
import cslauncher from './system_ss/cslauncher.png'

import upc from './system_ss/upc-website.png'
import eeg from './system_ss/eeg-website.png'


import netflix from './system_ss/netflix-clone.png'
import youtube from './system_ss/yt-clone.png'
import portfolio from './system_ss/portfolio.png'
import login from './system_ss/mern-auth.png'
import ecHome from './system_ss/e-commerce/client.png'
import ecDmin from './system_ss/e-commerce/admin.png'

export const assets = {
  profile,
  html,
  css,
  js,
  react,
  bootstrap,
  tailwind,
  php,
  mysql,
  laravel,
  nodejs,
  expressjs,
  mongodb,
  vscode,
  git,
  github,
  postman,
  npm,
  photoshop,
}

export const techStacks = [
  {
    stack: 'frontend',
    languages: [
      { name: 'HTML', icon: assets.html },
      { name: 'CSS', icon: assets.css },
      { name: 'JavaScript', icon: assets.js },
      { name: 'React', icon: assets.react },
      { name: 'Bootstrap', icon: assets.bootstrap },
      { name: 'Tailwind', icon: assets.tailwind }
    ]
  }, {
    stack: 'backend',
    languages: [
      { name: 'PHP', icon: assets.php },
      { name: 'Laravel', icon: assets.laravel },
      { name: 'NodeJs', icon: assets.nodejs },
      { name: 'ExpressJs', icon: assets.expressjs },
      { name: 'mySql', icon: assets.mysql },
      { name: 'MongoDB', icon: assets.mongodb }
    ]
  }, {
    stack: 'tools',
    languages: [
      { name: 'VS Code', icon: assets.vscode },
      { name: 'Git', icon: assets.git },
      { name: 'Github', icon: assets.github },
      { name: 'Postman', icon: assets.postman },
      { name: 'NPM', icon: assets.npm },
      { name: 'Photoshop', icon: assets.photoshop }
    ]
  }
];

export const projects = [{
  id: 11,
  title: 'E-Commerce Website',
  description: 'Built a full-featured eCommerce website with a secure shopping experience, enabling users to browse and order products. Developed an integrated admin dashboard for managing inventory and orders, including product creation, updates, and deletions.',
  details: [
    { image: ecHome, description: "E-Commerce Website" },
    { image: ecDmin, description: "E-Commerce Admin" }
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Tailwind', icon: tailwind },
    { name: 'React', icon: react },
    { name: 'NodeJS', icon: nodejs },
    { name: 'ExpressJS', icon: expressjs },
    { name: 'MongoDB', icon: mongodb }],
  liveView: true,
  liveViewLink: 'https://ecommerce-app-client-hazel.vercel.app/',
  github: true,
  githubLink: 'https://github.com/chrls97/ecommerce-app',
  gallery: false
  },{
  id: 10,
  title: 'Login Authentication',
  description: 'Developed and implemented a secure user authentication system using the MERN stack, featuring login, registration, and password reset workflows. Integrated JWT authentication with cookie-based session management, and built an email verification flow with OTP for enhanced security in a React application',
  details: [
    { image: login, description: "Login Authentication" }
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Tailwind', icon: tailwind },
    { name: 'React', icon: react },
    { name: 'NodeJS', icon: nodejs },
    { name: 'ExpressJS', icon: expressjs },
    { name: 'MongoDB', icon: mongodb }],
  liveView: true,
  liveViewLink: 'https://mern-auth-zeta-plum.vercel.app/login',
  github: true,
  githubLink: 'https://github.com/chrls97/login-auth',
  gallery: false
  },{
  id: 9,
  title: 'Portfolio Website',
  description: 'Developed a personal portfolio website to showcase professional achievements and highlight projects over the years, featuring a modern, responsive design and interactive project galleries to demonstrate technical expertise.',
  details: [
    { image: portfolio, description: "Portfolio Website" }
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Tailwind', icon: tailwind },
    { name: 'React', icon: react }],
  liveView: true,
  liveViewLink: 'https://portfolio-phi-three-56.vercel.app/',
  github: true,
  githubLink: 'https://github.com/chrls97/portfolio',
  gallery: false
},{
  id: 8,
  title: 'Netflix Clone',
  description: 'Built a Netflix Clone that displays rich movie/TV details by integrating The Movie Database (TMDB) API and implemented Firebase Authentication for email/password enabling secure user sessions.',
  details: [
    { image: netflix, description: "Netflix Clone" }
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'React', icon: react }],
  liveView: true,
  liveViewLink: 'https://netflix-clone-one-eta-66.vercel.app/',
  github: true,
  githubLink: 'https://github.com/chrls97/netflix-clone',
  gallery: false
},{
  id: 7,
  title: 'Youtube Clone',
  description: 'Built a responsive YouTube clone web application using ReactJS, integrating the YouTube Data API to display videos and stream details with a modern, user-friendly interface.',
  details: [
    { image: youtube, description: "Youtube Clone" }
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'React', icon: react }],
  liveView: true,
  liveViewLink: 'https://youtube-clone-beta-seven.vercel.app/',
  github: true,
  githubLink: 'https://github.com/chrls97/youtube-clone',
  gallery: false
},{
  id: 6,
  title: 'iSolutions Operations System',
  description: 'Designed and developed a comprehensive ERP system to streamline business operations across multiple departments, including Sales, Purchasing, Accounting, Marketing, and Technical Services. The system features an intuitive dashboard, real-time reporting, and role-based access control, enhancing productivity, data accuracy, and decision-making.',
  details: [
    { image: isii_ops, description: "ISII Ops" },
    { image: isii, description: "ISII Website" },
    { image: upc, description: "UPC" },
    { image: misOperations, description: "MIS OPS" },
    { image: upc, description: "UPC" },
    { image: upc, description: "UPC" },
    { image: upc, description: "UPC" }
    
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'MYSQL', icon: mysql }],
  liveView: false,
  liveViewLink: '#',
  github: false,
  githubLink: '#',
  gallery: true
}, {
  id: 5,
  title: 'iSolutions International Inc. Website',
  description: 'iSolutions International Inc. presents a dynamic and responsive website designed to showcase comprehensive company information, services, solutions, and products. The platform ensures seamless accessibility across all devices, delivering an optimal user experience for clients and stakeholders.',
  details: [{ image: isii, description: "ISII Website" }],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'MYSQL', icon: mysql }],
  liveView: true,
  liveViewLink: 'http://www.isolutions.com.ph/',
  github: false,
  githubLink: '#',
  gallery: false
}, {
  id: 4,
  title: 'United Portusers Confederation Website',
  description: 'Developed a fully responsive website for the United Portusers Confederation of the Philippines, Inc. to enhance digital presence and improve member engagement. The platform features a custom Content Management System for real-time updates on news, events, and member listings, while effectively showcasing the organization’s mission, structure, and membership application process.',
  details: [{ image: upc, description: "UPC" }],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'MYSQL', icon: mysql }],
  liveView: true,
  liveViewLink: 'https://www.upc-philippines.org/',
  github: false,
  githubLink: '#',
  gallery: false
}, {
  id: 3,
  title: 'MIS Operations System',
  description: 'Develop initiative aims to digitally transform all MIS department operations by implementing a centralized system to automate reporting, billing, documentation, IT asset inventory, and IT and Office supply monitoring',
  details: [
    { image: misOperations, description: "Login" },
    { image: misOperations1, description: "Menu Board" },
    
  ],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'MYSQL', icon: mysql }],
  liveView: true,
  liveViewLink: 'http://www.cargosoft.com.ph/mis-operations/',
  github: false,
  githubLink: '#',
  gallery: false
}, {
  id: 2,
  title: 'Cargosoft Launcher System',
  description: 'Cargosoft Launcher system is a centralized logistics platform that integrates client information, cargo invoicing, official receipting, payment tracking, accounting, and automated report generation into a single, streamlined system',
  details: [{ image: cslauncher, description: "EEG CIS" }],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'MYSQL', icon: mysql }],
  liveView: true,
  liveViewLink: 'http://www.cargosoft.com.ph/cargosoft-launcher/',
  github: false,
  githubLink: '#',
  gallery: false
}, {
  id: 1,
  title: 'Eagle Express Lines Website',
  description: 'Eagle Express Lines Website presents a dynamic and responsive website designed to showcase comprehensive company information, services, solutions in logistic industry. The platform ensures seamless accessibility across all devices, delivering an optimal user experience for clients and stakeholders',
  details: [{ image: eeg, description: "Website" }],
  toolsUsed: [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JS', icon: js },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'MYSQL', icon: mysql }],
  liveView: true,
  liveViewLink: 'http://www.eaglegroup.com.ph/',
  github: false,
  githubLink: '#',
  gallery: false
}]
