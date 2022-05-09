export default function Product(props) {
  const medieUrl = "https://revivstudio-8a0a.restdb.io/media/";
  return (
    <article className="product">
      <img src={medieUrl + props.product.image[0]} alt={props.product.productname} />
      <h2>{props.product.productname}</h2>
    </article>
  );
}
