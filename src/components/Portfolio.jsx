import React from 'react';
import reactElectronic from '../assets/es_ss.jpeg';
import reactPortfolio from '../assets/portfolio1.jpeg.png';
import CodeCrafter from '../assets/CodeCrafter.jpeg';
import aitripplanner from '../assets/aitripplanner.jpeg';
import HireHub from '../assets/HireHub.jpeg';
import HireSensie from '../assets/HireSensie.png';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: aitripplanner,
      live: 'https://ai-trip-planner-bice.vercel.app/',
      code: 'https://github.com/siddharthh12/ai-trip-planner',
      title: 'AI Trip Planner'
    },
    {
      id: 2,
      src: HireSensie,
      live: 'https://hiresensei.vercel.app/',
      code: 'https://github.com/siddharthh12/hiresensei',
      title: 'HireSensie'
    },
    {
      id: 3,
      src: HireHub,
      live: 'https://hirehub-gold.vercel.app/',
      code: 'https://github.com/siddharthh12/HireHub',
      title: 'HireHub'
    },
    {
      id: 4,
      src: CodeCrafter,
      live: '',
      code: 'https://github.com/siddharthh12/CodeCrafter/tree/master',
      title: 'CodeCrafter'
    },
    {
      id: 5,
      src: reactElectronic,
      live: '',
      code: 'https://github.com/siddharthh12/Electronic_Store_Website_MERN/',
      title: 'Electronic Store'
    },
    {
      id: 6,
      src: reactPortfolio,
      live: 'https://siddharth-portfolios.netlify.app/',
      code: 'https://github.com/siddharthh12/Personal_Portfolio',
      title: 'Personal Portfolio'
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
          {portfolio.map(({ id, src, live, code, title }, index) => (
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
                {/* View Project Buttons with Enhanced Hover */}
                <div className='flex gap-4 mt-4 w-full sm:w-auto'>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-6 py-2 text-center font-semibold text-white border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
                  >
                    Code
                  </a>
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-6 py-2 text-center font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                    >
                      Live
                    </a>
                  )}
                </div>

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