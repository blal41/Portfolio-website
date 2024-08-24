import React from "react";
import AboutImage from "../assets/img2.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am Babulal Seervi, currently in my final year of pursuing a
              Bachelor's Degree in Computer Science and Engineering at Jodhpur
              Institute of Engineering and Technology. With a solid foundation
              in software development, I am proficient in languages such as
              Java, Python, and JavaScript, and I have hands-on experience with
              technologies like ReactJs, HTML5,  CSS3 and nodejs.
            </p>
            <p className="text-lg mb-8">
              My expertise allows me to confidently tackle projects and deliver
              high-quality results. I am passionate about continuous learning
              and thrive in the dynamic world of software engineering. I
              constantly seek opportunities to expand my knowledge, embrace new
              technologies, and explore innovative approaches. Feel free to
              explore my work, and don't hesitate to reach out if you have any
              questions or opportunities for collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
