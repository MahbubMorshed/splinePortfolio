import { IoCodeWorking, IoLogoGithub } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

import img1 from "./images/portfolio.jpg";
import img2 from "./images/notesApp2.jpg";
import img3 from "./images/Zotac.jpg";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance Frontend developer",
    location: "Bangladesh",
    description: "Frontend with javaScript library React",
  },
  {
    id: 2,
    date: "2019 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance Backend developer",
    location: "Bangladesh",
    description: "Backend with Python frameworks Django",
  },
  {
    id: 3,
    date: "2017 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance Game Asset creator",
    location: "Bangladesh",
    description: "Lowpoly 3D game assets Design for Unity",
  },
  {
    id: 4,
    date: "2015 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance 3D Artist",
    location: "Bangladesh",
    description:
      "Highpoly and lowpoly 3d model for Animation and game environment in Blender and Autodesk Maya.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Portfolio",
    imageSrc: img1,
    techs: "Django, ckeditor, html, css",
    github: "https://github.com/MahbubMorshed/Portfolio",
  },
  {
    id: 2,
    name: "Notes App",
    imageSrc: img2,
    techs: "Django, ReactJs",
    github: "https://github.com/MahbubMorshed/NotesAppBackEnd",
  },
  {
    id: 3,
    name: "Zotac",
    imageSrc: img3,
    techs: "ReactJs, Nodejs, Firebase",
    github: "https://github.com/MahbubMorshed/warehouse-management-client",
  },
];
export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "Github",
    link: "https://github.com/MahbubMorshed",
  },
  {
    id: 2,
    iconSrc: (
      <AiFillLinkedin className="text-blue-700 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mahbub-morshed/",
  },
  {
    id: 3,
    iconSrc: <FaArtstation className="text-blue-500 text-3xl cursor-pointer" />,
    name: "Artstation",
    link: "https://www.artstation.com/mahbub",
  },
  {
    id: 4,
    iconSrc: (
      <AiFillFacebook className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "Facebook",
    link: "https://www.facebook.com/mahbub.morshed.1004/",
  },
  {
    id: 5,
    iconSrc: (
      <AiOutlineGlobal className="text-orange-600 text-3xl cursor-pointer" />
    ),
    name: "Portfolio",
    link: "https://mahbub-portfolio.herokuapp.com/",
  },
];
