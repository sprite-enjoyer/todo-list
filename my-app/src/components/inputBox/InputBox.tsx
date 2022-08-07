import React, { useState } from "react";
import { handleEnterProps } from "../../global/types";
import styles from "./input-box.module.scss";

export const InputBox = ({ handleEnter }: handleEnterProps) => {
  const [text, setText] = useState("");

  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      handleEnter(text.slice(0, text.length - 1));
      event.target.value = "";
      setText("");
      event.preventDefault();
    }
  };

  return (
    <div className={`${styles["input-box"]}`}>
      <textarea
        placeholder="What do you want to do?"
        autoFocus={true}
        required={true}
        className={`${styles["input-box__input-field"]}`}
        onChange={e => setText(e.target.value)}
        onKeyUp={handleKeyUp} />
    </div>
  );
};

export default InputBox;