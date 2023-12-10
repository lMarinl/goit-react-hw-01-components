import React from 'react';
import transactionCss from './Transactions.module.css';

export const TransactionHistory = ({ item }) => {
  return (
    <table className={transactionCss.transactionHistory}>
      <thead>
        <tr>
          <th className={transactionCss.tableHeader}>Type</th>
          <th className={transactionCss.tableHeader}>Amount</th>
          <th className={transactionCss.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => (
          <tr className={transactionCss.tableRow} key={id}>
            <td className={transactionCss.tableCell}>{type}</td>
            <td className={transactionCss.tableCell}>{amount}</td>
            <td className={transactionCss.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
