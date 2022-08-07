import { useState } from 'react';
import CategoryList from './components/categoryList/CategoryList';
import "./global/global.scss";
import { addTaskComponents, category, TaskType } from './global/types';
import Button from './components/Button/Button';
import TaskList from './components/taskList/TaskList';
import AddTask from './components/addTask/AddTask';

function App() {

  const [categories, setCategories]: [Array<category>, any] = useState([]);
  const [tasks, setTasks]: [Array<TaskType>, any] = useState([]);
  const [addTaskRenderState, setAddTaskRenderState] = useState(addTaskComponents.BUTTON);
  const [taskDescription, setTaskDescription] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [filteredTasks, setFilteredTasks]: [Array<TaskType>, any] = useState(tasks);
  const [filterCategory, setFilterCategory] = useState("")


  const addTask = (categoryName: string) => {
    const tempTasks = [...tasks];
    let newCategory: category = { color: "", categoryName: "" };
    const categoryColor = categories.find(category => category.categoryName === categoryName)?.color;
    if (typeof categoryColor !== "undefined") newCategory = { color: categoryColor, categoryName: categoryName };
    tempTasks.push(
      {
        taskCategory: newCategory,
        description: taskDescription,
        checked: false
      }
    );
    setTasks(tempTasks);
    setAddTaskRenderState(addTaskComponents.BUTTON);
    setButtonState(true);
  };

  const deleteTask = (desc: string, cat: category) => {
    let tempArr = [...tasks];
    let elementIndex = tempArr.findIndex(task => task.description === desc && task.taskCategory === cat);
    tempArr.splice(elementIndex, 1);
    setTasks(tempArr);
    console.log(tempArr);
  };

  const filterTasks = (cat: category) => {
    const tempArr = [...tasks];
    const filtered = tempArr.filter(x => x.taskCategory.categoryName === cat.categoryName);

    if (filterCategory !== cat.categoryName) {
      setFilterCategory("");
      setFilterCategory(cat.categoryName);
      setFilteredTasks(filtered);
    }
    if (filterCategory === cat.categoryName) {
      setFilterCategory("");
      setFilteredTasks("");
    }
  };

  const whenNotClicked = () => {
    setAddTaskRenderState(addTaskComponents.INPUTBOX);
    setButtonState(false);
  };

  const whenClicked = () => {
    setAddTaskRenderState(addTaskComponents.BUTTON);
    setButtonState(true);
  };

  const sendToParent = (description: string) => setTaskDescription(description);



  const onCheckHandler = (desc: string, cat: category) => {
    const tempTasks = [...tasks];
    const index = tempTasks.findIndex(x => x.description === desc && x.taskCategory === cat);
    tempTasks[index].checked = !tempTasks[index].checked;
    setTasks(tempTasks);
  };

  const addCategory = (cat: category) => {
    const tempCategories = [...categories];
    tempCategories.push(cat);
    setCategories(tempCategories);
  };

  const deleteCategory = (cat: category): void => {
    const elementIndex = categories.findIndex(element => element === cat);
    const tempArr = [...categories];
    tempArr.splice(elementIndex, 1);
    setCategories(tempArr);
  };

  return (
    <div className="App">

      <div className='App__btn-wrapper'>
        <Button
          bigSize={true}
          texts={["+  Add Task", "X  Cancel"]}
          btnState={buttonState}
          onClickHandler={buttonState ? whenNotClicked : whenClicked} />
      </div>

      <AddTask
        deleteCategory={deleteCategory}
        addTask={addTask}
        categoryList={categories}
        sendToParent={sendToParent}
        setAddTaskRenderState={setAddTaskRenderState}
        whatToRender={addTaskRenderState}
      />

      <div className="App__left-box">
        <CategoryList
          deleteCategory={deleteCategory}
          categoryList={categories}
          addCategory={addCategory}
          onClickHandler={filterTasks} />
      </div>
      <div className="App__right-box">
        <TaskList
          deleteTask={deleteTask}
          onCheckHandler={onCheckHandler}
          taskList={filterCategory !== "" ? filteredTasks : tasks} />
      </div>
    </div>
  );
}

export default App;
