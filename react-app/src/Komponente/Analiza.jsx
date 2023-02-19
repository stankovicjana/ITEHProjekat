import React from 'react'
import { useNavigate } from 'react-router-dom';
import Grafik from './Grafik';

function Analiza({proizvodi}) {
    let navigate = useNavigate();

  return (
    <div>
    <h1>Statistike</h1>
    <div className='korpa'>

    <Grafik proizvodi={proizvodi}></Grafik>

    </div>
    </div>



  )
}

export default Analiza;