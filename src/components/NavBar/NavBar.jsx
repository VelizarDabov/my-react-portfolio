import React from "react";
import {SiGithub, SiLinkedin, SiFacebook} from 'react-icons/si'

const NavBar = ({scrollToContact, toggleContactForm   }) => {
  const clickEvents = () => {
    scrollToContact();
    setTimeout(() => {
      toggleContactForm();
    }, 100);
  }
    return (
      <div className="navbar bg-transparent p-5 ">
        <div className="navbar-start min-w-auto">
        <div className="stats shadow bg-transparent">
  
  <div className="stat pl-0 pr-0">
    <div className="stat-figure text-primary">
    
    </div>
    <div className="stat-title text-center text-2xl text-purple-500">Github</div>
        <div className='ml-4'>
    <a href='https://github.com/VelizarDabov' alt='link'>
<SiGithub className="text-5xl  text-white"/>
   </a>
    </div>
 
  
  </div>
  
  <div className="stat pl-0 pr-0">
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-title  text-center text-2xl text-purple-500">Linkedin</div>
  <div className='ml-4'>
  <a href='https://www.linkedin.com/in/velizar-dabov-28729b24b/' alt='link'>
  <SiLinkedin className="text-5xl text-white"/>
</a>
  </div>

</div>
  
  <div className="stat pl-0 pr-0">
  <div className="stat-title text-center text-2xl text-purple-500">Facebook</div>
 <div className='ml-4'>
 <a href='https://www.facebook.com/velizar.dabov' alt='link'>
   <SiFacebook className="text-5xl  text-white"/>
 </a>
 </div>
</div>
</div>
   </div>
        <div className="navbar-end ">
        <button className="btn btn-ghost text-white btn-circle text-2xl mr-20 " onClick={clickEvents}>
        Contact me
      </button>
   
      </div>
    </div>
    );
  };
  
  export default NavBar;
