import React, { useContext } from 'react';
import Induction from '../Component/Induction';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Ressurection from '../Component/Ressurection';
import SpecialEvent from '../IlyaGallery/SpecialEvent';
import Oldies from '../IlyaGallery/Oldies';
import Newgen from '../IlyaGallery/Newgen';
import './Gallery.css'

const Gallery = () => {
  

  return (
    <>
    <Header/>
    <div>
      <div className="container">
        <div className="headdd">
        <h1 className='hhhhhhhh'>Welcome to <span className='highlight'>Ilya Odua</span> Gallery Page</h1>
        <p>A Glimpse of Our World in Pictures</p>
        </div>
        <Oldies/>
        <Newgen/>
        <SpecialEvent/>
      </div>
    </div>
    <Footer/>
    </> 
  );
};

export default Gallery;
