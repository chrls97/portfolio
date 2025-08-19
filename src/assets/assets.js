
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
