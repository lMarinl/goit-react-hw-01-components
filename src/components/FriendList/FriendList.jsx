import React from 'react';
import Css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={Css.list}>
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      );
    })}
  </ul>
);

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={Css.item} key={id}>
      <span className={`${Css.status} ${isOnline ? Css.online : Css.offline}`}>
        {isOnline}
      </span>
      <img className={Css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={Css.name}>{name}</p>
    </li>
  );
};
