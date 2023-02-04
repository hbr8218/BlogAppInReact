import React from 'react'
import '../../css/home.css'
// import * as ai from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <section className='hom'>

        <div className="container-fluid h-wrapper ">
          <div className="row">

            <div className="col-md-6 h-left">
              <h4> Hello  i m,
                <span>
              
              <h1>MOHAMMAD Akthar </h1>
              </span>
              </h4>

                <h2>Web Developer</h2>
              < span><h5>I'm software engineer specializing in web development <br />and UX|UI desiginer exceptional digital experiences.</h5></span>
              <div className='buttons'>
                <button className='btn-button'>More</button>

              </div>
            </div>

            <div className="col-md-6"></div>
          </div>



        </div>
        
      </section>

    </>
  )
}

export default Home