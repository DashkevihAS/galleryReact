import React from 'react';
import { List } from './List/List';
import style from './Main.module.css';

export const Main: React.FC = () => (
  <main className={style.main}>
    <List />
  </main>
);
