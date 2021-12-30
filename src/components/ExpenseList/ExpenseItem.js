import styles from "./ExpenseList.module.css";

const ExpenseItem = (props) => {
  return (
    <li key={props.item.id} className={styles.item}>
      <div className={styles.name}>
        {props.item.name} ({props.item.category})
      </div>
      <div className={styles.date}>{props.item.date}</div>
      {/* {props.item.type === "expense" ? (
        <div className={styles.amount}>$-{props.item.amount}</div>
      ) : (
        <div className={styles.amount}>${props.item.amount}</div>
      )} */}
      <div
        className={` ${styles.amount}
         ${props.item.type === "expense" ? styles.expense : styles.income}
        `}
      >
        ${props.item.amount}
      </div>
    </li>
  );
};

export default ExpenseItem;
