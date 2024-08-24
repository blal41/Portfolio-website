import React from 'react';
import HeroImage from '../assets/img2.jpg';
import ResumePDF from '../assets/resume.pdf'; // Make sure the resume is located in the specified path

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 px-8 md:px-16 lg:px-24'>
      <div className='container mx-auto'>
        <img
          src={HeroImage}
          alt="Profile"
          className='mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl md:text-5xl font-bold'>
          I'm {" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Babulal Seervi
          </span>
          , Full-Stack Web Developer
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-300'>
        Welcome to my portfolio website! I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, 
        </p>
        <div className='mt-8'>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
