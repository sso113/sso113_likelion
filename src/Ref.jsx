import React, { useState, useEffect, useRef } from "react";

function TextInputWithFocusButton(props) {
  const inInputElement = useRef(null);

  const onButtonClick = () => {
    inInputElement.current.focus();
  };

  return (
    <>
      <input ref={inInputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;
