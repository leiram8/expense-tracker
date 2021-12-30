import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  let content = <p>No expenses yet! Try adding one.</p>;

  if (props.expensesList.length > 0) {
    content = (
      <ul>
        <li className={styles.titles}>
          <div>Name</div>
          <div>Date</div>
          <div>Amount</div>
        </li>
        {props.expensesList.map((expense) => {
          return <ExpenseItem key={expense.id} item={expense} />;
        })}
      </ul>
    );
  }

  return (
    <Card>
      <h2 className={styles.title}>Expenses List</h2>
      {content}
    </Card>
  );
};

export default ExpenseList;
