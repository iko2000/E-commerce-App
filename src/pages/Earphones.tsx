import Baner from "../components/Baner.js";
import Blog from "../components/Blog.js";
import Product from "../components/Product.js";
import data from "../data.json";
import headphone from "../assets/home/desktop/headphon.png";
import speaker from "../assets/home/desktop/speak.png";
import dyno from "../assets/home/desktop/dyno.png";
import { useNavigate } from "react-router-dom";
import navigator from "../helperfunctions/navigator.js";



function Earphones() {

  const navigate = useNavigate();


  return (
    <>
      <Baner
        // style={{ backgroundColor: "#0E0E0E" }}
        style2={{ color: "black" }}
        classname="banner-reverse"
        new={data[0].new}
        name={data[0].name}
        description={data[0].description}
        img={data[0].image.desktop}
        alt="Earphones picture"
        btnclass="btnyellow"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 0),
          });
          console.log("WORKS");
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
         <Blog />
    </>
  );
}

export default Earphones;
