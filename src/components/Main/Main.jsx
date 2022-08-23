import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { List } from './List/List';
import style from './Main.module.css';
import { Error } from '../Main/Error/Error';
import { Photo } from '../Main/Photo/Photo';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/photos' element={<List/>}/>
        <Route path='photos/:id' element={<Photo/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Layout>
  </main>
);

