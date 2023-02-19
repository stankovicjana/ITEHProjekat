import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Pocetna.css'



const slideImages = [
  'https://thumbs.dreamstime.com/b/saint-petersburg-russia-circa-may-goods-display-sony-store-galeria-shopping-center-electronics-store-134641471.jpg',
  'https://honeywell.scene7.com/is/image/honeywell/hon-ab-retail-checkout-2022',
  'https://im.indiatimes.in/media/content/2013/Jun/ms_1371205962_540x540.jpg'
];

const Pocetna = () => {





    return (
    
      
  
      <div> 
        <div className='main-container'>
      <image url='https://econsultancy.imgix.net/content/uploads/2019/01/21111315/nike-speed-shop.jpg?auto=compress,format&q=60&w=826&h=546'/>
      <h1>DOBRODOŠLI U SVET TEHNIKE</h1>
      <p>Kupite tehniku, najbrze, najbolje, najpovoljnije!</p>
    </div>
    <div className='main-text'>
    <h1>KO SMO MI</h1>
    <h3>Vasa omiljena prodavnica. Gde je sve dostupno na jednom mestu.</h3>
      <p>
      Kupite najbolju tehniku. 
      </p>
      <p>
      Sacuvajte svoje vreme i novac.
      </p>
    </div>
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