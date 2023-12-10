import React from 'react';
import StatisticsCss from './Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={StatisticsCss.statistics}>
      <h2 className={StatisticsCss.title}>{title}</h2>

      <ul className={StatisticsCss.stat}>
        {stats.map(({ id, label, percentage }) => (
          <li className={StatisticsCss.item} key={id}>
            <span className={StatisticsCss.label}>{label}</span>
            <span className={StatisticsCss.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
