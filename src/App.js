import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import me from "./images/me.jpg";
import resume from "./images/resume.pdf";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col relative bg-primary items-center justify-center pb-20">
        {/* nav section */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Mahbub Morshed</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
              <a
                href={resume}
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border 
              border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                download
              >
                Download
              </a>
            </div>
            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <motion.a
                  whileTap={{ scale: 0.5 }}
                  href={resume}
                  download
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border 
                  border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>
        {/* 3d Section */}
        <section className="relative" id="home">
          <Spline scene="https://prod.spline.design/oz6b0EceiuIRST13/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/JnX1vlxqeSfms3Vv/scene.splinecode" /> */}
          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex justify-center items-center bg-zinc-900 rounded-3xl">
              <p className="text-textBase">Press and drag to orbit</p>
            </div>
          </div>
        </section>
        {/* main section */}
        <main className="w-[80%] mt-5">
          {/* about section */}
          <section
            id="about"
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
          >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-gray-900 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={me}
                  alt=""
                />
              </div>
            </div>
            {/* conten box */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                Hi, I am Mahbub Morshed, a full stack developer and 3D artist.
                I???ve been working on frontend with react app development for
                over 1 year now and backend with django for over 2 year now.Had
                my own projects, coded mostly in Javascript and python. I
                learned a lot, both at Bootcamp and mostly following
                documentation while working on the applications. I'm a 3D artist
                over 6 years now. Blender, Autodesk Maya and Unity are the
                software that I used for my 3D model and environment design. Now
                trying to explore three.js, and I want make a 3D web app. Now I
                am looking to get a job at an innovative IT Farm, and glad to
                have the opportunity. Other than coding.
              </p>
            </div>
          </section>
          {/* timeline section */}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          {/* project section */}
          <section
            id="projects"
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
          >
            {Projects &&
              Projects.map((n) => (
                <div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-md text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>
                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt="me"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>
          {/* contact section */}
          <section
            id="contact"
            className="flex flex-col items-center justify-center w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    href={n.link}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 
                duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
