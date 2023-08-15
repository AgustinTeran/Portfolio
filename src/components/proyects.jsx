import React from "react";
import moviePop from "../assets/moviePop.png";
import technoTrade from "../assets/technoTrade.png";
import videoGames from "../assets/videoGames.png";
import instajram from "../assets/instajram.png";

var arrayProyectos = [
    {
        name: "Videogames",
        img: videoGames,
        link: "https://pi-videogames-lovat.vercel.app/"
    },
    {
        name: "Techno Trade",
        img: technoTrade,
        link: "https://front-wheat-gamma.vercel.app/"
    },
    {
        name: "MoviePop",
        img: moviePop,
        link: "https://moviepop-three.vercel.app/"
    },
    {
        name: "Red Social",
        img: instajram,
        link: "https://instajram.vercel.app/"
    },
    
]


export default function Proyects(){
    return (
        <div className="section proyectsContainer" id="proyects">
            <h3>Proyectos</h3>
            <div className="proyects">
                {
                    arrayProyectos.map((e,i) => {
                        return (
                            <div key={i}>
                                <a href={e.link} target="_blank"><img src={e.img} alt={e.name} /></a>
                                <h4>{e.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}