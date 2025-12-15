import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nodejs from '../assets/node.png'
import nextjs from '../assets/nextjs1.png'



const Skills = () => {

    const tech=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:nodejs,
            title:'Node',
            style:'shadow-green-500'
        },
         {
            id:6,
            src:nextjs,
            title:'Nextjs',
            style:'shadow-sky-500'
        }


    ]


  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black  py-40'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-6 mt-10'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                tech.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default Skills
