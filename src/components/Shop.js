import Productlist from "./Productlist";

export default function Shop(props) {
  return (
    <div className="Shop">
      <h1>shop</h1>
      <Productlist
        products={props.products}
        basket={props.basket}
        setBasket={props.setBasket}
      ></Productlist>
    </div>
  );
}
