import React from 'react';

const About = () => {
  return (
    <div name="about" className='bg-gradient-to-b from-gray-800 to-black text-white py-40'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>About</p>
        </div>
        
        <p className='text-xl md:text-2xl mt-10 text-gray-300'>
          I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold'>Siddharth Tiwari</span>, a passionate Full Stack Developer currently pursuing M.Sc. in Computer Science at S K Somaiya College. With hands-on experience in building scalable web applications using React.js, Next.js, and Node.js, I specialize in creating efficient, user-centric solutions that drive real business impact.
        </p>
        
        <br/>
        
        <p className='text-xl md:text-2xl text-gray-300'>
          Currently working as a Full Stack Developer Intern at <span className='text-cyan-400 font-semibold'>Aartick Technologies</span>, I've developed 5+ full-stack applications, optimized performance by 40% through code splitting and lazy loading, and built RESTful APIs handling 100+ concurrent requests. My projects like <span className='text-cyan-400'>AI Trip Planner</span>, <span className='text-cyan-400'>HireHub</span>, and <span className='text-cyan-400'>CodeCrafter</span> showcase my ability to integrate cutting-edge technologies like Firebase, MongoDB, and Google OAuth while maintaining clean, maintainable code.
        </p>
        
        <br/>
        
        <p className='text-xl md:text-2xl text-gray-300'>
          I thrive on solving complex problems with innovative solutions, whether it's implementing real-time features that boost user engagement by 25% or architecting scalable systems with role-based access control. With expertise in modern frontend frameworks, backend development, cloud deployment, and CI/CD pipelines, I'm always eager to learn new technologies and contribute to dynamic team environments where collaboration leads to meaningful, impactful results.
        </p>
      </div>
    </div>
  );
}

export default About;