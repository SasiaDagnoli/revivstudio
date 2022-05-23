import RemoveFromBasket from "./RemoveFromBasket";

export default function ProductBasket(props) {
  const basketContent = props.basket.map((product, index) => {
    return (
      <div>
        <article key={index}>
          <div className="remove-from-basket">
            <h3>{product.productname}</h3>
            <RemoveFromBasket
              key={index}
              product={product}
              basket={props.basket}
              setBasket={props.setBasket}
            />
          </div>
          <p>Pris: {product.price} DKK</p>
          <p>Antal: {product.amount}</p>
        </article>
      </div>
    );
  });
  return <section>{basketContent}</section>;
}
