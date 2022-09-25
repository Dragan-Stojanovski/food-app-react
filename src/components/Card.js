import { Link } from "react-router-dom";
import "./Card.css";
export const Card = (props) => (
  <Link
    className="link-to"
    to={`/users/${props.pizza.id}`}
    key={props.pizza.id}
  >
    <li className="card-wrap" key={props.pizza.id}>
      <div className="card-box" key={props.pizza.id}>
        <h1>{props.pizza.product_name}</h1>
        <h2>{props.pizza.brands}</h2>
        <img
          src={props.pizza.image_front_small_url}
          alt={props.pizza.product_name}
        />
        <h2>{props.pizza.countries_lc}</h2>

        <button>Read More</button>
      </div>
    </li>
  </Link>
);
