import React, { useState } from 'react'
import ProizvodKartica from './ProizvodKartica'

function Proizvod({proizvodi,onAdd,onRemove }) {
  const [sort, setSort] = useState(true);
  function sortAsc(){

    setSort(true);
  }
  function sortDesc(){

    setSort(false);
  }
  return (
    <div>
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
        <div className='sviProizvodi'>

            {sort===true?
              <>
                {proizvodi
                     .sort((a, b) => a.price < b.price ? -1 : 1)
                    .map((t)=>(<ProizvodKartica key={t.id} product={t} onAdd={onAdd} onRemove={onRemove} ></ProizvodKartica>))}
              </>
              :
              <>
                {proizvodi
                     .sort((a, b) => a.price > b.price ? -1 : 1)
                    .map((t)=>(<ProizvodKartica key={t.id} product={t}  onAdd={onAdd} onRemove={onRemove}></ProizvodKartica>))}
              </>
            }





        </div>
    </div>
  )
}

export default Proizvod;