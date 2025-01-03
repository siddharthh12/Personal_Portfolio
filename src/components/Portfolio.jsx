import React from 'react';
import reactElectronic from '../assets/es_ss.jpeg';
import reactTicTacToe from '../assets/tictactoe.jpeg';
import reactPortfolio from '../assets/portfolio.jpeg';
import CodeCrafter from '../assets/CodeCrafter.jpeg';


const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: reactElectronic,
      link: 'https://github.com/siddharthh12/Electronic_Store_MERN',  
    },
    {
      id: 2,
      src: CodeCrafter,
      link: 'https://github.com/siddharthh12/CodeCrafter/tree/master',
    },
    {
      id: 3,
      src: reactPortfolio,
      link: 'https://github.com/siddharthh12/Personal_Portfolio',  
    },

    {
      id: 4,
      src: reactTicTacToe,
      link: 'https://github.com/siddharthh12/Tic_Tac_Toe',
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
          {portfolio.map(({ id, src, link }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="Project screenshot" className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <a href={link} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-black-500 text-white rounded-md'>
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
