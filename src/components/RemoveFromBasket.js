export default function RemoveFromBasket(props) {
  const item = props.product.productname;

  //   const item = props.basket.find((basketItem) => basketItem.productname === props.basket.productname);
  console.log("item", item);
  let amount = 0;
  if (item && item.amount) {
    amount = item.amount;
  }

  function handleClickRemove() {
    props.setBasket((old) => {
      /* const nextState = [...old].map((item) => {
        if (item.productname === props.basket.productname) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      }); */

      const newBasket = old.filter((item) => item.id !== props.product.id);
      props.setBasket(newBasket);
      return newBasket;
    });
  }
  return (
    <div>
      <button className="remove-from-basket-btn" onClick={handleClickRemove}>
        🗑
      </button>
    </div>
  );
}
