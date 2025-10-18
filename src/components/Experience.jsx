import React from 'react'

const Experience = () => {
  const experiences = [
    {
      jobTitle: "Full Stack Developer Intern",
      company: "Artick Technologies",
      duration: "July 2025 – Present",
      description:
        "Building full-stack features with Next.js/React on the frontend and Node.js/Express on the backend. Implementing REST APIs, integrating MongoDB, and deploying to Vercel. Collaborating on UI/UX improvements, responsive layouts with Tailwind CSS, and performance optimizations."
    },
    {
      jobTitle: "Software Development Intern",
      company: "AInsurtech Pvt. Ltd.",
      duration: "1st May 2024 - 28th June 2024",
      description:
        "Gained practical experience in front-end technologies (HTML, CSS, JavaScript), back-end development (Python, .NET), and database management (SQL, PL/SQL). Developed and maintained web applications using React, Node.js, and Express. Collaborated with designers and product managers to implement new features."
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 text-white py-40">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
        </div>
        <div className="space-y-8 mt-10">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-bold">{experience.jobTitle}</h3>
              <p className="text-xl italic">{experience.company}</p>
              <p className="text-lg">{experience.duration}</p>
              <p className="text-md mt-4">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience
