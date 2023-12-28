import React from 'react';
import style from './HomePage.module.css';

function HomePage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>PhoneBook</h1>
      <p className={style['add-contact-text']}>
        This is your phone book. Quickly add new contacts...
      </p>
      <div className={style['img-wrapper']}></div>

    </div>
  );
}

export default HomePage;
