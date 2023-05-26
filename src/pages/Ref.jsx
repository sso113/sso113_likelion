import React, { useState, useEffect, useRef } from "react";

function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    inputElem.current.focus(); // inputElem 현재 상태에 focus하는 함수
  };

  return (
    <>
      <input ref={inputElem} type="name" />
    </>
  );
}

export default TextInputWithFocusButton;
