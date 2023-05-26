import React, { useState, useEffect, useRef, Component } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.53);
`;

const WhiteBox = styled.div`
  position: relative;
  width: 224px;
  height: 157px;
  left: 83px;
  top: 288px;
  background: #ffffff;
  border-radius: 10px;
`;

const TextBox = styled.div`
  position: relative;
  width: 186px;
  height: 70px;
  left: 10%;
  top: 1%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;

const Button = styled.button`
  position: relative;
  width: 78px;
  height: 27px;
  left: 35%;
  top: 10%;
  background: #902443;
  border-radius: 10px;
`;

const ButtonText = styled.div`
  position: relative;
  width: 78px;
  height: 27px;
  right: 10%;
  top: 5%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`;

const Alert = () => {
  const navigate = useNavigate();

  const gogo = () => {
    navigate("/main");
  };

  return (
    <Background>
      <WhiteBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/Rectangle 9.png`}
          alt="logo"
          width="43px"
        />
        <TextBox>
          등록되지 않은 번호/이름입니다.
          <br />
          <br />
          번호와 이름을
          <br />
          다시 한번 확인해주세요!
        </TextBox>
        <Button onClick={gogo}>
          <ButtonText>확인</ButtonText>
        </Button>
      </WhiteBox>
    </Background>
  );
};

export default Alert;
