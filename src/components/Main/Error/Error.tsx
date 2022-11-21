import React from 'react';
import style from './Error.module.css';
import img from './error.gif';
import { Link } from 'react-router-dom';

export const Error: React.FC = () => (
  <div className={style.error}>
    <p> Page doesn`t exist </p>
    <img className={style.img} src={img} alt='Error' />
    <Link className={style.link} to='/'>
      {' '}
      Back to main page
    </Link>
  </div>
);
