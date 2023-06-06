export default function Cart(props: any) {
  return (
    <>
      <div style={props.style} className="cart-container">
        <div className="cart-picture">
          <img src={props.src} />
        </div>
        <div className="cart-text">
          <p style={props.style2}>{props.name}</p>
          <p style={props.style2}>$ {props.price}</p>
        </div>
        <div className="cart-quantity">
          <p style={props.style2}> {props.quantity} X</p>
        </div>
      </div>
    </>
  );
}
