import type { FC, ReactElement } from 'react';
import className from 'classnames';
import type { IAvatar } from './IAvatar';

const Index: FC<IAvatar.IProps> = ({ size, variant, imgSrc }): ReactElement => {
  const classes = className({
    'w-8 h-8': size === 'small',
    'w-10 h-10': size === 'medium',
    'w-14 h-14': size === 'large',
    'rounded-full': variant === 'filled',
  });
  if (variant === 'anonymous') {
    return (
      <svg
        className={classes}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
          fill="#FFF2E7"
        />
        <path
          d="M27.9998 14.6665C20.6478 14.6665 14.6665 20.6478 14.6665 27.9998C14.6665 31.3612 15.9265 34.4265 17.9865 36.7758C19.6398 38.8025 22.3412 40.8638 26.5718 41.2532C27.0412 41.3052 27.5185 41.3332 27.9998 41.3332C28.4812 41.3332 28.9585 41.3052 29.4265 41.2532C33.6585 40.8638 36.3585 38.8012 38.0118 36.7758C40.0732 34.4265 41.3332 31.3612 41.3332 27.9998C41.3332 20.6478 35.3518 14.6665 27.9998 14.6665ZM18.2785 23.6318C18.4838 23.7518 18.6892 23.8745 18.8865 23.9998C19.4145 24.3332 19.9412 24.6665 20.6012 24.9172C21.2598 25.1665 22.0518 25.3332 23.1065 25.3332C24.1625 25.3332 24.9545 25.1665 25.6145 24.9158C26.2745 24.6652 26.8025 24.3332 27.3305 23.9998C27.8585 23.6665 28.3865 23.3332 29.0465 23.0825C29.7052 22.8332 30.4972 22.6665 31.5532 22.6665C32.6092 22.6665 33.4012 22.8332 34.0598 23.0838C34.7198 23.3332 35.2478 23.6665 35.7758 23.9998C36.3038 24.3332 36.8318 24.6665 37.4918 24.9172C37.7292 25.0065 37.9905 25.0798 38.2665 25.1452C38.5212 26.0545 38.6665 27.0092 38.6665 27.9998C38.6665 29.1238 38.4892 30.2052 38.1665 31.2225C37.8185 31.4825 37.1892 31.8545 36.0638 32.2305C35.0385 32.5718 33.8345 32.8412 32.4838 33.0332C29.6452 33.4318 26.3532 33.4318 23.5145 33.0332C22.1638 32.8412 20.9598 32.5718 19.9345 32.2305C18.8092 31.8545 18.1798 31.4825 17.8318 31.2225C17.5105 30.2052 17.3332 29.1238 17.3332 27.9998C17.3332 26.4425 17.6772 24.9665 18.2785 23.6318Z"
          fill="#8D9A9E"
        />
        <path
          d="M23.3335 30.6665C24.4381 30.6665 25.3335 29.7711 25.3335 28.6665C25.3335 27.5619 24.4381 26.6665 23.3335 26.6665C22.2289 26.6665 21.3335 27.5619 21.3335 28.6665C21.3335 29.7711 22.2289 30.6665 23.3335 30.6665Z"
          fill="#8D9A9E"
        />
        <path
          d="M32.6665 30.6665C33.7711 30.6665 34.6665 29.7711 34.6665 28.6665C34.6665 27.5619 33.7711 26.6665 32.6665 26.6665C31.5619 26.6665 30.6665 27.5619 30.6665 28.6665C30.6665 29.7711 31.5619 30.6665 32.6665 30.6665Z"
          fill="#8D9A9E"
        />
      </svg>
    );
  }
  if (variant === 'notFilled') {
    return (
      <svg
        className={classes}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
          fill="#E9F4F7"
        />
        <path
          d="M28 14.6665C24.324 14.6665 21.3333 17.6572 21.3333 21.3332C21.3333 25.0092 24.324 27.9998 28 27.9998C31.676 27.9998 34.6667 25.0092 34.6667 21.3332C34.6667 17.6572 31.676 14.6665 28 14.6665ZM28 25.3332C25.7947 25.3332 24 23.5385 24 21.3332C24 19.1278 25.7947 17.3332 28 17.3332C30.2053 17.3332 32 19.1278 32 21.3332C32 23.5385 30.2053 25.3332 28 25.3332ZM40 39.9998V38.6665C40 33.5212 35.812 29.3332 30.6667 29.3332H25.3333C20.1867 29.3332 16 33.5212 16 38.6665V39.9998H18.6667V38.6665C18.6667 34.9905 21.6573 31.9998 25.3333 31.9998H30.6667C34.3427 31.9998 37.3333 34.9905 37.3333 38.6665V39.9998H40Z"
          fill="#8D9A9E"
        />
      </svg>
    );
  }
  return <img className={classes} src={imgSrc} alt="profile" />;
};
export default Index;
