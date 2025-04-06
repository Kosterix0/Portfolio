import React from "react";

import project2 from "../assets/images/proj6.png";

export const About = () => {
  return (
    <section id="about" className="text-white  p-8">
      <h2 className="text-6xl  font-bold mb-8">
        About <span className="text-emerald-300">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-6">
            I'm a passionate full-stack developer with a strong foundation in
            computer science and a love for creating innovative web solutions.
            My journey in tech started with a curiosity about how things work,
            which led me to pursue a career in web development.
            <span className="text-white mb-6">👨🏻‍💻👨🏻‍💻👨🏻‍💻</span>
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Education</h3>
          <p className="text-white/50">
            I am a Computer Science student at Adam Mickiewicz University in
            Poznań, currently pursuing a full-time engineering degree.
          </p>
          <div className="border border-white/20 rounded-lg p-3 text-center mt-4">
            <h4 className="text-emerald-300 font-medium mb-2">
              Key Selected Courses:
            </h4>
            <ul className="text-white/50 space-y-1 text-sm">
              <li>Introduction to Testing (conducted by Capgemini)</li>
              <li>Software Engineering</li>
              <li>Operating Systems</li>
              <li>Mobile Systems Laboratory</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I'm proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development
            and programming.
          </p>
          <div className="grid grid-cols-1 text-center gap-4">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2">Main Skills</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>HTML</li>
                <li>CSS/Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Flutter</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2">
                Other Skills
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>C/C++</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2">
                Tools & Environment
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Git</li>
                <li>Jira</li>
                <li>Figma</li>
                <li>Windows & Linux (basic Bash)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">React</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-emerald-300 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Flutter</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-emerald-300 h-2 rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Python</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-emerald-300 h-2 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">04. Goals</h3>
            <p className="text-white/50">
              I aim to expand my skill set to become a full-stack developer. I
              am constantly learning and improving through academic projects,
              self-initiated work, and hands-on experience with the latest tools
              and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
