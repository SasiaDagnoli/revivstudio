export default function Counter(props) {
  // const item = props.basket.find((basketItem) => basketItem.productname === props.product.productname);

  const item = props.product.productname;

  let amount = 0;
  if (item && item.amount) {
    amount = item.amount;
  }

  function handleClick() {
    props.setBasket((old) => {
      let found = false;
      const nextState = [...old].map((item) => {
        if (item.productname === props.product.productname) {
          found = true;
          return { ...item, amount: item.amount };
        }
        console.log("put i kurv", item);
        return item;
      });
      if (found) {
        return nextState;
      } else {
        return nextState.concat({ productname: props.product.productname, price: props.product.price, amount: 1 });
      }
    });
  }
  return (
    <div>
      <button onClick={handleClick}> Læg i indkøbskurv</button>
    </div>
  );
}
