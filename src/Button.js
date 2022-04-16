import PoropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
    return <button className={styles.title}>{text}</button>;
}

Button.PoropTypes = {
    text : PoropTypes.string.isRequired,
};

export default Button;