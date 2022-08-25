import React from 'react';
import { urlAuth } from '../../../api/auth';
import { useAuth } from '../../../hooks/useAuth';
import style from './Auth.module.css';

export const Auth = () => {
  console.log(localStorage.getItem('bearer'));
  const [authData] = useAuth();
  console.log(authData);
  return (
    <div className={style.authWrapper}>
      {authData.username ?
        <div className={style.auth}>
          <img src={authData.profile_image.medium} alt="" />
          <span>{authData.username}</span>
        </div> :
        <a className={style.enter} href={urlAuth}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="currentColor" />
            <path
              d="M13.0743 16.9498L11.6601
              15.5356L14.1957 13H2V11H14.1956L11.6601
              8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z"
              fill="currentColor"
            />
          </svg>
        </a>
      }
    </div>
  );
};
