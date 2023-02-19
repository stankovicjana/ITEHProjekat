import React, { useState } from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"


function Korpa({proizvodi,onAdd,onRemove }) {

  return (
    <div> 
        <div className='korpa'>

            <table>
                <thead>
                <tr><th>ID</th><th>NAZIV</th><th>CENA</th><th>KOLICINA</th><th>DODAJ</th><th>IZBACI</th></tr>
                </thead>
                <tbody>
                {proizvodi.map((p)=>(<tr><td>{p.id}</td><td>{p.naziv}</td><td>{p.cena}</td><td>{p.kolicina}</td><td>
                    <button className="btn" onClick={() => onAdd(p.id)}><BsPlusLg/></button></td><td><button className="btn" onClick={() => onRemove(p.id)}><BsDashLg/></button></td></tr>))}
                </tbody>
            </table>




        </div>
    </div>
  )
}

export default Korpa;