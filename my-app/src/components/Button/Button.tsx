import { ButtonProps } from "../../global/types";
import styles from "./button.module.scss";

export const Button =
  ({ btnState, onClickHandler, texts, bigSize }: ButtonProps) => {

    return (
      <div className={`${styles["add-task"]}`}>
        <button
          className={`${styles[bigSize ? "add-task__main-big-btn" : "add-task__main-btn"]}`}
          onClick={onClickHandler}>
          <span className={`${styles["add-task__main-btn__txt"]}`}>
            {btnState ? texts[0] : texts[1]}
          </span>
        </button>
      </div>
    );
  };

export default Button;