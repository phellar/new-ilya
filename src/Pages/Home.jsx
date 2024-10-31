import React from 'react' 
import { useEffect } from 'react'
import Header from '../Component/Header'
import Contact from '../Component/Contact'
import FAQ from '../Component/FAQ'
import Footer from '../Component/Footer'
import Event from '../Component/Event'
import Affiliate from '../Component/Affiliate'
import Support from '../Component/Support'
import { FaHandshake } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import { TbStairsUp } from "react-icons/tb";
import './Home.css'
import { Link } from 'react-router-dom'
import LiveLink from '../Component/LiveLink'
// import Baba from '../assets/baba.jpg'

const Home = () => {


  return (

    <>
    <Header/>
      <section className='hero-section' >
          <div className="over">
            <div className="container">
                <div className="wrapper">
                          <div className="">
                            <h3 className='int'>Welcome to</h3>
                            <h3 className='int-2'>SUPREMOST KEGITES CLUB INTERNATIONAL</h3>
                          </div>
                        <h2 class="eksu">EKITI STATE UNIVERSITY</h2>
                        <h2 class="head-1">ILYA ODUA</h2>
                        <p>The Fountain of Karability</p>
                          <div className="center-cta">
                            <Link to='/history-ilya-Odua' className='CTA'>Learn More</Link>
                            {/* <Link to='/hemisphere' className='out-btn'>Hemisphere</Link> */}
                          </div>
                      </div>
                      
                </div>
            </div>
      </section>

      <section class="history scroll">
              <div className="container">
                  <div className="two-box">
                    <div className="info-new">
                      <h1>History of The <span class="highlight">Kegites Club</span></h1>
                      <p>The Kegites Club, erstwhile known as The Palmwine Drinkerds Club is the most popular socio-cultural club in Africa. The club originated from the University of Ife (now known as Obafemi Awolowo University), it was formally formed in 1962 by a group of students of the then College of Arts and Science Ibadan
                         later upgraded to become University of Ife. It was formed at the institution’s old temporary
                          site which is the current campus of The Polytechnic Ìbàdàn.</p>
                            <div class="cta">
                            <Link to='/' className='CTA'>Read More</Link>
                            </div>
                    </div>
                    {/* <img src={} alt="" /> */}
                    <div className="img-new"></div>
                  </div>
              </div>

              
            </section>


            {/* <!-- WHY JOIN KEGITES --> */}
             <section className="join scroll">
              <div className="container">
                  <div className="heading">
                    <h1 className='sec-head'>Why Join <span class="highlight">Kegites Club</span> ?</h1>
                    <p>Benefits as a member (kuta or comrad)</p>
                  </div>
                  <div className="two-box">
                    <div className="card-wrapper">
                      <div className="icon">
                      <FaHandshake />
                      </div>
                      <h3>Networking opportunities</h3>
                      <small>Kegites Club provides a platform for members to connect with fellow professionals and 
                        like-minded individuals, potentially leading to valuable connections and collaborations.</small>
                      </div>
                      
                      <div class="card-wrapper">
                        <div class="icon">
                        <GiPartyPopper />
                        </div>
                      <h3>Social events</h3>
                      <small>Kegites Club organizes various social events, such as parties, gatherings, and outings, 
                        providing a chance for members to relax, have fun, and bond with fellow members.</small>
                    </div>

                    <div class="card-wrapper">
                      <div class="icon">
                      <TbStairsUp />
                      </div>
                      <h3>Personal development</h3>
                      <small>The club offers opportunities for members to develop new skills, attend seminars, and 
                        participate in workshops, contributing to their personal growth and self-improvement.</small>
                    </div>

                  </div>
              </div>
             </section>


            {/* <!-- ILYA ODUA HISTORY --> */}
            <section class="history scroll" id="ilya-history">
              <div class="container">
                  <div class="two-box">
                    <div class="img-2"></div>
                    <div class="info-new">
                      <h1> Brief History of <span class="highlight">Ilya Odua</span></h1>
                      <p>There is no river without a source, every river flows from a fountain, just as every tree was once a seed. 
                        Ilya Odua was the mustard seed planted many decades ago, but today has become an oak</p>
                            <div class="cta">
                              <Link to='/history-ilya-Odua' className='CTA'>Read More</Link>
                            </div>
                    </div>
                  </div>
              </div>
            </section>


            {/* <!-- OUR GALLERY--> */}
            {/* <section class="gallery scroll">
              <div class="container">
                <div class="heading">
                  <h1>Our Gallery</h1>
                  <p>Here are few pictures from our gyration activities</p>
                </div>
                <div class="card-group">
                    <div class="card-1"></div>
                    <div class="card-2"></div>
                    <div class="card-3"></div>
                </div>
                  <div class="ce">
                    <Link to='/gallery' className='CTA'>View More</Link>
                  </div>
              </div>
            </section> */}

            <Event/>
            <LiveLink/>
            <Affiliate/>
            <FAQ/>
            <Contact/>
            <Support/>
            <Footer/>






    </>
  )
}

export default Home