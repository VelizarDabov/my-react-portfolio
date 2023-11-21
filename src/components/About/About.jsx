import React from 'react'
import profilePic from '../../assets/profilePic.jpg'
import myResume from '../../assets/Velizars-Resume.pdf';

function About() {
  const skillsData = [
    { name: 'JavaScript', percentage: 80 },
    { name: 'ReactJS', percentage: 70 },
    { name: 'NextJS', percentage: 65 },
    { name: 'HTML&CSS', percentage: 40 },
    { name: 'Tailwind', percentage: 50 },
  ];
  const hobbiesData = [
    { name: 'Snowboarding', percentage: 80 },
    { name: 'Coding', percentage: 100 },
    { name: 'Cycling', percentage: 65 },
    { name: 'Cooking', percentage: 60 },
    {name:'Traveling:', percentage:80}
  ];
  return (
<>
<div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center">
 

<div >
<div className='mockup-phone min-h-screen-50vh min-w-screen-50vh mt-5 ml-5'>
  <div className='text-center text-white'>
    <h1>My Skills</h1>
  </div>
<div className="progress-container">
{skillsData.map((skill, index) => (
          <div key={index} className="progress-container">
            <label className="progress-label mr-1.5 text-white">{skill.name}</label>
            <progress className="progress progress-secondary w-56 " value={skill.percentage} max="100"></progress>
          </div>
        ))}
  </div>
</div>
<div className='mockup-phone min-h-screen-50vh min-w-screen-50vh mt-5 ml-5'>
  <div className='text-center  text-white'>
    <h1>My Hobies</h1>
  </div>
<div className="progress-container">
<div className="progress-container">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="progress-container">
            <label className="progress-label mr-1.5 text-white">{hobby.name}</label>
            <progress className="progress progress-secondary w-56" value={hobby.percentage} max="100"></progress>
          </div>
        ))}
  </div>
</div>
</div>
</div>
<div className='flex space-x-4'>
  <div className="mockup-phone block items-right justify-right min-h-screen-80vh bgg-about bgg-cover bgg-center bgg-no-repeat">
  <div className="camera"></div> 
  <div className="display ">
    <div className="artboard  items-right justify-rightart board-demo phone-1  bg-about bg-cover bg-center bg-no-repeat artbord-ml-10">
    <div className="chat chat-end ">
  <div className="chat-image avatar online">
    <div className="w-10 rounded-full">
      <img src={profilePic} alt='img' className='w-24 rounded-full'/>
    </div>
  </div>
  <div className="chat-bubble bg-grey bg-opacity-50 chatrelative w-fit p-4 max-w-90 mt-20 text-white ">Hello,</div>
</div>
<div className="chat chat-end">
  <div className="chat-image  avatar online">
    <div className="w-10 rounded-full">
      <img src={profilePic} alt='img' />
    </div>
  </div>
  <div className="chat-bubble bg-grey bg-opacity-30 text-white ">I'm <div className='text-purple-400'>Velizar Dabov </div>Junior Front-End Developer</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar online">
    <div className="w-10 rounded-full">
      <img src={profilePic} alt='img'/>
    </div>
  </div>
  <div className="chat-bubble bg-grey bg-opacity-30 text-white">A motivated junior front-end developer with a passion for creating seamless and visually appealing web experiences.</div>
  
    </div>
    <div className='px-14 mt-14'>
      <a href={myResume} download='Velizars-Resume.pdf'>
      <button className='btn text-white ml-5 mt-10'>Download Resume</button>
      </a>
      
    </div>
   
  </div>
  </div>
  
</div>

</div>
</div>
</>
   
  )
}

export default About

    


