import React, { useState } from 'react'
import './payment.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
  const [{ basket,user},dispatch]=useStateValue();

  //powerfull hucks
  const stripe =useStripe();
  const elements =useElements();

  const [succeeded,setSuceeded]=useState(false);
  const [processing,setProcessing]=useState("");
  const [error,setError]=useState();
  const [disabled,setDisabled]=useState();
  const handleSubmit = e =>{
    //do all the stripe stuff..
  }
  const handleChange = event=>{
    //if event is empty
    setDisabled(event.empty);
    //if any error show error else nothing
    setError(event.error ? event.error.message:"");
  }

  return (
    <div className='payment'>
        <div className='payment__container'>
          <h1>
            checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
            {/* payment section - delevery address */}
            <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles,CA</p>
            </div>
            </div>
            {/* payment section - Review Items */}
            <div className='payment__section'>
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items'>
          {basket.map(item =>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}

            </div>
            </div>
            {/* payment section - Payment method */}
            <div className='payment__section'>
              <div className='payment__title'>
                <h3>Payment Method</h3>
              </div>
              <div className='payment__details'>
                {/* stripe magic will go*/}
                <from onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment__priceContainer'>
                    <CurrencyFormat
                    renderText={(value)=>(
                      <h3>Order Total: {value}</h3>
                    )}
                    decimalScale={7}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded }>
                      <span>{processing ? <p>processing</p> :
                      "Buy Now"}</span>
                    </button>

                  </div>
                </from>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Payment;
