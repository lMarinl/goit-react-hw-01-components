import React from 'react';

import Css from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;

  return (
    <div className={Css.profile}>
      <div className={Css.description}>
        <img
          className={Css.avatar}
          src={avatar}
          alt="User avatar"
          width={100}
          height={100}
        />
        <p className={Css.name}>{userName}</p>
        <p className={Css.tag}>@{tag}</p>
        <p className={Css.location}>{location}</p>
      </div>

      <ul className={Css.stats}>
        <li className={Css.item}>
          <span className={Css.label}>Followers</span>
          <span className={Css.quantity}>{followers}</span>
        </li>
        <li className={Css.item}>
          <span className={Css.label}>Views</span>
          <span className={Css.quantity}>{views}</span>
        </li>
        <li className={Css.item}>
          <span className={Css.label}>Likes</span>
          <span className={Css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
