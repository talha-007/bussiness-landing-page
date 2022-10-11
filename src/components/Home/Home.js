import React from 'react'
import './Home.css'
import bg1 from '../images/Group 520.png'
import homebg from '../images/illus1.png'
import playbtn from '../images/Playbtn.png'
import ci1 from '../images/circle1.png'
import cl2 from '../images/circle2.png'
import ring from '../images/ring.png'
// import {GoPlay} from 'react-icons/go'
function Home() {
  return (
   <>
    <main className='home'>
      <div className='bg-illus'>
      <img className='illus1' src={ci1} alt="circel1" />
      <img className='illus2' src={cl2} alt="circel2" />
      <img className='illus3' src={ring} alt="ring" />
      </div>
    <div className='bg1'>
        <img  src={bg1} alt="" />
      </div>
      <div className='home-ho'>
        <div className='home-content'> 
            <div className='home-headings'>
              <h1>We help to <br/><span>Solve Clients</span><br /> Problems</h1>
              <p>Our Activate suite of business apps gives your <br /> Lorem ipsum dolor sit amet, consectetur.</p>
              <div className='home-btns'>
                <button className='portf'>Our Portfolio</button>
                <button className='play'> <img src={playbtn} alt="" /></button>
              </div>
            </div>
        </div>
        <div className='home-bg'>    
          <img src={homebg} alt="home-bg" />
        </div>
      </div>
      
    </main>
   </>
  )
}

export default Home