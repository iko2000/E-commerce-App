import Baner from "../components/Baner.js";
import Product from "../components/Product.js";
import img from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import heroimage from "../assets/home/desktop/image-hero.jpg";
import Blog from "../components/Blog.js";
import headphone from "../assets/home/desktop/headphon.png";
import speaker from "../assets/home/desktop/speak.png";
import dyno from "../assets/home/desktop/dyno.png";
import bigdyno from "../assets/home/desktop/BIG DYNO.png";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import navigator from "../helperfunctions/navigator.js";
import Portal from "../portals/Portal.js";
import { useState } from "react";

export default function Homepage() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  return (
    <>
      <Baner
        style={{ backgroundImage: `url(${heroimage})`, backgroundPosition: 'center', height: '39rem'}}
        style2={{ color: "white" }}
        classname="baner-row"
        new={data[3].new}
        btnclass="btnyellow"
        name={data[3].name}
        description={data[3].description}
        // img={data[3].image.desktop}
        alt="Earphones picture"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 3),
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
      <Baner
        style2={{ color: "white" }}
        classname="banner-reverse-home"
        name={data[5].name}
        description={data[5].description}
        img={bigdyno}
        alt="Earphones picture"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 5),
          });
   
        }}
      />
      <Baner
       
        style2={{ color: "black", width: "65%" }}
        classname="banner-home3"
        name="ZX7 SPEAKER"
        btnclass="btnrelative"
        click={() => {
          navigate(`/item`, {
            state: navigator(data, 4),
          });
    ;
        }}
      />
      <Blog />
    </>
  );
}
