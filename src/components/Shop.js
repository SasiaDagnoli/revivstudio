import Productlist from "./Productlist";

export default function Shop(props) {
  return (
    <div className="Shop">
      <Productlist
        products={props.products}
        basket={props.basket}
        setBasket={props.setBasket}
        amount={props.amount}
      ></Productlist>
    </div>
  );
}
