import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import taskManagement from "../assets/images/taskManagement/desktop.png";
import quizGame from "../assets/images/quizFlutter/mobile.png";
import boids from "../assets/images/boids/desktop.jpg";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Task Management",
    desc: "A responsive Task Management app. It allows users to add, mark, delete, and sort tasks, offering an intuitive and mobile-friendly interface.",
    devstack: "React, CSS/Tailwind, JavaScript",
    git: "https://github.com/Kosterix0/ToDo_React",
    src: taskManagement,
  },
  {
    title: "Geography Quiz Game",
    desc: "A geography quiz game that lets players answer 10 multiple-choice questions. The app shows the current score after each question and displays the final result with the highest score in the session.",
    devstack: "Flutter, Dart, Riverpod, Freezed",
    git: "https://github.com/Kosterix0/Quiz_Flutter",
    src: quizGame,
  },
  {
    title: "Flying Boids in a Generated Scene",
    desc: "Developed a real-time simulation of flocking boids in a procedurally generated 3D terrain using OpenGL and C. The project features height-based texturing, Blinn-Phong lighting, shadow mapping with PCF filtering, and normal mapping. All elements are integrated within a skybox for a fully immersive scene.",
    devstack: "C, OpenGL, GLSL, CMake",
    git: "https://github.com/Kosterix0/boids_algorithm_lorenc_miszczak_wieczor",
    src: boids,
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-full object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>

                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.git}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
