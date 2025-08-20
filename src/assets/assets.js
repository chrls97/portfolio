
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

<<<<<<< HEAD
=======


import isii_ops from './system_ss/isii-ops.png'
import isii from './system_ss/isi-website.png'
import cslauncher from './system_ss/cslauncher.png'
import misOperations from './system_ss/mis-operations.png'
import upc from './system_ss/upc-website.png'
import eeg from './system_ss/eeg-website.png'

>>>>>>> v2
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
      { name: 'HTML', icon: assets.html},
      { name: 'CSS', icon: assets.css},
      { name: 'JavaScript', icon: assets.js},
      { name: 'React', icon: assets.react},
      { name: 'Bootstrap', icon: assets.bootstrap},
      { name: 'Tailwind', icon: assets.tailwind}
    ]
  },{
    stack: 'backend',
    languages: [
      { name: 'PHP', icon: assets.php},
      { name: 'Laravel', icon: assets.laravel},
      { name: 'NodeJs', icon: assets.nodejs},
      { name: 'ExpressJs', icon: assets.expressjs},
      { name: 'mySql', icon: assets.mysql},
      { name: 'MongoDB', icon: assets.mongodb}
    ]
  },{
    stack: 'tools',
    languages: [
      { name: 'VS Code', icon: assets.vscode},
      { name: 'Git', icon: assets.git},
      { name: 'Github', icon: assets.github},
      { name: 'Postman', icon: assets.postman},
      { name: 'NPM', icon: assets.npm},
      { name: 'Photoshop', icon: assets.photoshop}
    ]
  }
];
<<<<<<< HEAD
=======

export const projects = [{
    title: 'iSolutions Operations System',
    description: 'Designed and developed a comprehensive ERP system to streamline business operations across multiple departments, including Sales, Purchasing, Accounting, Marketing, and Technical Services. The system features an intuitive dashboard, real-time reporting, and role-based access control, enhancing productivity, data accuracy, and decision-making.',
    image: isii_ops,
    toolsUsed: [{name:'HTML', icon:html},
      {name:'CSS', icon:css},
      {name:'JS', icon:js},
      {name:'Bootstrap', icon:bootstrap},
      {name:'PHP', icon:php},
      {name:'MYSQL', icon:mysql}],
    liveView: false,
    liveViewLink: '#',
    github: false,
    githubLink: '#',
    gallery:true
  },{
    title: 'iSolutions International Inc. Website',
    description: 'iSolutions International Inc. presents a dynamic and responsive website designed to showcase comprehensive company information, services, solutions, and products. The platform ensures seamless accessibility across all devices, delivering an optimal user experience for clients and stakeholders.',
    image: isii,
    toolsUsed: [{name:'HTML', icon:html},
      {name:'CSS', icon:css},
      {name:'JS', icon:js},
      {name:'Bootstrap', icon:bootstrap},
      {name:'PHP', icon:php},
      {name:'MYSQL', icon:mysql}],
    liveView: true,
    liveViewLink: 'http://www.isolutions.com.ph/',
    github: false,
    githubLink: '#',
    gallery:false
  },{
    title: 'United Portusers Confederation Website',
    description: 'Developed a fully responsive website for the United Portusers Confederation of the Philippines, Inc. to enhance digital presence and improve member engagement. The platform features a custom Content Management System for real-time updates on news, events, and member listings, while effectively showcasing the organization’s mission, structure, and membership application process.',
    image: upc,
    toolsUsed: [{name:'HTML', icon:html},
      {name:'CSS', icon:css},
      {name:'JS', icon:js},
      {name:'Bootstrap', icon:bootstrap},
      {name:'PHP', icon:php},
      {name:'MYSQL', icon:mysql}],
    liveView: true,
    liveViewLink: 'https://www.upc-philippines.org/',
    github: false,
    githubLink: '#',
    gallery:false
  },{
    title: 'MIS Operations System',
    description: 'Lorem ipsum does, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: misOperations,
    toolsUsed: [{name:'HTML', icon:html},
      {name:'CSS', icon:css},
      {name:'JS', icon:js},
      {name:'Bootstrap', icon:bootstrap},
      {name:'PHP', icon:php},
      {name:'MYSQL', icon:mysql}],
    liveView: true,
    liveViewLink: 'http://www.cargosoft.com.ph/mis-operations/',
    github: false,
    githubLink: '#',
    gallery:false
  },{
    title: 'Cargosoft Launcher System',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: cslauncher,
    toolsUsed: [{name:'HTML', icon:html},
      {name:'CSS', icon:css},
      {name:'JS', icon:js},
      {name:'Bootstrap', icon:bootstrap},
      {name:'PHP', icon:php},
      {name:'MYSQL', icon:mysql}],
    liveView: true,
    liveViewLink: 'http://www.cargosoft.com.ph/cargosoft-launcher/',
    github: false,
    githubLink: '#',
    gallery:false
  },{
    title: 'Eagle Express Lines Website',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: eeg,
    toolsUsed: [{name:'HTML', icon:html},
      {name:'CSS', icon:css},
      {name:'JS', icon:js},
      {name:'Bootstrap', icon:bootstrap},
      {name:'PHP', icon:php},
      {name:'MYSQL', icon:mysql}],
    liveView: true,
    liveViewLink: 'http://www.eaglegroup.com.ph/',
    github: false,
    githubLink: '#',
    gallery:false
  }]
>>>>>>> v2
