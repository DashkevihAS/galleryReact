import React from 'react';
import style from './Header.module.css';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';

export const Header = () => (
  <header className={style.header}>
    <div className={style.wrapper}>
      <Logo />
      <Auth />
    </div>
  </header>
);
