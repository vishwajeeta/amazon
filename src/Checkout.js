import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import  CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="./images/ad.png" alt="" />

        <div>{/* optional chaining '?' in case if data is not loaded from database it would'n trow any error */}
          <h3>hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shoping Basket</h2>

          {basket.map(item =>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
