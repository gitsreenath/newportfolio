import React from 'react'
import './Experiance.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Experiance = () => {
  return (
 <section id='Experiance'>
     <h5>What skills i have</h5>
     <h2>My Skills</h2>
     <div className="container experinace_container ">
     
         <div className="experiance_det">
         <h3>SKILLS</h3>
             <div className="experiance_contents">
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"  />
                     <div>
                     <h4>HTML</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>CSS</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>JAVASCRIPT</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>SASS</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>REACT JS</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
               

             </div>
         </div>
         <div className="experiance_det">
         <h3>SKILLS</h3>
             <div className="experiance_contents">
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>SQL</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>BOOTSTRAP</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>FIGMA</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>PHOTOSHOP</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
                 <article className="experiance_details">
                     <BsPatchCheckFill className="icon"/>
                     <div>
                     <h4>MSOFFICE</h4>
                     <small className='text-light'>Experianced</small>
                     </div>                  
                 </article>
               

             </div>
         </div>
     </div>
 </section>
  )
}

export default Experiance