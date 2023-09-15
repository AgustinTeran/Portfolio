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
                <a href="https://www.linkedin.com/in/agust%C3%ADn-jos%C3%A9-ter%C3%A1n-41aa64244/" target={"_blank"}><BsLinkedin/></a>
                <a href={CV} download>Descargar CV</a>
                <a href="https://github.com/AgustinTeran" target={"_blank"}><BsGithub/></a>
            </div>
            <div className="section sobreMi">
                <h3>Sobre Mí</h3>
                <p>
                Soy Full Stack Web Developer egresado del bootcamp Soy Henry. Cuento con 1 año de experiencia como desarrollador web. Siempre con ganas de aprender y mejorar.

                </p>
            </div>

        </div>
    )
}