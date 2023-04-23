import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import CV from "../assets/AgustinTeran-Javascript.pdf";
import { Link } from "react-router-dom";

export default function About(){
    return (
        <div className="aboutContainer" id="about">
            <h1>Agustín José Terán</h1>
            <h2>Full Stack Developer</h2>
            {/* https://github.com/AgustinTeran */}
            <div className="redes-cv">  
                <button><a href="https://www.linkedin.com/in/agust%C3%ADn-jos%C3%A9-ter%C3%A1n-41aa64244/" target={"_blank"}><BsLinkedin/></a></button>
                <button><a href={CV} download>Descargar CV</a></button>
                <button><a href="https://github.com/AgustinTeran" target={"_blank"}><BsGithub/></a></button>
            </div>
            <div className="section sobreMi">
                <h3>Sobre Mí</h3>
                <p>
                Tengo 19 años. Egresado del Colegio Apdes Pucara y del bootcamp Soy Henry como Full Stack Web Developer. Actualmente estoy trabajando como desarrollador de FrontEnd en <Link to={"https://lab9.co/"}>Lab9 Agencia digital</Link>. Siempre estoy intentando mejorar y aprender
                </p>
            </div>

        </div>
    )
}