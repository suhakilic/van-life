import React from "react";
import { useParams } from "react-router";
export default function VanDetail() {
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [params.id]);

  return <p>Van detail goes here</p>;
}
