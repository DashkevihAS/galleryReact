import React from 'react';
import { Layout } from '../Layout/Layout';
import style from './Header.module.css';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.wrapper}>
        <Logo/>
        <Auth/>
      </div>
    </Layout>
  </header>
);

