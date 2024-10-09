import React from 'react';

const About = () => {
  return (
    <div name="about" className=' bg-gradient-to-b from-gray-800 to-black text-white py-40'> {/* Added py-16 */}
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-2xl mt-10'>
          I’m Siddharth Tiwari, a passionate Full Stack Developer with expertise in the MERN stack. I thrive on solving complex problems with innovative solutions, aiming to drive business growth through technology. With hands-on experience in front-end development (HTML, CSS, JavaScript) and back-end technologies (Node.js),
        </p>
        <br/>
        <p className='text-2xl'>
          I’ve worked on real-world projects, including an e-commerce platform and a personal portfolio site. I’m always eager to learn, grow, and contribute to dynamic team environments while delivering meaningful results.
        </p>
        <br/>
        <p className='text-2xl'>I believe in the power of collaboration and am always ready to adapt to new challenges. I’m excited to be part of projects where innovation and teamwork lead to impactful results.</p>
      </div>
    </div>
  );
}

export default About;
