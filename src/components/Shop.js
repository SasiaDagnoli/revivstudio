import Productlist from "./Productlist";

export default function Shop(props) {
  console.log(props);
  return (
    <div className="Shop">
      <Productlist products={props.product}></Productlist>
    </div>
  );
}
