import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start'>
          <img src='/path/to/your/image.jpg' alt="Profile" className='rounded-lg w-48 h-48 object-cover md:mr-8 mb-8 md:mb-0' />
          <div>
            <p className='text-xl mt-20 md:mt-0'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In qui molestias voluptates? Corrupti ea incidunt dolorem nostrum velit doloremque itaque. Porro, rerum? Incidunt neque laborum fugiat enim? Autem dolorem aperiam veniam. Quis, voluptatibus ullam accusamus minus in atque! A ducimus harum asperiores debitis architecto magni nostrum dolorem odio quod ipsa.
            </p>
            <br />
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, magni, quis nulla blanditiis esse possimus optio numquam eligendi architecto, quibusdam illum aliquam. Ducimus sapiente nulla architecto provident eos, id in est eum laudantium doloremque cupiditate fuga itaque amet. Ad architecto magnam cum placeat quia voluptatum illum corrupti aperiam molestias eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
