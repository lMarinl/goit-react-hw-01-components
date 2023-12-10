import React from 'react';

import profileCss from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;

  return (
    <div className={profileCss.profile}>
      <div className={profileCss.description}>
        <img
          className={profileCss.avatar}
          src={avatar}
          alt="User avatar"
          width={100}
          height={100}
        />
        <p className={profileCss.name}>{userName}</p>
        <p className={profileCss.tag}>@{tag}</p>
        <p className={profileCss.location}>{location}</p>
      </div>

      <ul className={profileCss.stats}>
        <li className={profileCss.item}>
          <span className={profileCss.label}>Followers</span>
          <span className={profileCss.quantity}>{followers}</span>
        </li>
        <li className={profileCss.item}>
          <span className={profileCss.label}>Views</span>
          <span className={profileCss.quantity}>{views}</span>
        </li>
        <li className={profileCss.item}>
          <span className={profileCss.label}>Likes</span>
          <span className={profileCss.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
