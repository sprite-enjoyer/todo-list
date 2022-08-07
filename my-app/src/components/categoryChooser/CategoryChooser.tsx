import styles from "./category-chooser.module.scss";
import { categoryChooserProps, category } from "../../global/types";
import Category from "../category/Category";
import { v4 } from "uuid";
import { useState } from "react";

const CategoryChooser =
  ({
    categoryList,
    afterCategoryIsChosenBehaviour,
    deleteCategory }: categoryChooserProps) => {

    const [filteredCategories, setFilteredCategories]: [category[], any] = useState(categoryList);
    const [text, setText] = useState("");

    const onKeyDownHandler = (event: any) => {
      if (event.key === "Enter") afterCategoryIsChosenBehaviour(text);
      console.log(event.target.value);
      if (text === "" || text === undefined) setFilteredCategories(categoryList);
      else setFilteredCategories(categoryList.filter(category => category.categoryName.includes(text.toLowerCase())));
    };

    return (
      <div className={`${styles["main"]}`}>
        <div className={`${styles["main__txt-area-wrapper"]}`}>
          <input
            type="search"
            placeholder="Choose task category"
            onKeyDown={onKeyDownHandler}
            onChange={event => setText(event.target.value)}
            className={`${styles["main__txt-area-wrapper__txtArea"]}`}
          />
        </div>
        {filteredCategories.map((category: category) =>
          <Category
            renderX={true}
            deleteCategory={deleteCategory}
            category={category}
            key={v4()}
            onClickHandler={() => { afterCategoryIsChosenBehaviour(category.categoryName); }}
          />
        )}
      </div>
    );
  };


export default CategoryChooser;