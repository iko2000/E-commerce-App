import { useContext, useEffect } from "react";
import { objcontext } from "../App.js";
import data from "../data.json";
import Cart from "../components/Cart.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymenthmethod: "CASH",
    },
  });
 
  const [emoney, setEmoney] = useState(false);
  const { obj, bill } = useContext(objcontext);
  const [shipping, setShipping] = useState(50);
  const [vat, setVat] = useState((bill * 0.18).toFixed(2));
  const [sendData, setSenddata] = useState({});

  const onSubmit = (paymentdata: any) => setSenddata(paymentdata);
 console.log(`DATA: ${sendData}`, `COST ${bill + shipping}`, `ITEMS ${obj}`);

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-container-box">
          <div className="checkout-header">
            <button
              style={{
                border: "none",
                fontSize: "14px",
                color: "grey",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              GO BACK
            </button>
          </div>
          <div className="checkout-body">
            <div className="form-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "80%",
                  height: "100%",
                  gap: "30px",
                  flexDirection: "column",
                }}
              >
                <h2>CHECKOUT</h2>

                <form
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "80%",
                    height: "100%",
                    gap: "30px",
                    flexDirection: "column",
                  }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="checkout-person">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "15%",
                      }}
                    >
                      <span style={{ color: "#d87d4a", fontSize: "19px" }}>
                        BILLING DETAILS{" "}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "40%",
                      }}
                    >
                      <div className="checkout-namebox">
                        <label>Name </label>
                        <input
                          placeholder="Name"
                          {...register("Name", {
                            required: true,
                            pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
                            maxLength: 20,
                            minLength: 3,
                          })}
                        />
                        {errors.Name && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Wrong Name Format
                          </span>
                        )}
                      </div>
                      <div className="checkout-namebox">
                        <label>Email Address</label>
                        <input
                          placeholder="example@gmail.com"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            maxLength: 40,
                            minLength: 3,
                          })}
                        />
                        {errors.email && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Wrong Email format
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "40%",
                      }}
                    >
                      <div className="checkout-namebox">
                        <label>Photo Number </label>
                        <input
                          placeholder="Number"
                          {...register("phonenum", {
                            required: true,
                            pattern: /^\+?\d+$/,
                            maxLength: 20,
                            minLength: 8,
                          })}
                        />
                        {errors.phonenum && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Wrong Format (should start with +){" "}
                          </span>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="checkout-adress">
                    <span>SHIPING INFO</span>
                    <div
                      style={{
                        width: "100%",
                        height: "8rem",
                      }}
                    >
                      <div
                        style={{ width: "100%" }}
                        className="checkout-namebox"
                      >
                        <label>Address </label>
                        <input
                          style={{ width: "99%" }}
                          placeholder="Adress"
                          {...register("address", {
                            required: true,
                            pattern: /^[\w\s.#-]+$/,
                            maxLength: 20,
                            minLength: 3,
                          })}
                        />
                        {errors.address && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Addres Structure is not correct
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8rem",

                        display: "flex",
                      }}
                    >
                      <div className="checkout-namebox">
                        <label>Zip Code</label>
                        <input
                          placeholder="5034-34"
                          {...register("ZIPCODE", {
                            required: true,
                            pattern: /^[0-9\b]+$/,
                            maxLength: 12,
                            minLength: 3,
                          })}
                        />
                        {errors.ZIPCODE && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Wront Zip code format
                          </span>
                        )}
                      </div>
                      <div className="checkout-namebox">
                        <label>City</label>
                        <input
                          placeholder="City"
                          {...register("City", {
                            required: true,
                            pattern: /^[A-Za-z]+$/i,
                            maxLength: 20,
                            minLength: 3,
                          })}
                        />
                        {errors.City && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            City not found{" "}
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8rem",
                      }}
                    >
                      <div className="checkout-namebox">
                        <label>Country</label>
                        <input
                          placeholder="Georgia"
                          {...register("Country", {
                            required: true,
                            pattern: /^[A-Za-z]+$/i,
                            maxLength: 20,
                            minLength: 3,
                          })}
                        />
                        {errors.Country && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Invalid Country{" "}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="checkout-method">
                    <span>PAYMENT DETAILS </span>

                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          width: "50%",
                          height: "100%",
                          display: "flex",
                        }}
                      >
                        <span>Paymenth Method</span>
                      </div>
                      <div style={{ width: "50%" }}>
                        <div
                          style={{
                            width: "100%",
                            height: "50%",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              gap: "10px",
                              border: "1px solid black",
                              paddingLeft: "10px",
                              alignItems: "center",
                            }}
                          >
                            <input
                              {...register("paymenthmethod")}
                              onChange={() => setEmoney(true)}
                              required
                              type="radio"
                              value="EMONEY"
                            />
                            {errors.paymenthmethod && <span>EROOOR</span>}

                            <span>E-Money</span>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "50%",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              border: "1px solid black",
                              paddingLeft: "10px",
                              marginTop: "10px",
                              height: "100%",
                              display: "flex",
                              gap: "10px",
                              alignItems: "center",
                            }}
                          >
                            <input
                              {...register("paymenthmethod")}
                              onChange={() => setEmoney(false)}
                              required
                              type="radio"
                              value="CASH"
                            />

                            {errors.paymenthmethod && <span>EROOOR</span>}

                            <span>Cash on Delivery</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {emoney ? (
                    <div className="checkout-numbers">
                      <div className="checkout-namebox">
                        <label>E-money Number </label>
                        <input
                          placeholder="434 344 3443"
                          {...register("EmoneyNumber", {
                            required: true,
                            pattern: /^[0-9\b]+$/,
                            maxLength: 20,
                            minLength: 3,
                          })}
                        />
                        {errors.EmoneyNumber && (
                          <span style={{ color: "red", fontSize: "10px" }}>
                            E-money Number is not valid
                          </span>
                        )}
                      </div>
                      <div className="checkout-namebox">
                        <label>E-money Code </label>
                        <input
                          placeholder="E-MoneyCode"
                          {...register("EmoneyCode", {
                            required: true,
                            pattern: /^[0-9\b]+$/,
                            maxLength: 20,
                            minLength: 3,
                          })}
                        />
                        {errors.EmoneyCode && (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Code is not valid
                          </span>
                        )}
                      </div>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
            <div
              style={{
                width: "40%",
                height: "500px",
                display: "flex",
                alignItems: "flex-start",
                backgroundColor: "wheat",
                flexDirection: "column",
                padding: "15px",
                gap: "25px",
              }}
            >
              <h2>Summary</h2>
              {data.map((item) => {
                if (obj[item.id] !== 0) {
                  return (
                    <>
                      <Cart
                        style2={{ fontSize: "17px" }}
                        style={{ height: "90px" }}
                        name={item.name}
                        src={item.categoryImage.desktop}
                        price={item.price}
                        quantity={obj[item.id]}
                      />
                    </>
                  );
                }
              })}
              <div className="checkout-paybox">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>TOTAL: </p> <p>$ {bill}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>SHIPPING: </p> <p>$ {shipping}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>VAT (INLCUDED) </p> <p>$ {vat}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>GRAND TOTAL: </p> <p>$ {bill + shipping}</p>
                </div>

                <button
                  onClick={handleSubmit((d) => setSenddata(d))}
                  type="submit"
                  style={{ width: "100%" }}
                  className="btnyellow"
                >
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
