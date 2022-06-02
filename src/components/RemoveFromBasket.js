export default function RemoveFromBasket(props) {
  const item = props.product.productname;

  let amount = 0;
  if (item && item.amount) {
    amount = item.amount;
  }

  function handleClickRemove() {
    props.setBasket((old) => {
      const newBasket = old.filter((item) => item.id !== props.product.id);
      props.setBasket(newBasket);
      return newBasket;
    });
  }
  return (
    <div>
      <button className="remove-from-basket-btn" onClick={handleClickRemove}>
        <img src={`./images/trash.png`} alt="" />
      </button>
    </div>
  );
}
