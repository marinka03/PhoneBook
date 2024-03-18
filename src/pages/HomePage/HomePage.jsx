import React from 'react';
import style from './HomePage.module.css';
import { IoPaw } from 'react-icons/io5';

function HomePage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        PhoneBook <IoPaw size={24} />
      </h1>
      <p className={style['add-contact-text']}>
        This is your phone book. Quickly add new contacts...
      </p>
      <div className={style['img-wrapper']}></div>
    </div>
  );
}

export default HomePage;
