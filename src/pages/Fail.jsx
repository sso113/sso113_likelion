import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #f5f5f5;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 327px;
  height: 596px;
  top: 10%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: relative;
  width: 100px;
  top: 40px;
  left: 25px;
  height: 43px;
  margin: auto;
`;

const Text = styled.div`
  position: relative;
  width: 260px;
  height: 362px;
  left: 45px;
  top: 80px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Fail = () => {
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
        <Text>
          안녕하세요. 동덕여대 멋쟁이사자처럼
          <br />
          운영진입니다.
          <br />
          <br />
          우선 동덕여대 멋쟁이사자처럼 11기
          <br />
          아기사자 모집에 관심을 가지고 지원해
          <br />
          주신 점, 매우 감사 드립니다.
          <br />
          지원자님의 면접을 바탕으로 운영진들의
          <br />
          의견을 종합하여 평가하였으나,
          <br />
          제한된 선발 인원으로 인해 긍정적인 회신
          <br />을 드리지 못하게 되었습니다.
          <br />
          <br />
          아쉽지만 지원자님께서 보여주신
          <br />
          관심과 열정에 다시 한 번 감사드리며,
          <br />
          다음 기회에 더 좋은 인연으로
          <br />
          함께 할 수 있기를 진심으로 바라겠습니다.
          <br />
          <br />
          감사합니다.
          <br />
          <br />
          동덕여대 멋쟁이사자처럼 운영진 드림.
        </Text>
      </WhiteBox>
    </Background>
  );
};
export default Fail;
