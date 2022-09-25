import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./Details.css";
import { Header } from "./Header";
function Users() {
  const [pizza, setPizza] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // 👇️ get ID from url
  const params = useParams();
  const fetchDetails = () => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${params.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setIsLoaded(true);

        console.log(pizza);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (isLoaded) {
    return (
      <Fragment>
      <Header/>
      <div className="pizza-details-wrap main-layout">
       
      
          <div className="main-info-pizza">
            <h1>Name:{pizza.product.product_name}</h1>
            <img
              src={pizza.product.image_front_small_url}
              alt={pizza.product.product_name}
            />
            <h2>Country:{pizza.product.countries_lc}</h2>
            <h3>Brand:{pizza.product.brands}</h3>
          </div>
         
            <div className="main-info-pizza ingredients-box">
              <h2>Ingredients</h2>
              <ul key={pizza.product.id}>
                {pizza.product.ingredients.map((ingredient) => (
                  <>
                    <li>{ingredient.text}</li>
                  </>
                ))}
              </ul>
              <img
                src={pizza.product.image_ingredients_url}
                alt={pizza.product.product_name}
              />
            </div>
            <div className="main-info-pizza">
              <h2>Alergens</h2>
              <ul>
                {pizza.product.allergens_hierarchy.map((alergens) => (
                  <li>{alergens}</li>
                ))}
              </ul>
            </div>
          
        
      </div>
      </Fragment>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
export default Users;
