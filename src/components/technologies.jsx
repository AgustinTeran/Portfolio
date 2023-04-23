import React from "react";


var arrayTecnologias = [
    "Javascript",
    "CSS",
    "HTML",
    "React",
    "Redux",
    "SCSS",
    "Tailwind",
    "DaisyUI",
    "Express",
    "Node.js",
    "Sequelize",
    "PostgreSQL",
    "SQL",
    "Git",
    "Github"
]

export default function Technologies(){
    return (
        <div className="section technologiesContainer" id="technologies">
            <h3>Tecnologias</h3>
            <ul>
                {
                    arrayTecnologias.map((e,i) => <li key={i}>{e}</li>)
                }
            </ul>
        </div>
    )
}