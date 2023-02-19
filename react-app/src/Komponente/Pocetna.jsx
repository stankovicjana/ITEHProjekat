import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const slideImages = [
  'https://veritasit.rs/wp-content/uploads/2019/01/prodaja-racunarske-opreme.jpg',
  'https://www.benchmark.rs/assets/img/news/big_thumb/b9cdc2c04edb8423e8bab23be8c3563d.jpg',
  'https://slika.nezavisne.rs/2023/01/750x450/20230130072209_756334.jpg'
];

const Pocetna = () => {





    return (
    
  
      <div> 
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Pocetna;