import "./Pizzas.css";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Card } from "./Card";
import { Header } from "./Header";
import ingredients from "../data.json";
import ReactPaginate from "react-paginate";

function Pizzas() {
  const [filteredByIngredient, setFilteredByIngredient] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [users, setUsers] = useState([]);
  const [intvalue, setIntValue] = useState("");
  const [poductsCount, setProductsCount] = useState();
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;

  const fetchDetails = () => {
    fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=pizzas&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.products);
        setIsLoaded(true);
        setProductsCount(users.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((food) => {
      return (
        <Fragment>
          <Card key={food.id} pizza={food} />
        </Fragment>
      );
    });

  const filterHandlerReverse = () => {
    setFiltered(false);
    setProductsCount(users.length);
  };

  const filterButtonReverse = (
    <button onClick={filterHandlerReverse} className="filter-btn">
      Show All
    </button>
  );
  const fetchInter = () => {
    fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=pizzas&tagtype_1=ingredients&tag_contains_1=contains&tag_1=${intvalue}&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteredByIngredient(data.products);
        setFiltered(true);
        setIsFiltered(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayFilteredUsers = filteredByIngredient
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((food) => {
      if (isFiltered) {
        return (
          <Fragment>
            <Card pizza={food} />
          </Fragment>
        );
      } else {
        return <h2>Loading...</h2>;
      }
    });

  const routingMessage = () => {
    if (filtered) {
      return <h2>Pizzas containing:</h2>;
    } else if (!filtered) {
      return <h2>All Pizzas</h2>;
    }
  };

  const pageCount = Math.ceil(poductsCount / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayHandler = () => {
    if (!filtered) {
      return displayUsers;
    } else if (filtered && poductsCount > 0) {
      return displayFilteredUsers;
    }
  };
  
  const myFunction = () => {
    if (!filtered) {
      setProductsCount(users.length);
    } else if (filtered) {
      setProductsCount(filteredByIngredient.length);
    }
  };

  useEffect(() => {
    myFunction();
  },);

  if (isLoaded) {
    return (
      <div className="App">
        <Header />
        <div className="main-layout">
        <div className="cards-order">
          <label htmlFor="sostojki">Choose a ingredient:</label>
          <select
            name="sostojki"
            id="sostojki"
            form="sostojki"
            defaultValue={'DEFAULT'}
            onChange={(e) => setIntValue(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              {" "}
              -- select an option --{" "}
            </option>
            {ingredients.map((ingredient) => (
              <>
                <option value={ingredient.sostojka}>
                  {ingredient.sostojka}
                </option>
              </>
            ))}
          </select>
          <button className="filter-btn" onClick={fetchInter}>
            Filter Ingredient
          </button>
          {filterButtonReverse}
          <h2 id="products-counter">Number Of Products:<span id="count-product">{poductsCount} </span></h2>
          <div className="top-description">
            <span>
              {routingMessage()}
              {filtered ? <h2>{intvalue}</h2> : <h3> Njami</h3>}
            </span>
          </div>
          <ul>{displayHandler()}</ul>
        </div>
        <div className="pagination-wrap">
          {poductsCount === 0 ? (
            <h2>No Data To Be Shown </h2>
          ) : (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          )}
        </div>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default Pizzas;
