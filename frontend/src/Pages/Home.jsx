import React from 'react';
import Navbar from '../Components/Navbar';
import image from '/Users/__aswin__x/BikeHub/frontend/src/img/bmwbike.jpeg';
import intro from '../img/intro.mp4';
import footer from '../img/intro1.mp4'
import icon1 from '../img/icon1.jpeg'
import icon3 from '../img/icon3.webp'
import icon2 from '../img/icon2.jpeg'

function Home() {
  return (
    <div>
      <Navbar />


      <div className='home1'>
        <video width="100%" height="auto" loop autoPlay muted>
          <source src={intro} type="video/mp4" />
        </video>
      </div>


      <div className='home15'>
        <div className='home14' style={{textAlign:'center',margin:'0'}}>
          <h1>FIND YOUR BMW.</h1>
          <p>Shopping Tool</p>
        </div>
        <div className='home2'>
          <div className='home3'>
            <img src={icon1} />
            <p>Find a New Bike</p>
            <button>Search Now</button>
          </div>
          <div className='home3'>
            <img src={icon2} />
            <p>Book a Test Drive</p>
            <button>Request a Test Drive</button>
          </div>
          <div className='home3'>
            <img src={icon3} />
            <p>Build Your Own</p>
            <button>Configure & Price</button>
          </div>
        </div>
      </div>



      <div className='home4'>
        <div className='home5'>

        </div>
        <div className='home5'>

        </div>
      </div>


      <div className='home6'>
        <div className='home7'>
          <div className='home10 '>

          </div>
          <div className='home10 home11'>

          </div>
        </div>
        <div className='home7'>
          <div className='home10 '>

          </div>
          <div className='home10 home11'>

          </div>

        </div>
        <div className='home7'>
          <div className='home10'>

          </div>
          <div className='home10 home11'>

          </div>
        </div>
      </div>



      <div className='home8'>
        <video width="100%" height="auto" loop autoPlay muted>
          <source src={footer} type="video/mp4" />
        </video>
      </div>


      <div className='home9'>

      </div>


    </div>
  );
}

export default Home;
