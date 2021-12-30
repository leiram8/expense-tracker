import Card from "../UI/Card/Card";
import styles from "./Balance.module.css"

const Balance = (props) => {

    return (
        <Card className={styles.balance}>
            <h2>Balance: ${props.balance}</h2>
        </Card>
    )
}

export default Balance;