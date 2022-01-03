import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      value={props.value}
      type={props.type || "submit"}
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
