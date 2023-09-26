import React from "react";
import "./Home.css";
import Product from "./product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./images/omg.jpg" alt="omg" />

        <div className="home__row">
          <Product
            id="123451"
            title="Mordern socity"
            price={290.99}
            image="./images/golu.jpg"
            rating={5}
          />

          <Product
            id="123452"
            title="keep your day in diary"
            price={9.99}
            image="./images/DIARY.jfif"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="123453"
            title="Mordern socity"
            price={290.99}
            image="./images/danger.jpg"
            rating={5}
          />

          <Product
            id="123454"
            title="keep your day in diary"
            price={9.99}
            image="./images/DIARY.jfif"
            rating={3}
          />

          <Product
            id="123455"
            title="Mordern socity"
            price={290.99}
            image="./images/golu.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456"
            title="Mordern socity"
            price={290.9999}
            image="./images/senery.png"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
