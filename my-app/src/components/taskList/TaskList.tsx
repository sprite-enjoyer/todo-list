import { v4 } from "uuid";
import { TaskType, TaskListProps } from "../../global/types";
import Task from "../task/Task";
import styles from "./task-list.module.scss";

const TaskList = ({ taskList, onCheckHandler, deleteTask }: TaskListProps) => {

  return (
    <div className={`${styles["main"]}`} >
      {taskList.map(
        (T: TaskType) =>
          <Task
            deleteTask={deleteTask}
            description={T.description}
            taskCategory={T.taskCategory}
            onCheckHandler={onCheckHandler}
            checked={T.checked}
            key={v4()}
          />)}
    </div>
  );
};


export default TaskList;