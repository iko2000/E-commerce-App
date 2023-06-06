import image1 from "../assets/speakers/SPEAKER1.png";
import image2 from "../assets/speakers/SPEAKER2.png";
import Baner from "../components/Baner.js";
import Product from "../components/Product.js";
import Blog from "../components/Blog.js";
import data from "../data.json";
import headphone from "../assets/home/desktop/headphon.png";
import speaker from "../assets/home/desktop/speak.png";
import dyno from "../assets/home/desktop/dyno.png";
import { useNavigate } from "react-router-dom";
import navigator from "../helperfunctions/navigator.js";

export default function Speakers() {
  const navigate = useNavigate();

  return (
    <>
      <Baner
        // style={{ backgroundColor: "#0E0E0E" }}
        style2={{ color: "black" }}
        style3={{ height: "100%" }}
        classname="banner-reverse"
        new={data[5].new}
        name={data[5].name}
        description={data[5].description}
        img={image2}
        btnclass="btnyellow"
        alt="Earphones picture"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 5),
          });
          console.log("WORKS");
        }}
      />
      <Baner
        // style={{ backgroundColor: "#0E0E0E" }}
        style2={{ color: "black" }}
        style3={{ height: "100%" }}
        classname="baner-row"
        new={data[4].new}
        name={data[4].name}
        description={data[4].description}
        img={image1}
        alt="Earphones picture"
        btnclass="btnyellow"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 4),
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
