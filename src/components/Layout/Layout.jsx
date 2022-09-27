import React from 'react';
import style from './Layout.module.css';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router';

export const Layout = () => (
  <div className={style.container}>
    <Header />
    <Outlet />
  </div>
);
