import React from 'react'
import './projectstyle.css'
import Img1 from "/unsplash-images/img1.jpg"
import Img2 from "/unsplash-images/img2.jpg"
import Img3 from "/unsplash-images/img3.jpg"
import Img4 from "/unsplash-images/img4.jpg"

export const Project = () => {
  return (
    <div>
       <div className="project-container">
       <h1 className='p-h1'> Project </h1>
      <div className='project-container'>
       <h2 className='project-title'>Cooking chills </h2>
       <h3>Job Description: <span>Design and Development</span></h3>
       <p className="about-project">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odio explicabo necessitatibus, ut, beatae a recusandae eius dolore fugiat, voluptates at aliquid mollitia corrupti eveniet magnam sed. Provident magnam similique velit eius molestiae rerum natus tempora. Quisquam dolor laborum harum recusandae ipsam? Dolorum, id libero mollitia quis voluptas dolor magni!
       </p>
        <div className='project-images'>
          <div className='side-img1'></div>
          <div className='side-img2'> 
            <div className="img1 img"> </div>
            <div className="img2 img"> </div>
            <div className="img3 img"> </div>
            <div className="img4 img"> </div>
          </div>
        </div>

      </div>
       </div>
    </div>
  )
}




