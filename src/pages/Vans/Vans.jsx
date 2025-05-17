import React from "react";
import { Link } from "react-router";
import { useSearchParams } from "react-router";
export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
    const typeFilter = searchParams.get("type")

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const myVans = displayedVans.map((el) => {
    return (
      <Link to={`/vans/:${el.id}`}>
        <div key={el.id} className="van">
          <img src={el.imageUrl} alt={`Image of van: ${el.name}`} />
          <h4>{el.name}</h4>
          <p>{`${el.price} $/day`}</p>
          <span className={`van-type ${el.type} selected`}>{el.type}</span>
        </div>
      </Link>
    );
  });
  return (
    <>
      <h1 style={{margin:"1rem"}}>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <Link to="?type=simple" className="van-type simple">
          Simple
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          Luxury
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          Rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear filter
        </Link>
      </div>
      <div className="van-container">{myVans}</div>
    </>
  );
}
