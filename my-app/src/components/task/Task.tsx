import styles from "./task.module.scss";
import { TaskProps } from "../../global/types";
import Category from "../category/Category";
import { category } from "../../global/types";
import Button from "../Button/Button";

const Task =
  ({ description,
    taskCategory,
    onCheckHandler,
    deleteTask,
    checked }: TaskProps): JSX.Element => {

    return (
      <div className={`${styles["main"]}`}>
        <div className={`${styles["main__left-wrapper"]}`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => { onCheckHandler(description, taskCategory) }}
            className={`${styles["main__left-wrapper__check-box"]}`}
          />
          <div className={`${styles["main__left-wrapper__txt-wrapper"]}`}>
            <span
              className={`${styles["main__left-wrapper__txt-wrapper__txt"]}`}>
              {checked ?
                <s
                  className={`${styles["main__left-wrapper__txt-wrapper__txt__completed-txt"]}`}>
                  {description}
                </s> : description}
            </span>
          </div>
        </div>
        <div className={`${styles["main__txt-wrapper__category-wrapper"]}`} >
          <Category
            renderX={false}
            deleteCategory={(cat: category) => void (null)}
            category={taskCategory}
            onClickHandler={() => void (null)} />
        </div >
        <div className={`${styles["main__delete-wrapper"]}`}>
          <Button
            btnState={true}
            onClickHandler={() => deleteTask(description, taskCategory)}
            bigSize={false}
            texts={["x", "x"]}
          />
        </div>
      </div>
    );
  };


export default Task;