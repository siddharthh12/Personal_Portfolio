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
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-40'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
  {portfolio.map(({ id, src, link, title }) => (
    <div 
      key={id} 
      className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between h-full pb-4'
    >
      <img src={src} alt={`${title} screenshot`} className='rounded-t-md duration-200 hover:scale-105' />
      <div className='flex flex-col items-center justify-between flex-1'>
        <p className="text-lg font-semibold mt-4">{title}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-1/2 px-6 py-3 mt-4 text-center font-semibold bg-black text-white rounded-md duration-200 hover:scale-105 hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
        >
          View Project
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Portfolio;
