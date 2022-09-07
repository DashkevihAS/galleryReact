import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { urlAuth } from '../../../api/auth';
import { delToken, getTokenUrl, setToken } from '../../../api/token';
import style from './Auth.module.css';
import Spinner from '../../../UI/Spinner/Spinner';
import { ReactComponent as LogOut } from '../../../UI/log_out_icon_128821.svg';
import { useNavigate } from 'react-router';
import { photosUpdate, tokenUpdate } from '../../../store/photos/photosSlice';
import { authLogout, authRequestAsync } from '../../../store/auth/authAction';
import { photosRequestAsync } from '../../../store/photos/photosAction';

export const Auth = () => {
  const authData = useSelector(state => state.auth.data);
  const code = new URLSearchParams(location.search)
    .get('code');
  const tokenUrl = getTokenUrl(code);
  const loading = useSelector(state => state.auth.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    code && !localStorage.getItem('bearer') &&
    fetch(tokenUrl, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        setToken(data.access_token);
        dispatch(tokenUpdate(data.access_token));
        dispatch(photosRequestAsync(data.access_token));
        dispatch(authRequestAsync(data.access_token));
        navigate('/');
      });
  }, []);

  const logOut = () => {
    delToken();
    dispatch(photosUpdate());
    dispatch(tokenUpdate(''));
    dispatch(authLogout());
    delToken();
    navigate('/');
  };

  return (
    <div className={style.authWrapper}>
      {loading ?
        <Spinner/> :
        !Array.isArray(authData) && authData.username ?
        <div className={style.auth}>
          <div className={style.profileImg}>
            <img
              className={style.img}
              src={authData.profile_image.medium}
              alt={authData.username} />
          </div>
          <div className={style.logOut}>
            <span>{authData.username}</span>
            <LogOut onClick={logOut}/>
          </div>
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
