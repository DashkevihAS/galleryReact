import React from 'react';
import style from './Layout.module.css';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router';

export const Layout = () => (
  <>
    <Header />
    <div className={style.container}>
      <Outlet />
    </div>
  </>
);
