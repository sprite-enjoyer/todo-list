
export type categoryProps = {
  category: category;
  onClickHandler: (cat: category) => void | undefined;
  deleteCategory: (cat: category) => void;
  renderX: boolean;
};

export type categoryListProps = {
  categoryList: Array<category>;
  onClickHandler: (cat: category) => void | undefined;
  addCategory: (cat: category) => void;
  deleteCategory: (cat: category) => void;

};

export type category = {
  color: string;
  categoryName: string;
};

export type TaskProps = {
  description: string;
  taskCategory: category;
  onCheckHandler: (desc: string, cat: category) => void;
  checked: boolean
  deleteTask: (desc: string, taskCategory: category) => void;
};

export type TaskType = {
  description: string;
  taskCategory: category;
  checked: boolean;
};

export type TaskListProps = {
  taskList: Array<TaskType>;
  onCheckHandler: (desc: string, cat: category) => void;
  deleteTask: (desc: string, taskCategory: category) => void;
};

export type ButtonProps = {
  btnState: boolean;
  onClickHandler: () => void;
  texts: [string, string];
  bigSize: boolean;
};

export type categoryChooserProps = {
  categoryList: Array<category>;
  afterCategoryIsChosenBehaviour: (categoryName: string) => void;
  deleteCategory: (cat: category) => void;

};

export type handleEnterProps = {
  handleEnter: (text: string) => void;
};

export type AddTaskProps = {
  categoryList: Array<category>;
  sendToParent: (description: string) => void;
  whatToRender: addTaskComponents;
  setAddTaskRenderState: (arg: addTaskComponents) => void;
  addTask: (categoryName: string) => void;
  deleteCategory: (cat: category) => void;
};

export enum addTaskComponents {
  BUTTON = "BUTTON",
  INPUTBOX = "INPUTBOX",
  CATEGORYCHOOSER = "CATEGORYCHOOSER"
};

export enum colors {
  RED = "red",
  GREEN = "green2",
  GREEN2 = "green3",
  NICEBEIGE = "nice-beige",
  PINK = "pink",
  GOODPINK = "good-pink",
  PURPLE = "purple",
  BLUE = "blue",
  STRANGEBLUE = "strange-blue",
  CYAN = "cyan",
  YELLOW = "yellow"

};