
import './App.css';
import NavBar from './Komponente/Navbar';
import Footer from './Komponente/Footer';
import Pocetna from './Komponente/Pocetna';
import Login from './Komponente/Login';
import Register from './Komponente/Register';
import Proizvod from './Komponente/Proizvod';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Korpa from './Komponente/Korpa';
import Kontakt from './Komponente/Kontakt';
import Inbox from './Komponente/Inbox';
import AdminPage from './Komponente/AdminPage';
import Izmeni from './Komponente/Izmeni';
import Analiza from './Komponente/Analiza';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  const[token,setToken] = useState();
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 
  const [proizvodi,setP] = useState([ ]);
  const [poruke,setPoruke] = useState([]);
  const [izmenaID, setIzmenaID] = useState(0); 


  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/proizvod",
          {
            headers: {
              token:
                "Bearer " +
                ( window.localStorage.getItem("auth_token")),
            },
          }
        );
        setP(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [axiosInstance]);
  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/poruke",
          {
            headers: {
              token:
                "Bearer " +
                ( window.localStorage.getItem("auth_token")),
            },
          }
        );
        setPoruke(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [axiosInstance]);
  function addToken(auth_token){
    setToken(auth_token);
  }

  function handleLogout(){ 
    window.localStorage.setItem('auth_token',null); 
    window.localStorage.setItem('auth_name',null); 
    console.log(window.localStorage.getItem("auth_token"));
    window.location.set('/');
  }
  
  function refreshCart() {
    let u_korpi = proizvodi.filter((p) => p.kolicina > 0);
    setCartProducts(u_korpi);
    var suma = 0;
    if (u_korpi.length === 1) {
      suma = u_korpi[0].cena * u_korpi[0].kolicina;
    } else {
      for (var x = 0; x < u_korpi.length; x++) {
        suma += u_korpi[x].cena * u_korpi[x].kolicina;
      }
      /*cartProducts.forEach((o) => {
        suma += o.cena * o.kolicina;
      });*/
      console.log(suma);
      setSumPrice(suma);
    }
  }
  function jeUKorpi(id){
    var postoji=0;
    cartProducts.forEach((p) => {
      if (p.id === id) {

        postoji=1;
      }
    });

    return postoji;
  }
  function addProduct( id) {

    setCartNum(cartNum + 1);

    proizvodi.forEach((p) => {
      if (p.id === id) {
        p.kolicina++;
        setSumPrice(sum+p.cena);
        console.log(sum);
      }
    });
    refreshCart();

  }

  function removeProduct( id) {

    if(jeUKorpi(id)===1){

      setCartNum(cartNum - 1);
      proizvodi.forEach((p) => {
        if (p.id === id) {
          if(p.kolicina === 0){
            return;
          }else{
            p.kolicina--; 
            setSumPrice(sum-p.cena);
          }
        }
      });
      refreshCart();
    }
  }
  function deleteProizvode(id){

    axios
    .delete("http://127.0.0.1:8000/api/proizvod/"+id,{headers:{'Authorization': `Bearer ${ window.localStorage.getItem('auth_token')}`} } )
    .then((res)=>{  
        console.log(res.data);
        const token = window.localStorage.getItem('auth_token');
        window.location. reload();
        window.localStorage.set('auth_token',token);

    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }

    });
}

function postaviIDZaIzmenu(id){
  setIzmenaID(id);
}
const routerGuard = () => {
  const token = window.localStorage.getItem("is_admin");
  if(token=="admin")
  return true;
  else return false;
   // if token exist, return true, else return false
}
  return (

    <div  >
      <BrowserRouter className="App">
      <NavBar token={token} odjava={handleLogout}></NavBar>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  addToken={addToken} ></Login>}></Route>    
            <Route path="/register" element={ <Register></Register>}></Route>
            <Route path="/proizvodi" element={ <Proizvod proizvodi={proizvodi} onAdd={addProduct} onRemove={removeProduct} ></Proizvod>}></Route>
            <Route path="/korpa" element={ <Korpa proizvodi={cartProducts} onAdd={addProduct} onRemove={removeProduct} sum={sum} ></Korpa>}></Route>
            <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>
            <Route path="/admin" element={routerGuard() ? <AdminPage proizvodi={proizvodi} deleteProizvode={deleteProizvode} setIzmeniID={postaviIDZaIzmenu} > </AdminPage>: <Navigate replace to="/login" />} />
            <Route path="/admin/izmeni" element={routerGuard() ? <Izmeni id={izmenaID} ></Izmeni> : <Navigate replace to="/login" />} />
            <Route path="/admin/inbox" element={routerGuard() ? <Inbox poruke={poruke} ></Inbox> : <Navigate replace to="/login" />} />
            <Route path="/admin/analiza" element={routerGuard() ? <Analiza proizvodi={proizvodi} ></Analiza> : <Navigate replace to="/login" />} />

 
          
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
