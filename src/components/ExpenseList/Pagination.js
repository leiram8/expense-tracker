import react from "react";
import Button from "../UI/Button/Button"

import styles from "./ExpenseList.module.css"

const Pagination = (props) => {
  let pageNumbers = [];

  for (let i = 1; i <= props.numberPages; i++) {
    pageNumbers.push(i);
  }

//   const clickHandler = (event) => {
//     console.log(event.target.value);
//     props.onPageNumberChange(event.target.value);
//   };

  return (
    <div>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          value={number}
          type="button"
          onClick={props.onPageNumberChange}
          className={styles.pagination}
        >
          {number}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
