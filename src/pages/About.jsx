import React from 'react'
import '../css/about.css'
import black from '../img/black.jpg'


const About = () => {
  return (


    
<>
<section className='top'>
<div className="container">
  <div className="row">
    <div className="col-md-6 h-left">

      <h3>About Me</h3>
      <h1 >i'm MOHAMMAD Akhtar</h1>
      <p className='pgraph'> I'm web developer live's in bokaro steel city, india a passionate developer <br />bringing you programing and design from the future.I am experienced in<br /> developing web and desktop applications including full front end design.
       <br />This includes brand identity, graphics snd illustration.</p>


      <button className='abutton'>Contact</button>

    </div>
    <div className="col-md-6 h-right">
    
           {/* <div className="a-card"> */}
            
          <img src={black} alt="" className='a-img' />

          {/* </div> */}

    </div>

  </div>
</div>
</section>
</>


  )
}

export default About;