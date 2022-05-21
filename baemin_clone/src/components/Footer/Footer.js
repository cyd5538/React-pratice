import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp, IoLogoInstagram } from "react-icons/io";
const FooterStyle = styled.div`
  background-color: #fafafa;
  width: 100%;
  margin: auto;
  height: 350px;
  margin-top: 200px;
  display: flex;
  button {
    display: none;
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
  }
  .bold {
    font-weight: bold;
  }

  .left {
    width: 30%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-size: 2rem;
    font-weight: bold;
  }
  .right {
    margin-top: 100px;
    width: 70%;
    display: flex;
    flex-direction: column;
    font-family: "BMJUA";
    .menu {
      font-size: 1rem;
      display: flex;
      p {
        margin-right: 2rem;
      }
    }

    .sub {
      margin-top: 20px;
      font-size: 0.9rem;
      display: flex;
      flex-wrap: wrap;
      font-family: "BMJUA";
      p {
        margin-right: 2rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    .left{
        width: 100%;
        justify-content: flex-start;
        margin-left: 40px;
    }
    button {
      display: inline-block;
    }
    .right {
      width: 100%;
      margin-left: 40px;
      flex-direction: column-reverse;
      margin-top: 10px;
      .menu {
        margin-top: 30px;
        flex-wrap: wrap;
        p{
            margin-top: 5px;
        }
      }
      .sub{
          width: 70%;
          p{
              margin-top: 5px;
          }
      }
      .a{
        display:none;
      }
    }
  }
`;

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <FooterStyle>
      <div className="left">
        <p>
          배민칰문방구
          <button onClick={() => setOpen(!open)}>
             {open ? <IoIosArrowUp />: <IoIosArrowDown />}
          </button>
        </p>
      </div>
      <div className="right">
        <div className="menu">
          <p>About</p>
          <p>공지사항</p>
          <p>이용약관</p>
          <p className="bold">개인정보처리방침</p>
          <p>대량구메/제휴안네</p>
          <p>
            <IoLogoInstagram />
            baemin_Store
          </p>
        </div>
        {open ? (
          (
            <div className="sub">
              <p>상호 : (주)우아한형제들</p>
              <p>대표 : 김범준</p>
              <p>사업자등록번호 : 120-87-65763</p>
              <p>통신판매업신고번호 : 2021-서울송파-0515</p>
              <p>사업자정보확인</p>
              <p>대표번호 : 1670-9902</p>
              <p>이메일 : marketing_store@woowahan.com</p>
              <p>사업자등록번호 : 120-87-65763</p>
              <p>주소 : 서울특별시 송파구 위례성대로 2 장은빌딩</p>
              <p>호스팅제공:(주)우아한형제들</p>
              <p>© Woowa Brothers Corp. All rights reserved</p>
            </div>
          )
        ) : (
          (
            <div className="sub a">
              <p>상호 : (주)우아한형제들</p>
              <p>대표 : 김범준</p>
              <p>사업자등록번호 : 120-87-65763</p>
              <p>통신판매업신고번호 : 2021-서울송파-0515</p>
              <p>사업자정보확인</p>
              <p>대표번호 : 1670-9902</p>
              <p>이메일 : marketing_store@woowahan.com</p>
              <p>사업자등록번호 : 120-87-65763</p>
              <p>주소 : 서울특별시 송파구 위례성대로 2 장은빌딩</p>
              <p>호스팅제공:(주)우아한형제들</p>
              <p>© Woowa Brothers Corp. All rights reserved</p>
            </div>
          )
        )}
      </div>
    </FooterStyle>
  );
};

export default Footer;
