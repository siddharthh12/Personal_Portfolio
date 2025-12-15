import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div name='contact' className='bg-gradient-to-b from-gray-800 to-black text-white py-20 md:py-40'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        
        {/* Header Section with Animation */}
        <div className='pb-8 opacity-0 animate-fadeIn'>
          <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500'>
            Contact
          </p>
          <p className='py-6 text-gray-400'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form 
            action="https://getform.io/f/bkkgygeb" 
            method='POST' 
            className='flex flex-col w-full md:w-1/2 opacity-0 animate-fadeIn animation-delay-300'
          >
            {/* Name Input with Enhanced Effects */}
            <div className='relative group mb-4'>
              <input 
                type="text" 
                name='name' 
                placeholder='Enter your name' 
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                className='w-full p-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder:text-gray-500 hover:border-gray-500'
                required
              />
              {/* Animated underline glow */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
              {/* Input icon */}
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Email Input with Enhanced Effects */}
            <div className='relative group mb-4'>
              <input 
                type="email" 
                name='email' 
                placeholder='Enter your email' 
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className='w-full p-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder:text-gray-500 hover:border-gray-500'
                required
              />
              {/* Animated underline glow */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
              {/* Input icon */}
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Message Textarea with Enhanced Effects */}
            <div className='relative group mb-4'>
              <textarea 
                name="message" 
                rows='10' 
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                className='w-full p-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder:text-gray-500 resize-none hover:border-gray-500'
                required
              ></textarea>
              {/* Animated underline glow */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
              {/* Input icon */}
              <div className='absolute right-3 top-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <button 
              type='submit'
              className='group relative text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 my-8 mx-auto flex items-center rounded-full hover:from-cyan-400 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 overflow-hidden'
            >
              {/* Button text with icon */}
              <span className='relative z-10 flex items-center gap-2 font-semibold'>
                Let's Talk
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Animated shine effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className='mt-16 text-center opacity-0 animate-fadeIn animation-delay-600'>
          <p className='text-gray-400 mb-4'>Or reach out directly:</p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
            {/* Email */}
            <a 
              href='mailto:siddharthtiwari1265@gmail.com'
              className='group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300'
            >
              <div className='p-2 rounded-full bg-gray-800 group-hover:bg-cyan-500/10 transition-colors duration-300'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className='text-sm sm:text-base'>siddharthtiwari1265@gmail.com</span>
            </a>

            {/* Phone */}
            <a 
              href='tel:9136309713'
              className='group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300'
            >
              <div className='p-2 rounded-full bg-gray-800 group-hover:bg-cyan-500/10 transition-colors duration-300'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className='text-sm sm:text-base'>+91 9136309713</span>
            </a>
          </div>

          {/* Decorative dots */}
          <div className='flex justify-center gap-2 mt-8'>
            <div className='w-2 h-2 bg-cyan-500 rounded-full animate-pulse'></div>
            <div className='w-2 h-2 bg-cyan-500 rounded-full animate-pulse animation-delay-200'></div>
            <div className='w-2 h-2 bg-cyan-500 rounded-full animate-pulse animation-delay-400'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;