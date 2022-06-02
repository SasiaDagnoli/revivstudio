export default function AddToBasket(props) {
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
        return item;
      });
      if (found) {
        return nextState;
      } else {
        return nextState.concat({
          productname: props.product.productname,
          price: props.product.price,
          id: props.product._id,
          amount: 1,
          imagename: props.product.imagename,
        });
      }
    });
  }

  return (
    <div>
      <button onClick={handleClick}> Læg i indkøbskurv</button>
    </div>
  );
}
