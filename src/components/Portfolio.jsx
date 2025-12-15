import React from 'react';
import reactElectronic from '../assets/es_ss.jpeg';
import reactTicTacToe from '../assets/tictactoe.jpeg';
import reactPortfolio from '../assets/portfolio1.jpeg.png';
import CodeCrafter from '../assets/CodeCrafter.jpeg';
import aitripplanner from '../assets/aitripplanner.jpeg';
import notepad from '../assets/notepad.jpeg';
import HireHub from '../assets/HireHub.jpeg';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: aitripplanner,
      link: 'https://ai-trip-planner-bice.vercel.app/',  
      title: 'AI Trip Planner'
    },
    {
      id: 2,
      src: HireHub,
      link: 'https://hirehub-gold.vercel.app/',  
      title: 'HireHub'
    },
    {
      id: 4,
      src: CodeCrafter,
      link: 'https://github.com/siddharthh12/CodeCrafter/tree/master',
      title: 'CodeCrafter'
    },
    {
      id: 3,
      src: reactElectronic,
      link: 'https://github.com/siddharthh12/Electronic_Store_MERN',  
      title: 'Electronic Store'
    },
    {
      id: 5,
      src: reactPortfolio,
      link: 'https://github.com/siddharthh12/Personal_Portfolio',  
      title: 'Personal Portfolio'
    },
    {
      id: 6,
      src: reactTicTacToe,
      link: 'https://github.com/siddharthh12/Tic_Tac_Toe',
      title: 'Tic Tac Toe'
    },
    {
      id: 7,
      src: notepad,
      link: 'https://github.com/siddharthh12/notepad',
      title: 'Notepad App'
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 md:py-40'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        
        {/* Header Section with Animation */}
        <div className='pb-8 opacity-0 animate-fadeIn'>
          <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500'>
            Portfolio
          </p>
          <p className='py-6 text-gray-400'>Check out some of my work right here</p>
        </div>

        {/* Portfolio Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
          {portfolio.map(({ id, src, link, title }, index) => (
            <div 
              key={id} 
              className='group relative shadow-lg shadow-cyan-500/20 rounded-lg overflow-hidden flex flex-col justify-between h-full bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 opacity-0 animate-fadeIn hover:shadow-cyan-500/40 hover:shadow-xl'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container with Overlay Effect */}
              <div className='relative overflow-hidden'>
                <img 
                  src={src} 
                  alt={`${title} screenshot`} 
                  className='w-full h-48 object-cover rounded-t-md duration-500 group-hover:scale-110 group-hover:brightness-75'
                />
                {/* Gradient Overlay on Hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                
                {/* Project Number Badge */}
                <div className='absolute top-3 right-3 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm'>
                  #{id}
                </div>
              </div>

              {/* Content Section */}
              <div className='flex flex-col items-center justify-between flex-1 p-4'>
                {/* Title with Gradient */}
                <h3 className="text-lg sm:text-xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                  {title}
                </h3>
                
                {/* View Project Button with Enhanced Hover */}
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative w-full sm:w-auto px-6 py-3 mt-4 text-center font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 group/button"
                >
                  {/* Button Text */}
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    View Project
                    <svg 
                      className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  
                  {/* Animated Background Shine Effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700'></div>
                </a>

                {/* Tech Stack Indicator (Optional - can add tech tags here) */}
                <div className='flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <span className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></span>
                  <span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></span>
                  <span className='w-2 h-2 bg-purple-400 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className='absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500'></div>
              <div className='absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500'></div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default Portfolio;