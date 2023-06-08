import { useLocation } from "react-router-dom";
import headphone from "../assets/home/desktop/headphon.png";
import speaker from "../assets/home/desktop/speak.png";
import dyno from "../assets/home/desktop/dyno.png";
import Product from "../components/Product.js";
import Blog from "../components/Blog.js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { statecontext, Themecontext } from "../App.js";
import navigator from "../helperfunctions/navigator.js";
import { useNavigate } from "react-router-dom";
import data from "../data.json";





export default function Item() {
  const navigate = useNavigate();
  const location  = useLocation();

  const addIt:any = useContext(Themecontext);
  const removestate:any = useContext(statecontext);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  console.log(name, price);
  const id = location.state?.id;
  

  useEffect(() => {
    removestate(null);
  }, []);

  function handleClick() {
    
   
      addIt(id, quantity);
   
    
    
  }

  useEffect(() => {
    setPrice(location.state.price);
    setName(location.state.name);
  }, [quantity]);

  let first: number | undefined;
  let second: number | undefined;
  let third: number | undefined;


 
    for (let i = 0; i < data.length; i++) {
      if (data[i].slug == location.state.finder1) {
        first = i;
       
      }
      if (data[i].slug == location.state.finder2) {
        second = i;
     
      }
      if (data[i].slug == location.state.finder3) {
        third = i;
  
      }
    }
  
  

  return (
    <>
      <div className="item-container">
        <div className="item-picture-box">
          <div className="item-picture">
            <img src={location.state.src} />
          </div>
        </div>

        <div className="item-description-box">
          <div className="item-description">
            <p style={{ color: "#d87d4a" }}>
              {" "}
              {location.state.new ? "NEW PRODUCT" : null}{" "}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "30px" }}>
              {" "}
              {location.state.name}{" "}
            </p>
            <p style={{ color: "grey" }}> {location.state.description}</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              $ {location.state.price}{" "}
            </p>
            <div className="addtocart">
              <div className="quantity">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => {
                    if (quantity < 5) setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="btn">
                <button onClick={handleClick}>ADD TO CART </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-features-container">
        <div className="item-features-features">
          <h2>FEATURES</h2>
          <p>{location.state.features}</p>
        </div>
        <div className="item-features-checkbox">
          <div className="item-features-checkbox-box">
            <h2>IN THE BOX</h2>
            <p>
              <span style={{ color: "#d87d4a" }}>
                {" "}
                {location.state.quantity1}X
              </span>{" "}
              {location.state.box1}
            </p>
            <p>
              <span style={{ color: "#d87d4a" }}>
                {" "}
                {location.state.quantity2}X{" "}
              </span>{" "}
              {location.state.box2}
            </p>
            <p>
              <span style={{ color: "#d87d4a" }}>
                {" "}
                {location.state.quantity3}X{" "}
              </span>{" "}
              {location.state.box3}
            </p>
            <p>
              <span style={{ color: "#d87d4a" }}>
                {" "}
                {location.state.quantity4}X{" "}
              </span>{" "}
              {location.state.box4}
            </p>
            {location.state.quantity5 ? (
              <p>
                <span style={{ color: "#d87d4a" }}>
                  {" "}
                  {location.state.quantity5}X{" "}
                </span>
                {location.state.box5}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="item-photo-container">
        <div className="item-photo-container1">
          <div className="item-photo-container-box">
            <img src={location.state.fepic1} />
          </div>
          <div className="item-photo-container-box">
            <img src={location.state.fepic2} />
          </div>
        </div>
        <div className="item-photo-container1">
          <img src={location.state.fepic3} />
        </div>
      </div>
      <div className="also">
        <h3>YOU ALSO MAY LIKE</h3>
        <Product
          src1={location.state.picture1}
          src2={location.state.picture2}
          src3={location.state.picture3}
          name1={location.state.featurename1}
          name2={location.state.featurename2}
          name3={location.state.featurename3}
          button={true}
          click={() => {
            navigate(`/item`, {
              state: navigator(data, first),
            });
           
          }}
          click2={() => {
            navigate(`/item`, {
              state: navigator(data, second),
            });
          
          }}
          click3={() => {
            navigate(`/item`, {
              state: navigator(data, third),
            });
          
          }}
        />
        <Product
          src1={headphone}
          src2={dyno}
          src3={speaker}
          name1="HEADPHONES"
          name2="SPEAKERS"
          name3="EARPHONES"
          shop={() => {
            navigate("/headphones");
          }}
          shop2={() => {
            navigate("/speakers");
          }}
          shop3={() => {
            navigate("/earphones");
          }}
        />
      </div>
      <Blog />
    </>
  );
}
