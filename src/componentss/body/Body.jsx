import React from 'react'
import style from './Body.module.css'

const Body = () => {
    return (
        <div className={style.button_container}>
            <div className={style.num_square}>
                <div className={style.num}>140</div>
            </div>
            <div className={style.but_square}>
                <button className={style.blue}>Увеличить</button>
                <button className={style.orange}>Уменьшить</button>
                <button className={style.gray}>Сбросить</button>
            </div>
        </div>
    );
};

export default Body;