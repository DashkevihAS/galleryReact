import React from 'react';
import { List } from './List/List';
import style from './Main.module.css';

export const Main = () => (
  <main className={style.main}>
    <List />
  </main>
);
