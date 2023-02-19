import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"

function ProizvodKartica({product,onAdd,onRemove}) {
  return (
    <div className="card">

    <div className="card-header" >
         <img className='card-img-top'  src ={product.image}   /> 
    </div>
    <div className="card-body">


        <h4 className = "naslovKartice">  {product.naziv}   </h4>
        <h6 className="opisProizvoda"> 

        <br /><br />  <b> Proizvodjac:</b>   {product.proizvodjac} 
        <br /><br />  <b>  Vrsta: </b> {product.vrsta.naziv}
        <br /><br /> <b>  Cena:</b> {product.cena} RSD 
        </h6>
        <br />
        <row>
         <button
                  className="btn"
                  onClick={() => { onAdd( product.id); alert("Proizvod je dodat u korpu!");}}
                >
                <BsPlusLg />
                <p>Dodaj proizvod</p>
              </button>
              <label>_____</label>
              <button 
                className="btn"
                onClick={() => {onRemove( product.id); alert("Proizvod je obrisan iz korpe!");}}
                >
                <BsDashLg />
                <p>Obrisi proizvod</p>
            </button>
            </row>
    </div> 
</div>
  )
}

export default ProizvodKartica