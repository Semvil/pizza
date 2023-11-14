import React from "react";
import style from "../scss/components/NF.module.scss";

function NotFound() {
  return (
    <div className={style.root}>
      <span className={style.smile}>🙁</span>
      <h1>Сторінки не існує</h1>
      <p>Нажаль на цій сторінці нічого не знайдено</p>
    </div>
  );
}

export default NotFound;
