import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    title: "React",
    icon: <FaReact />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <FaJs />,
  },
  {
    id: 4,
    title: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 5,
    title: "Java",
    icon: <FaJava />,
  },
  {
    id: 6,
    title: "Python",
    icon: <FaPython />,
  },
  {
    id: 7,
    title: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    id: 8,
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 9,
    title: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 10,
    title: "MySQL",
    icon: <FaDatabase />,
  },
  {
    id: 11,
    title: "Express.js",
    icon: <SiExpress />,
  },
];

const My_Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex flex-col items-center"
            >
              <div className="flex justify-center items-center h-12 w-12 mx-auto text-4xl text-blue-400">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default My_Skills;
