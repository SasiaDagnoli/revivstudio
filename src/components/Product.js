export default function Product(props) {
  const mediaUrl = "https://revivstudio-8a0a.restdb.io/media/";
  return (
    <article className="product">
      <img src={mediaUrl + props.product.image[0]} alt={props.product.productname} style={{ width: "40%", height: "auto" }} />
      <h2>{props.product.productname}</h2>
      <p>{props.product.price} KR.</p>
    </article>
  );
}
