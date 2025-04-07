import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const myVans = vans.map((el) => {
    return (
      <div key={el.id} className="van">
        <img src={el.imageUrl} />
        <h4>{el.name}</h4>
        <p>{`${el.price} $/day`}</p>
        <span className={`van-type ${el.type} selected`}>{el.type}</span>
      </div>
    );
  });
  return (
    <>
      <div className="van-container">{myVans}</div>
    </>
  );
}
