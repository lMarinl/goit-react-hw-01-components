import React from 'react';
import Css from './Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={Css.statistics}>
      {title && <h2 className={Css.title}>{title}</h2>}

      <ul className={Css.stat}>
        {stats.map(({ id, label, percentage }) => (
          <li className={Css.item} key={id}>
            <span className={Css.label}>{label}</span>
            <span className={Css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
