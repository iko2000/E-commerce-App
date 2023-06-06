import "./componentstyle.css";
import img from "../assets/home/blogman.png";




function Blog(props:any) {


    return <>
    <div className="blog-container">
       <div className="blog-box">
        <div className="blog-txt"> 
        <div className="blog-txt-box">
        <h4 style={{fontSize: "40px"}}>BRINGING YOU THE <span style={{color: "rgb(216, 125, 74)"}}> BEST </span> AUDIO GEAR</h4>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        </div>
        <div className="blog-img">
          <img src={img} />
        </div>
       </div>
    </div>
    </>
}

export default Blog;