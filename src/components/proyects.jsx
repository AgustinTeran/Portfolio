import React from "react";
import moviePop from "../assets/moviePop.png";
import technoTrade from "../assets/technoTrade.png";
import videoGames from "../assets/videoGames.png";
import instajram from "../assets/instajram.png";


export default function Proyects(){
    return (
        <div className="section proyectsContainer" id="proyects">
            <h3>Proyectos</h3>
            <div className="proyects">
                <div>
                    <a href="https://pi-videogames-lovat.vercel.app/" target={"_blank"}><img src={videoGames} alt="Videogames" /></a>
                    <h4>Videogames</h4>
                </div>
                <div>
                    <a href="https://front-wheat-gamma.vercel.app/" target={"_blank"}><img src={technoTrade} alt="Techno Trade" /></a>
                    <h4>Techno Trade</h4>
                </div>
                <div>
                    <a href="https://moviepop-three.vercel.app/" target={"_blank"}><img src={moviePop} alt="Movie Pop" /></a>
                    <h4>Movie Pop</h4>
                </div>
                <div>
                    <a href="https://instajram.vercel.app/" target={"_blank"}><img src={instajram} alt="instajram" /></a>
                    <h4>Instajram</h4>
                </div>
            </div>
        </div>
    )
}