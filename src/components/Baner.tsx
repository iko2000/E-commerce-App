import "./componentstyle.css";

function Baner(props:any) {

   const id = props.id;

    return <>
     <div style={props.style} className="baner-container">
        <div  className={props.classname}>
          <div className="baner-description"> 
          <div style={props.style2} className="baner-description-box">
             <span style={{color: "#d87d4a"}}>{props.new ? "NEW PRODUCT" : null}</span>
             <h2>{props.name}</h2>
             <p>{props.description}</p>
             <button className={props.btnclass} onClick={props.click}>SEE PRODUCT</button>
          </div>
          </div>
          <div className="baner-pic">
            <div style={props.style3} className="baner-pic-box">
             {props.img ? <img src={props.img} alt={props.alt}/> : null } 
            </div>

          </div>
        </div>
     </div>
    </>
}


export default Baner;