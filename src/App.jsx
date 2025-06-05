import React, { useRef, useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiPostman,
} from "react-icons/si";

import IMG from "./assets/images/image.jpg";
import RESUME from "./assets/images/newResume.pdf";


export default function Home() {
  const [navVisible, setNavVisible] = useState(false);
  const homepageRef = useRef(null);
  const workexperienceRef = useRef(null);
  const educationpageRef = useRef(null);
  const skillspageRef = useRef(null);
  const contactpageRef = useRef(null);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setNavVisible(false);
    }
  };

  useEffect(() => {
    // Scroll to homepage on load
    if (homepageRef.current) {
      homepageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between bg-gradient-to-br from-gray-900 to-gray-800 fixed top-0 w-full backdrop-blur-md z-[1000] h-18 px-6 py-4 border-b border-white/10 shadow-lg">
        {/* Logo with Purple Text Shadow */}
        <div className="flex items-center">
          <h4
            className="text-white font-bold text-2xl 
      [text-shadow:0px_0px_14px_rgb(231,5,235)] tracking-wide"
          >
            Portfolio
          </h4>
        </div>

        {/* Navigation List */}
        <ul
          className={`${
            navVisible ? "block" : "hidden md:flex"
          } list-none flex-col md:flex-row absolute md:static right-0 left-0 md:left-auto md:right-[6%] top-[72px] bg-gray-800 p-3 md:bg-transparent md:p-0 rounded-b-[20px] md:rounded-none md:flex z-50 shadow-lg md:shadow-none border-x border-b md:border-0 border-white/10 md:gap-2`}
        >
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(homepageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block 
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(workexperienceRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Work Experience</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(educationpageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Education</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(skillspageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(contactpageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavVisible(!navVisible)}
          className="md:hidden mr-2 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <FaBars className="text-2xl cursor-pointer text-white font-bold" />
        </button>
      </nav>

      {/* Homepage Section */}
      <section
        ref={homepageRef}
        className="min-h-screen flex md:flex-row flex-col-reverse items-center justify-between px-4 pt-20 md:pt-0 "
      >
        <div className="content md:ml-20 ml-0 mt-8 md:mt-20 text-center md:text-left md:w-1/2">
          <p className="text-xl md:text-2xl text-white font-light">
            Hello, I am{" "}
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">
              RASAGNA UPPULA
            </span>
          </p>
          <p
            id="typingeffect"
            className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mt-4"
          >
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0 mt-4 leading-relaxed backdrop-blur-sm backdrop-filter p-4 rounded-lg bg-white/5 border-purple-500/30 hover:border-purple-500/70">
            Aspiring to contribute my skills and expertise in a dynamic company,
            leveraging my technical knowledge to drive innovation and success
            while continuously learning and adapting to emerging technologies.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-8">
            {/* Hire Me Button */}
            <button
              className="px-6 py-3 rounded-xl text-lg font-semibold text-white 
        bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() =>
                (window.location.href = "mailto:uppularasagna@gmail.com")
              }
            >
              Hire Me
            </button>
            <a href={RESUME} download className="group">
              <button
                className="px-4 py-3 rounded-xl text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/30 
          transition-all duration-300 transform hover:-translate-y-1 w-full flex items-center justify-center gap-2"
              >
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <div
            id="redbox"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full flex justify-center items-center mx-auto mt-10 relative"
          >
            {/* Decorative ring around profile image */}
            <div className="absolute animate-spin-slow w-72 h-72 md:w-88 md:h-88 rounded-full border-2 border-dashed border-blue-400 opacity-30"></div>

            {/* Profile image */}
            <img
              src={IMG || "/placeholder.svg"}
              alt="Profile image"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-none relative z-10 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section ref={workexperienceRef} className="min-h-screen py-8">
        <div className="text-4xl flex justify-center bg-gradient-to-r from-blue-500 via-[rgb(231,5,235)] to-white bg-clip-text text-transparent pt-16 pb-8">
          <h1 className="font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            WORK EXPERIENCE
          </h1>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  L1 Frontend Developer
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-3">
                  <h3 className="text-gray-200 font-medium">
                    •Designed and implemented responsive, user-friendly websites
                    using GoHighLevel (GHL), WordPress, HTML, CSS, JavaScript,
                    and React.js, ensuring 100% mobile compatibility.
                    &nbsp;&nbsp; •Built custom landing pages, funnels, and
                    websites using GoHighLevel, adapting each to client
                    specifications with visually appealing, user-focused
                    interfaces.
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className=" text-white">
                    Company: Authority Entrepreneurs Hyderabad, Telangana
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">From:</span>
                  <span className="ml-2 text-white font-semibold">
                    July 2024 -October 2024
                  </span>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  Junior Full Stack Developer
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-2">
                  <h3 className="text-gray-200 font-medium">
                    •Developing and maintaining web applications using React.js,
                    Node.js, Express.js, MongoDB, and PostgreSQL. &nbsp;
                    •Collaborating with teams to enhance system performance and
                    security through role-based access control. &nbsp;&nbsp;
                    •Implementing responsive design principles to ensure optimal
                    user experience across devices. &nbsp;&nbsp; •Participating
                    in code reviews and providing constructive feedback to team
                    members.
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-white">
                    Company: Busitron Software Solutions Pvt. Ltd, Hyderabad,
                    Telangana
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">From:</span>
                  <span className="ml-2 text-white font-semibold">
                    Jan 2025 - Present
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationpageRef} className="min-h-screen py-8">
        <div className="text-4xl flex justify-center bg-gradient-to-r from-blue-500 via-[rgb(231,5,235)] to-white bg-clip-text text-transparent pt-16 pb-8">
          <h1 className="font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            EDUCATION
          </h1>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  Bachelor's Degree (2019-23)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-3">
                  <h3 className="text-gray-200 font-medium">
                    Kamala Institute of Technology and science, Singapur
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className=" text-white">
                    B.Tech in Electronics and communication Engineering
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">CGPA:</span>
                  <span className="ml-2 text-white font-semibold">7.9</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  Intermediate (2017-19)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-2">
                  <h3 className="text-gray-200 font-medium">
                    Sai Shivani Junior College, Hanamkonda
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-white">MPC</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">Marks:</span>
                  <span className="ml-2 text-white font-semibold">919</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  SSC (2016)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-2">
                  <h3 className="text-gray-200 font-medium">
                    Krishnaveni Talent School, Huzurabad
                  </h3>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">CGPA:</span>
                  <span className="ml-2 text-white font-semibold">9.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillspageRef} className="min-h-screen py-20">
        <div className="text-4xl flex justify-center bg-gradient-to-r from-blue-500 via-[rgb(231,5,235)] to-white bg-clip-text text-transparent pb-3">
          <h1 className="font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            SKILLS
          </h1>
        </div>

        <div className=" mx-auto px-6">
          <div className="mb-3">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Front-end
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaHtml5 className="text-orange-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">HTML5</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaCss3Alt className="text-blue-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">CSS3</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaJs className="text-yellow-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">JavaScript</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaReact className="text-blue-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">React.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMui className="text-blue-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Material UI</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Back-end</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiExpress className="text-gray-300 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Express.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaNodeJs className="text-green-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Node.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaPython className="text-yellow-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Python</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMongodb className="text-green-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">MongoDB</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostgresql className="text-blue-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">PostgreSQL</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-3 text-white">
              Other Tools{" "}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 ">
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiGit className="text-orange-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Git / GitHub</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostman className="text-red-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Postman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactpageRef} className="min-h-screen">
        <div className="min-h-screen flex justify-center items-center p-2">
          <div className="mt-10 h-auto py-6 w-full md:w-[65vw] border-2 border-white rounded-2xl bg-gradient-to-tl from-[hsl(0,100%,60%)] via-[hsl(320,95%,60%)] to-[hsl(180,100%,60%)] shadow-lg flex flex-col md:flex-row justify-around items-center gap-4">
            <div className="w-[90%] md:w-[35vw] h-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600 rounded-2xl shadow-2xl p-4 relative overflow-hidden">
              <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4 relative">
                Personal Details
              </h2>

              <div className="text-white space-y-2 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Name:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    Rasagna Uppula
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    DOB:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    28/03/2001
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Mobile:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    +91 9398047954
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Email:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    uppularasagna@gmail.com
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Address:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    Singapur, Huzurabad, Karimnagr,Telangana
                  </span>
                </div>
              </div>
            </div>

            <div className="icons text-4xl flex flex-row md:flex-col gap-6 md:gap-8 items-center my-4">
              <a
                href="https://www.linkedin.com/in/rasagna-uppula-401554251/"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin className="cursor-pointer text-blue-600 text-3xl md:text-4xl hover:text-blue-400" />
              </a>

              <a
                href="https://github.com/rasagnauppula01"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaGithub className="text-black text-3xl  md:text-4xl hover:text-gray-800" />
              </a>
              <a
                href="https://wa.me/9398047954"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaWhatsapp className="cursor-pointer text-green-500 text-3xl md:text-4xl hover:text-green-400" />
              </a>
              <a
                href="mailto:uppularasagna@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaEnvelope className="cursor-pointer text-white text-3xl md:text-4xl hover:text-gray-300" />
                {/* <FontAwesomeIcon
                  icon={faEnvelope}
                  className=""
                /> */}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/80 py-4">
        <div className="text-center">
          <p className="text-white text-sm md:text-base">
            © 2025 Rasagna Uppula. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}


