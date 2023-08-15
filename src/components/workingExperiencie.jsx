import React from "react"
import jackCavernicola2 from "../assets/jackCavernicola2.png";
import jackCavernicola from "../assets/jackCavernicola.png";



export default function WorkingExperiencie(){
  return (
    <div className="section" id="experienciaLaboral">
      <h3>Experiencia laboral</h3>
      <div>
        <h4 className="mb-3 mt-10">Lab9 Agencia Digital | 03/2023 - 08/2023</h4>
        <p>Durante mi tiempo en <a href="https://lab9.co/es/" target="_blank">Lab9</a>, estuve trabajando como FrontEnd developer. Fui parte de un equipo encargado del desarrollo de un ecommerce para una empresa de productos de ferretería llamada Jack Cavernícola. Actualmente, lo siguen desarrollando y no se encuentra en producción.</p>
        <div className="flex gap-3 w-full flex-wrap mt-8">
          <img style={{border:"solid 1px gray"}} src={jackCavernicola2} alt="captura de pantalla del eccomerce" className="h-[300px] object-scale-down rounded-[8px] min-w-[300px] flex-1 bg-gray-[rgb(248, 248, 248)]"/>
          <img style={{border:"solid 1px gray"}} src={jackCavernicola} alt="captura de pantalla del eccomerce" className="h-[300px] object-scale-down rounded-[8px] min-w-[300px] flex-1 bg-gray-[rgb(248, 248, 248)]"/>
        </div>
      </div>
    </div>
  )
}