import styles from "./add-task.module.scss";
//@ts-ignore
import CategoryChooser from "../categoryChooser/CategoryChooser";
import InputBox from "../inputBox/InputBox";
import { useState } from "react";
import { AddTaskProps, category } from "../../global/types";
import { addTaskComponents } from "../../global/types";

const AddTask =
  ({ categoryList, sendToParent, whatToRender, setAddTaskRenderState, addTask, deleteCategory }: AddTaskProps) => {

    const enterHandler = (description: string) => {
      setAddTaskRenderState(addTaskComponents.CATEGORYCHOOSER);
      sendToParent(description);
    };

    const afterCategoryIsChosenBehaviour = (categoryName: string) => {
      setAddTaskRenderState(addTaskComponents.BUTTON);
      addTask(categoryName);
    };

    return (
      <div className={`${styles["main"]}`}>
        {whatToRender === addTaskComponents.INPUTBOX && <InputBox handleEnter={enterHandler} />}
        <div className={`${styles["main__category-chooser"]}`}>
          {whatToRender === addTaskComponents.CATEGORYCHOOSER &&
            <CategoryChooser
              deleteCategory={deleteCategory}
              categoryList={categoryList}
              afterCategoryIsChosenBehaviour={afterCategoryIsChosenBehaviour} />
          }
        </div>

      </div>
    );
  };

export default AddTask;