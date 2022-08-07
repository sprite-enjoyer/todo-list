import styles from "./category.module.scss";
import { categoryProps } from "../../global/types";
import { useState } from "react";
import Button from "../Button/Button";
const Category = ({ category, onClickHandler, deleteCategory, renderX }: categoryProps) => {
  const [deleteRenderStatus, setDeleteRenderStatus] = useState(false)

  const onMouseOver = () => setDeleteRenderStatus(renderX);
  const onMouseOut = () => setDeleteRenderStatus(false);

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`${styles["main"]}`}>

      <div className={`${styles["main__content-wrapper"]}`}>
        <span
          className={`${styles["main__category-txt".concat("__".concat(category.color))]}`}
          onClick={() => onClickHandler(category)} >
          {`${category.categoryName}`}
        </span>
        {deleteRenderStatus &&
          <div className={`${styles["main__content-wrapper__btn-wrapper"]}`}>
            <Button
              btnState={true}
              onClickHandler={() => deleteCategory(category)}
              texts={["x", "x"]}
              bigSize={false}
            />
          </div>}
      </div>
    </div>
  );
};



export default Category;