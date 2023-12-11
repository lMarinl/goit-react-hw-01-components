import React from 'react';
import Css from './Transactions.module.css';

export const TransactionHistory = ({ item }) => {
  return (
    <table className={Css.transactionHistory}>
      <thead>
        <tr>
          <th className={Css.tableHeader}>Type</th>
          <th className={Css.tableHeader}>Amount</th>
          <th className={Css.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => (
          <tr className={Css.tableRow} key={id}>
            <td className={Css.tableCell}>{type}</td>
            <td className={Css.tableCell}>{amount}</td>
            <td className={Css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
