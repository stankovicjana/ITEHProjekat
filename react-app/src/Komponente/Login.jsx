import React, { useState } from 'react'; 

import './LoginRegisterCSS.css';

function Login() {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value; //newUserData['email']=e.target.value;
        console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    function handleLogin(e){
    }
    return (
        <div className='login'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Uloguj se</h2>
                            <form onSubmit={handleLogin} >                          

                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="email" 
                                        placeholder="Email" 
                                        name="email"
                                        onInput={handleInput}
                                    />
                                </div>

                                <div className="input-group">
                                    <input className="input--style-3" type="password" placeholder="Password" name="password"  onInput={handleInput}/>
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Uloguj se</button>
                                </div>
                                <br/><br/>
                                <p><a href="/register"  className='tekstForme'>Registracija</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
    )
};

export default Login;