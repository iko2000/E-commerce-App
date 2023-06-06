import "./componentstyle.css";

function Product(props: any) {
  return (
    <>
      <div className="product-container">
        <div className="product-box">
          <div className="product-boxes">
            <img src={props.src1} />
            <h6
              style={{ fontSize: "25px", color: "black", fontWeight: "bold" }}
            >
              {props.name1}
            </h6>
            <span style={{ cursor: "pointer" }} onClick={props.shop}>
              SHOP{" "}
            </span>
            {props.button ? (
              <button onClick={props.click} className="btnyellow">
                SEE PRODUCT
              </button>
            ) : null}
          </div>
          <div className="product-boxes">
            <img src={props.src2} />
            <h6
              style={{ fontSize: "25px", color: "black", fontWeight: "bold" }}
            >
              {props.name2}
            </h6>
            <span style={{ cursor: "pointer" }} onClick={props.shop2}>
              SHOP{" "}
            </span>
            {props.button ? (
              <button onClick={props.click2} className="btnyellow">
                SEE PRODUCT
              </button>
            ) : null}
          </div>

          <div className="product-boxes">
            <img src={props.src3} />
            <h6
              style={{ fontSize: "25px", color: "black", fontWeight: "bold" }}
            >
              {props.name3}
            </h6>
            <span style={{ cursor: "pointer" }} onClick={props.shop3}>
              SHOP{" "}
            </span>
            {props.button ? (
              <button onClick={props.click3} className="btnyellow">
                SEE PRODUCT
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
