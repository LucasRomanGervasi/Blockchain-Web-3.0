import React from "react"
import style from "./Nav.module.css"
import foto from "../img/logo.png"

export default function Nav(){
    return(
        <div className={style.containernav}>
            <div className={style.containerimg}>
                <img src={foto}/>
            </div>
            <div className={style.containertitulo}>
                <h1 className={style.titulo}>BLOCKCHAIN GERVASI</h1>
            </div>
            <div className={style.containerbotones}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a>Wallet</a>
                </li>
                <li>
                    <a>Indya</a>
                </li>
            </ul>
            </div>
        </div>
    )
}