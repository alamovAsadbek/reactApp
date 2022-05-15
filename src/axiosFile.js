import React, {Component, useRef} from 'react';
import axios from "axios";
import "./sass.scss"
function Axios(){
    const text=useRef(null);
    const body=useRef(null);
        axios.get("https://54.uz/rang.php").then((response) => {
        const axiosData=response.data.status;
            console.log(axiosData)
        text.current.innerHTML=`Background color is ${axiosData}`;
        text.current.style.color="#fff";
            switch (axiosData) {
                case "yaxshil":
            body.current.style.backgroundColor="green";
            return
                case "qizil":
            body.current.style.backgroundColor="red";
            return;
                case "sariq":
            body.current.style.backgroundColor="yellow";
            return;
                case "qora":
            body.current.style.backgroundColor="black";
            return;
                case "ko'k":
            body.current.style.backgroundColor="blue";
            return;
                default:
            text.current.style.color="black";
            return;
        }


        })
    return(
        <div style={{width: "100$", height: "100%"}}>
        <div className="body" ref={body}>
            <h1 className="outText"  ref={text}></h1>
        </div>
        </div>
    )
}
export default Axios
