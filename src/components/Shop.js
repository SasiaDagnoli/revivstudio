import Productlist from "./Productlist";

export default function Shop(props) {
  console.log(props);
  return (
    <div className="Shop">
      <h1>shop</h1>
      <Productlist products={props.products}></Productlist>
    </div>
  );
}
