import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #fae4ea;
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
  width: 58px;
  height: 58px;
  left: 40%;
  padding-top: 15%;
  top: 0.1px;
  background: url(ddwu_logo.png);
`;

const TitleBox = styled.div`
  position: relative;
  width: 195px;
  height: 80px;
  left: 20%;
  padding-top: 5%;
  top: 0.05px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #000000;
`;

const SubtextBox = styled.div`
  position: relative;
  width: 203px;
  height: 23px;
  left: 33%;
  top: 3%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #0075ff;
`;

const TextBox = styled.div`
  position: relative;
  width: 314px;
  height: 259px;
  left: 3%;
  top: 6%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

const MainImage = styled.div`
  position: relative;
  width: 370;
  height: 250;
  margin: 0 auto;
  right: 10%;
  bottom: 15%;
`;

const Pass = () => {
  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.png`}
            alt="logo"
            width="55px"
            resizemode="cover"
          />
        </Logo>
        <TitleBox>
          합격을
          <br />
          축하합니다!
        </TitleBox>
        <SubtextBox>어쩌고 님은</SubtextBox>
        <TextBox>
          동덕여대 멋사 11기에 최종합격 하셨습니다!🎉
          <br />
          긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br />
          자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          https://discord.gg/BSHH7mck
          <br />
          <br />
          3월 17일까지 디스코드에 들어와주세요!
          <br />
          <br />
          3/26(일) 동덕 멋사 OT에서 만나요~
          <br />
          *장소 추후 안내 예정
        </TextBox>
        <MainImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/envelope.png`}
            alt="logo"
            width="395"
            height="250"
          />
        </MainImage>
      </WhiteBox>
    </Background>
  );
};

export default Pass;
