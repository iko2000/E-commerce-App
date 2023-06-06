import Baner from "../components/Baner.js";
import Blog from "../components/Blog.js";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product.js";
import image1 from "../assets/headphones/8910.png";
import image2 from "../assets/headphones/5678.png";
import image3 from "../assets/headphones/1234.png";
import headphone from "../assets/home/desktop/headphon.png";
import speaker from "../assets/home/desktop/speak.png";
import dyno from "../assets/home/desktop/dyno.png";
import data from "../data.json";
import navigator from "../helperfunctions/navigator.js";

function Headphones() {
  const navigate = useNavigate();

  return (
    <>
      <Baner
        // style={{ backgroundColor: "#0E0E0E" }}
        style2={{ color: "black" }}
        classname="banner-reverse"
        new={data[3].new}
        name={data[3].name}
        description={data[3].description}
        img={image1}
        btnclass="btnyellow"
        alt="Earphones picture"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 3),
          });
          console.log("WORKS");
        }}
      />
      <Baner
        // style={{ backgroundColor: "#0E0E0E" }}
        style2={{ color: "black" }}
        classname="baner-row"
        new={data[2].new}
        name={data[2].name}
        description={data[2].description}
        img={image2}
        btnclass="btnyellow"
        alt="Earphones picture"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 2),
          });
          console.log("WORKS");
        }}
      />
      <Baner
        // style={{ backgroundColor: "#0E0E0E" }}
        style2={{ color: "black" }}
        classname="banner-reverse"
        name={data[1].name}
        description={data[1].description}
        img={data[1].image.desktop}
        btnclass="btnyellow"
        alt="Earphones picture"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 1),
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

export default Headphones;
