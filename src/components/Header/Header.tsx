import React from 'react';
import style from './Header.module.css';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';
import { Search } from './Search/Search';
import { ButtonLiked } from './ButtonLiked/ButtonLiked';
import { useSelector } from 'react-redux';

type Fix = any;

export const Header = () => {
  const auth = useSelector((state: Fix) => state.auth.data);
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Search />
        {auth.username && <ButtonLiked />}
        <Auth />
      </div>
    </header>
  );
};
