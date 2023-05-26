import React, { useState, useEffect, useRef, Component } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

const Background = styled.div`
  position: relative;
  width: 390px;
  background: #902443;
  height: 844px;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 327px;
  height: 596px;
  left: 31px;
  top: 79px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: relative;
  width: 81px;
  height: 81px;
  left: 6%;
  top: 2%;
  margin: 0 auto;
  background: url(ddwu_logo 5.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const TitleBox = styled.div`
  position: relative;
  //   width: 251px;
  //   height: 48px;
  //   left: 69px;
  //   top: 283px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #5e162b;
`;

const LineImageone = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  left: 70px;
  top: 85px;
  border: 0px solid #dc7190;
  transform: rotate(180deg);
`;

const NameText = styled.div`
  position: relative;
  width: 74px;
  height: 26px;
  left: 20%;
  top: 10%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const NameBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  left: 20%;
  top: 11%;
  background: #cd99a6;
  border-radius: 50px;
`;

const LineImagetwo = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  left: 70px;
  top: 125px;
  border: 0px solid #dc7190;
  transform: rotate(180deg);
`;

const PhoneText = styled.div`
  position: relative;
  width: 74px;
  height: 26px;
  left: 25%;
  top: 17%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const PhoneBox = styled.input`
  position: absolute;
  width: 210px;
  height: 35px;
  left: 20%;
  top: 54%;
  background: #cd99a6;
  border-radius: 50px;
`;

const Button = styled.button`
  position: relative;
  width: 93px;
  height: 36px;
  top: 250px;
  margin: 0 auto;
  left: 35%;
  background: #902443;
  border-radius: 10px;
`;

const ButtonText = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;

const Text = styled.div`
  position: relative;
  width: 248px;
  height: 29px;
  margin: 0 auto;
  top: 15%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`;

const Main = () => {
  const navigate = useNavigate();

  const go = () => {
    navigate("/pass");

    const discriminate = () => {
      for (var i = 0; i < data.length; i++) {
        if ((i = 1)) {
          navigate("./pass", { state: data[i].name });
          break;
        } else if ((i = 0)) {
          navigate("/fail");
          break;
        } else if (i !== 0 && i !== 1) {
          alert(
            "등록되지 않은 성함/번호입니다. \n성함과 번호를 다시 한 번 확인해주세요!"
          );
          break;
        }
      }
    };
  };

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.png`}
            alt="logo"
            width="43px"
          />
        </Logo>
        <TitleBox>
          동덕여자대학교 멋쟁이사자처럼
          <br />
          11기 아기사자 합격자 발표
        </TitleBox>
        <LineImageone>
          <img
            src={`${process.env.PUBLIC_URL}/images/Line 1.png`}
            alt="logo"
            width="10px"
          />
        </LineImageone>
        <NameText>성함</NameText>
        <NameBox type="text"></NameBox>
        <LineImagetwo>
          <img
            src={`${process.env.PUBLIC_URL}/images/Line 2.png`}
            alt="logo"
            width="10px"
          />
        </LineImagetwo>
        <PhoneText>전화번호</PhoneText>
        <PhoneBox type="text"></PhoneBox>
        <Button onClick={go}>
          <ButtonText>입력</ButtonText>
        </Button>
      </WhiteBox>
      <Text>DONGDUK x LIKELION</Text>
    </Background>
  );
};

export default Main;
