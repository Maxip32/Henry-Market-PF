import React from 'react';
import {products} from '../../data/data';
import style from "../Home/Home.module.css"

const Home = () => {
  return (
    <div className={style.card}>
      {products.map((e) => (
        <div key={e.id} className={style.content}>
          <img  src={e.image} alt='imagen not found'className={style.img} />
          <p className={style.subtitle}>{e.price}$</p>
          <p className={style.subtitle}>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
