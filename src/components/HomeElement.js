import React from 'react';
import { Link } from "react-router-dom";
import "./HomeElement.css"
export const HomeElement = () => (

<div className="home-wrap">
<div className="home-box">
<h1>Pizza Time</h1>
<blockquote>
"My love is pizza shaped. Won’t you have a slice? It’s circular, so there’s enough to go around."
</blockquote>
<Link
    className="link-to"
    to={`/pizzas`}
  > <button><span>View Pizzas</span></button></Link>
</div>

<div className="home-box">
    <img src="https://images.pexels.com/photos/5902970/pexels-photo-5902970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza"></img>
</div>

</div>



)