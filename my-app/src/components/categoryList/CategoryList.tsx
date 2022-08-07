import { v4 } from 'uuid';
import styles from "./category-list.module.scss";
import Category from "../category/Category";
import { categoryListProps } from "../../global/types";
import { useState } from 'react';
import { colors } from '../../global/types';
import Button from '../Button/Button';

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

const CategoryList =
  ({ categoryList, onClickHandler, addCategory, deleteCategory }: categoryListProps) => {

    const [btnState, setBtnState] = useState(false);

    const onKeyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        addCategory({
          categoryName: event.target.value,
          color: randomEnum(colors)
        });
        setBtnState(false);
      }
    };

    const btnClickHandler = () => {
      setBtnState(btnState ? false : true);
    };

    return (
      <div className={`${styles["main"]}`} >
        <div className={`${styles["main__title"]}`}>
          <span className={`${styles["main__title__txt"]}`}>
            Categories
          </span>
          <Button
            bigSize={false}
            texts={["+", "x"]}
            onClickHandler={btnClickHandler}
            btnState={!btnState} />
        </div>
        {categoryList.map(category =>
          <div
            className={`${styles["main__category-wrapper"]}`}
            key={v4()}>
            <Category
              renderX={true}
              deleteCategory={deleteCategory}
              category={category}
              onClickHandler={onClickHandler} />
          </div>)}
        {btnState &&
          <input
            className={`${styles["main__input-area"]}`}
            autoFocus={true}
            onKeyDown={onKeyDownHandler} />}
      </div >
    );

  };


export default CategoryList;