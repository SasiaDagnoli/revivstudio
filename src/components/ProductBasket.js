export default function ProductBasket(props) {
  const basketContent = props.basket.map((product, index) => {
    return (
      <div>
        <article key={index}>
          <h3>{product.productname}</h3>
          <p>Pris: {product.price} DKK</p>
          <p>Antal: {product.amount}</p>
        </article>
      </div>
    );
  });
  return <section>{basketContent}</section>;
}
