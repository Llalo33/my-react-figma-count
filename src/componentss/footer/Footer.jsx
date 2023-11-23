import React from "react";
import count2 from "./Group1.png";
import style from "./Footer.module.css"

 const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_green}>
        <div className={style.footer_logo}>
          <img className={style.logo2} src={count2} alt="logo" />
        </div>
        <div className={style.footer_menu}>
            <b>Партнёрам</b>
            <b>Разработчикам</b>
            <b>Вакансии</b>
        </div>
        <div className={style.copyright}>
            <b>ООО "интукод", 2020г</b>
        </div>
      </div>
    </div>
  );
}

export default Footer

