import {  useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Homepage from "./pages/Home.js";
import Earphones from "./pages/Earphones.js";
import Headphones from "./pages/Headphones.js";
import Speakers from "./pages/Speakers.js";
import fb from "./assets/shared/desktop/icon-facebook.svg";
import twitter from "./assets/shared/desktop/icon-twitter.svg";
import insta from "./assets/shared/desktop/icon-instagram.svg";
import Item from "./pages/Item.js";
import Portal from "./portals/Portal.js";
import data from "./data.json";
import {createContext} from "react";
import Cart from "./components/Cart.js";
import shopingcart from "./assets/shared/desktop/icon-cart.svg"
import { useNavigate } from "react-router-dom";
import Checkout from "./pages/Checkout.js";
export const Themecontext = createContext(null);
export const statecontext = createContext(null);
export const objcontext = createContext(null);





function App() {
  const navigate = useNavigate();


  const [nav, setNav] = useState("");
  const [active, setActive] = useState(false);
  const [bill, setBill] = useState(0);
  const [numberofItems, setNumberofItems] = useState(0);


const defaultCart = () => {
  let cart = {};
  for(let i = 1; i < data.length + 1 ; i++ ) {
    cart[i] = 0;
  }
  return cart
}


  const [obj, setObj] = useState(defaultCart())

  const addItem = (itemId:any, quantity) => {
    setObj((obj) => ({...obj, [itemId]: quantity}))
   

  }

  const removeState = (num) => {
    setNav(num);
 
  }






  useEffect(() => {
    let totalBill = 0;
  
    Object.entries(obj).forEach(([itemId, quantity]) => {
      const item = data.find(item => item.id == itemId);
      if (item) {
        totalBill += item.price * quantity;
      }
    });
    console.log("totalbill", totalBill);
  
    setBill(totalBill);
    const total = Object.values(obj).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  
  
    setNumberofItems(total);

    
  }, [obj, data]);

  
 
 



  console.log('HOW MANY ITEMS?', numberofItems)
  return (
    <>
    <objcontext.Provider value={{obj, bill}}> 
    <statecontext.Provider value={removeState}>
    <Themecontext.Provider value={addItem}>
      <header className={nav ? "header-active" : ""}>
        <nav>
          <span style={{fontSize: "27px"}}><Link onClick={() => setNav("")} to="/">
              audiophile
            </Link></span>
          <ul>
            <Link onClick={() => setNav("")} to="/">
              HOME
            </Link>
            <Link onClick={() => setNav("HEADPHONES")} to="/headphones">
              HEADPHONES
            </Link>
            <Link onClick={() => setNav("SPEAKERS")} to="/speakers">
              SPEAKERS
            </Link>
            <Link onClick={() => setNav("EARPHONES")} to="/earphones">
              EARPHONES
            </Link>
          </ul>
          <span onClick={() => setActive(!active)}><img style={{cursor: "pointer"}} src={shopingcart} /></span>
          <Portal>
            {" "}
            {active ? (
              <div className="basket">
                <div style={{width: '100%', heigth: '20px', display: 'flex', justifyContent: 'space-between'}}><h1 style={{fontSize: '15px'}}> CART ({numberofItems})</h1>  <p onClick={() => setObj(defaultCart())}>Remove all</p>  </div>
                {data.map((item) => {
                if(obj[item.id] !== 0) {
                  return (
                  <>
                  <Cart style2={{fontSize: '10px'}} name={item.name} src={item.categoryImage.desktop} price={item.price} quantity={obj[item.id]}/>
                  </>
                  )
                }
                })}
                  {numberofItems ? <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}> <p>TOTAL:  </p><p>$ {bill} </p></div> : null }
                 {numberofItems ?    <button style={{width: '100%'}} className="btnyellow" onClick={() => {
                  navigate("/checkout")
                  setActive(false)
                 }}>CHECK OUT</button> : null}
                
              </div>
            ) : <span></span>}
          </Portal>
        </nav>
        {nav ? (
          <div className="active-nav">
            <h2>{nav}</h2>
          </div>
        ) : null}
      </header>
      <main onClick={() => setActive(false)} style={active ? {zIndex: '-2', filter: 'blur(2px)'} : null}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="/item"
            element={
              <Item />
            }
          />
        </Routes>
      </main>
      <footer>
        <div style={{ color: "white" }} className="footer-txt">
          <h5 style={{fontSize: "35px"}}>audiophile</h5>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="footer-logos">
          <div className="footer-logos-li">
            <Link onClick={() => setNav("")} to="/">
              HOME
            </Link>
            <Link onClick={() => setNav("HEADPHONES")} to="/headphones">
              HEADPHONES
            </Link>
            <Link onClick={() => setNav("SPEAKERS")} to="/speakers">
              SPEAKERS
            </Link>
            <Link onClick={() => setNav("EARPHONES")} to="/earphones">
              EARPHONES
            </Link>
          </div>

          <div className="footer-logos-logo">
            <img src={fb} />
            <img src={insta} />
            <img src={twitter} />
          </div>
        </div>
      </footer>
      </Themecontext.Provider>
      </statecontext.Provider>
      </objcontext.Provider>
    </>
  );
}

export default App;
