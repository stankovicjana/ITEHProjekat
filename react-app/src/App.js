
import './App.css';
import NavBar from './Komponente/Navbar';
import Footer from './Komponente/Footer';
import Pocetna from './Komponente/Pocetna';
import Login from './Komponente/Login';
import Register from './Komponente/Register';
import Proizvod from './Komponente/Proizvod';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Korpa from './Komponente/Korpa';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
  const[token,setToken] = useState();
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 


  const [proizvodi,setP] = useState([ ]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/proizvod",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
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
  }, [ axiosInstance]);
  function addToken(auth_token){
    setToken(auth_token);
  }
  
  function refreshCart() {
    let u_korpi = proizvodi.filter((p) => p.kolicina > 0);
    setCartProducts(u_korpi);
    var suma=0;
    cartProducts.forEach((p)=>{
      suma+=p.cena*p.kolicina;
    })
    console.log(suma);
    setSumPrice(suma);
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
        // setSumPrice(sum+p.cena);
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
          }
        }
      });
      refreshCart();
    }
  }
  return (

    <div  >
      <BrowserRouter className="App">
      <NavBar token={token}></NavBar>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  addToken={addToken} ></Login>}></Route>    
            <Route path="/register" element={ <Register></Register>}></Route>
            <Route path="/proizvodi" element={ <Proizvod proizvodi={proizvodi} onAdd={addProduct} onRemove={removeProduct} ></Proizvod>}></Route>
            <Route path="/korpa" element={ <Korpa proizvodi={cartProducts} onAdd={addProduct} onRemove={removeProduct} sum={sum} ></Korpa>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}
export default App;
