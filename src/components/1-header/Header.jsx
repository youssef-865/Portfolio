import React, { useEffect, useState } from 'react'
import './header.css'

export default function Header() {
   const [showmodel,setShowmodel] = useState(false)
   const [theme, settheme] = useState(localStorage.getItem("currentmode") ?? "dark");

   useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  
   
  return (
   <header className=' flex'>
    <button onClick={() => { setShowmodel(true) }} className='menu icon-menu'></button>
    <div/>
    <nav>
   <ul className='flex'>
   
      <li><a href="#hero">About Me</a></li>

      {/* <li><Link >Articles</Link></li> */}
      <li><a href="#main">Projects</a></li>    
        {/* <li><Link >Speaking</Link></li> */}
       <li><a href="#contact"> Contact Me

</a></li>   </ul>
    </nav>
    <button onClick={()=>{
      localStorage.setItem("currentmode", theme === "dark"? "light" : "dark")

      settheme(localStorage.getItem("currentmode"))
    }} className='mode'>
      <span className='icon-moon '></span>
    </button>

    {showmodel&&(
         <div className='fixed'>
         <ul className='model'>
         <li onClick={() => { setShowmodel(false) }}>
          
          <button className='icon-cancel' onClick={() => { setShowmodel(false) }}/>
         </li>
          <li><a href="#hero">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="#main">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="#contact">Contact</a></li>
         </ul>
      
         </div>
    )}

    </header>
   
  )
}
