import { useLoaderData } from "react-router-dom";

function CheckOut() {
  const service = useLoaderData();
  const { title, price } = service;
  return <div>


    <h3>{title}</h3>
  </div>;
}

export default CheckOut;
