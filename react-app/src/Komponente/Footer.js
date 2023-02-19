import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Button } from './Button';

//useState hook
function Footer() {
    const [buttonClick, setButtonClick] = useState('');
    const [buttonClick2, setButtonClick2] = useState('');
  
    const onClick = () => {
      if(buttonClick != '') {
        setButtonClick('');
        setTimeout(() => {
          alert('Hvala na prijavi na naš newsletter!');
        }, 10);
      }
    }
  
    const onClick2 = () => {
      if(buttonClick2 != '') {
        setButtonClick2('');
        setTimeout(() => {
          alert('Hvala Vam! Potrudićemo se da usvojimo predloge i pohvale!');
        }, 10);
      }
    }
  
    const onChange = (e) => {
      setButtonClick(e.target.value);
    }
    const onChange2 = (e) => {
      setButtonClick2(e.target.value);
    }


  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Prijavite se da biste dobijali vaučere sa popustom na opremu:
        </p>
        <p className='footer-subscription-text'>
          Možete se odjaviti kad god budete želeli.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
              value={buttonClick}
              onChange={onChange}
            />
              <Button buttonStyle='btn--outline' onClick={onClick}>Prijavi se</Button>
          </form>
        </div>
      </section>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Ostavite nam sugestiju/komentar!
        </p>
        <div className='input-areas'>
          <form>
            <textarea
              className='footer-input'
              name='comment'
              type='comment'
              placeholder='Komentar'
              value={buttonClick2}
              onChange={onChange2}
            />
            <br></br>
              <Button buttonStyle='btn--outline' onClick={onClick2}>Pošalji komentar</Button>
          </form>
        </div>
      </section>
      <div class='website-rights'>PRODAVNICA TEHNIKE © 2023</div>
    </div>
      
  );
}

export default Footer;