import React from "react";
import countimg from "../Group2.png"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
               <img className={styles.image} src={countimg} alt="logo"></img>
            </div>
            <div className={styles.menu}>
                <a href="#">Главная</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
            </div>
        </div>
    )
}

export default Header