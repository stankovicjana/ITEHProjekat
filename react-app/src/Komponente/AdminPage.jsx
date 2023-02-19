import React from 'react'
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function AdminPage({proizvodi,deleteProizvode,setIzmeniID}) {
    let navigate = useNavigate();
    function editProizvod(id){
        setIzmeniID(id);

         navigate("/admin/izmeni/");
    }
    return (
  
      <div>
        <h1>Dobrodosli na admin stranicu</h1>
        <div className='korpa'>

              <table>
                  <thead>

                  <tr><th>ID</th><th>NAZIV</th><th>PROIZVODJAC</th><th>CENA</th><th>OBRISI</th><th>IZMENI</th></tr>
                  </thead>
                  <tbody>
                  {proizvodi.map((p)=>(<tr key={p.id}><td>{p.id}</td><td>{p.naziv}</td><td>{p.proizvodjac}</td><td>{p.cena}</td><td><button className="btn" onClick={() => deleteProizvode(p.id)}><BsFillTrashFill></BsFillTrashFill></button></td><td><button className="btn" onClick={() => editProizvod(p.id)}><BsPencilFill></BsPencilFill></button></td></tr>))}
                  </tbody>
              </table>
      </div>
  
  </div>


  )
}

export default AdminPage;