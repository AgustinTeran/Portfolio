import React from "react";
import titleHenry from "../assets/titleHenry.png";
import titleHPucara from "../assets/tituloPucara.jpg";


export default function Education(){
    return (
        <div className="educationContainer section" id="education">
            <h3>Educación</h3>
            <div className="education">
                <div>
                    <h4>Henry</h4>
                    <img src={titleHenry} alt="titulo de henry" />
                </div>
                <div>
                    <h4>Apdes Pucará</h4>
                    <img src={titleHPucara} alt="titulo pucara" />
                </div>
            </div>
        </div>
    )
}