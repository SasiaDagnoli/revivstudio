export default function AddToBasket(props) {
  // const item = props.basket.find((basketItem) => basketItem.productname === props.product.productname);
  // console.log("item", item);

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
        return nextState.concat({
          productname: props.product.productname,
          price: props.product.price,
          id: props.product._id,
          amount: 1,
        });
      }
    });
  }
  // function handleClickRemove() {
  //   console.log("fjern fra kruv", item);
  //   props.setBasket((old) => {
  //     const nextState2 = [...old].map((item) => {
  //       if (item.productname === props.product.productname) {
  //         return { ...item, amount: item.amount - 1 };
  //       }

  //       return item;
  //     });
  //     return nextState2.filter((item) => {
  //       return item.amount > 0;
  //     });
  //   });
  // }
  return (
    <div>
      <button onClick={handleClick}> Læg i indkøbskurv</button>
      {/* <button onClick={handleClickRemove}>Fjern fra kurv</button> */}
    </div>
  );
}
