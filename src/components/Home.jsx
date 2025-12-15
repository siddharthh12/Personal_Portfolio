import React, { useEffect, useState } from 'react';
import HeroImage from '../assets/Hero-image.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "FULL STACK DEVELOPER";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div name="home" className='relative w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden py-8 sm:py-12'>
      
     {/* Huge Background Text - Behind Everything - More Visible */}
<div className='absolute top-24 sm:top-16 md:top-20 lg:top-24 left-1/2 transform -translate-x-1/2 z-0 w-full px-2 sm:px-4'>
  <h1 className='text-[6vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 tracking-wider opacity-50 select-none whitespace-nowrap overflow-hidden'>
    {displayedText}<span className='animate-pulse'>|</span>
  </h1>
</div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-40 lg:pt-48 pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start'>
          
          {/* LEFT SIDE - About Me Content */}
          <div className='lg:col-span-1 text-center lg:text-right space-y-4 sm:space-y-6 opacity-0 animate-slideInLeft'>
            <div className='space-y-3 sm:space-y-4'>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
                Hi, I'm Siddharth 👋
              </h3>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                A passionate developer dedicated to creating seamless digital experiences
              </p>
            </div>

            <div className='space-y-2 sm:space-y-3'>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex items-center justify-center lg:justify-end gap-2'>
                <span>💡</span> Problem solver at heart
              </p>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex items-center justify-center lg:justify-end gap-2'>
                <span>🎯</span> Detail-oriented coder
              </p>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex items-center justify-center lg:justify-end gap-2'>
                <span>🚀</span> Always learning & evolving
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className='flex flex-wrap gap-2 justify-center lg:justify-end pt-2 sm:pt-4'>
              {['React', 'Next.js', 'Node.js'].map((tech, index) => (
                <span 
                  key={tech}
                  className='px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-300 hover:border-cyan-500/60'
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CENTER - Profile Image */}
          <div className='lg:col-span-1 flex justify-center opacity-0 animate-scaleIn animation-delay-300 mt-8 lg:mt-0'>
            <div className='relative group'>
              {/* Animated glow effects */}
              <div className='absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700 animate-pulse-slow'></div>
              <div className='absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 blur-2xl animate-spin-slow'></div>
              
              {/* Profile Image Container */}
              <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-cyan-500/40 shadow-2xl shadow-cyan-500/30 transform group-hover:scale-105 group-hover:border-cyan-400/60 transition-all duration-500'>
                <img 
                  src={HeroImage} 
                  alt="my profile" 
                  className='w-full h-full object-cover'
                />
                {/* Overlay gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </div>
              
              {/* Floating particles around image */}
              <div className='absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-float shadow-lg shadow-cyan-400/50'></div>
              <div className='absolute -bottom-4 sm:-bottom-8 -left-2 sm:-left-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-float animation-delay-700 shadow-lg shadow-blue-400/50'></div>
              <div className='absolute top-1/4 -left-4 sm:-left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-float animation-delay-1000 shadow-lg shadow-purple-400/50'></div>
              <div className='absolute top-3/4 -right-3 sm:-right-6 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300 rounded-full animate-float animation-delay-500 shadow-lg shadow-cyan-300/50'></div>
            </div>
          </div>

          {/* RIGHT SIDE - What I Do Content */}
          <div className='lg:col-span-1 text-center lg:text-left space-y-4 sm:space-y-6 opacity-0 animate-slideInRight animation-delay-500 mt-8 lg:mt-0'>
            <div className='space-y-3 sm:space-y-4'>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
                What I Do
              </h3>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                Building responsive and scalable web applications using modern technologies
              </p>
            </div>

            <div className='space-y-2 sm:space-y-3'>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex items-center justify-center lg:justify-start gap-2'>
                <span>🎨</span> Frontend Development with React
              </p>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex items-center justify-center lg:justify-start gap-2'>
                <span>⚙️</span> Backend APIs with Node.js & Express
              </p>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex items-center justify-center lg:justify-start gap-2'>
                <span>📱</span> Responsive UI/UX Design
              </p>
            </div>

            {/* CTA Button and Experience Badge - Side by Side */}
            <div className='pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4'>
              <Link 
                to='portfolio' 
                smooth 
                duration={500} 
                className='group inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full cursor-pointer hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
              >
                View Portfolio
                <span className='ml-2 group-hover:translate-x-2 transition-transform duration-300'>
                  <MdOutlineKeyboardArrowRight size={18} className='sm:w-5 sm:h-5' />
                </span>
              </Link>

              {/* Experience Badge */}
              <div className='inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full'>
                <p className='text-cyan-400 font-semibold text-sm sm:text-base whitespace-nowrap'>6+ Months Exp</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
  {/* Mouse */}
  

  {/* Space */}
  <div className="h-3" />

  {/* Arrow */}
  <svg
    className="w-5 h-5 text-cyan-400 animate-arrow"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>



    </div>
  );
}

export default Home;