import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe("pk_test_51NEM3dSGjPggJc5SMjW8dgAJUMY8lXlhZ3CxREuPLw3UZnKvTVwqpS6ueQ6tRUyzUQ3AyjovAHuqjvHlloobJA6e00JWXQPDBI");

function App() {
  const [{},dispatch] = useStateValue();
  
  useEffect(()=>{
    //only runs once
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>',authUser);
      if(authUser){
        //user is logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user is logout
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })
  },[])
  return (
    //BEN
    <Router>
      <div className="App">
        
        <Routes>
          
        <Route
            path="/login"
            element={
              <>
                <Login/>
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
              <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
              <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
