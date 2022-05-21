import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menu } from "./menu";
import { RiHeadphoneFill } from "react-icons/ri";

const SideHeader = styled.div`
  .aaa {
    font-size: 2rem;
  }
`;

const HeaderRightStyle = styled.div`
  .HeaderRightStyle {
    transition: all ease-in 0.5s;
    padding: 1rem;
    width: 400px;
    height: 100vh;
    position: absolute;
    right: 0;
    background-color: white;
    z-index: 11;
    
  }

  .modal_container{
    width: 100%;
    height: 100vh;
    transition: all ease-in 0.1s;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
  }

  .scroll{
    overflow-y : scroll;
    height: 70vh;
  }

  .scroll::-webkit-scrollbar {
    width: 4px;  /* 스크롤바의 너비 */
}

  .scroll::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바의 길이 */
      background: #333; /* 스크롤바의 색상 */
      
      border-radius: 10px;
  }

  .scroll::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
  }
  
  .Plus{
    position: absolute;
    right: -420px;
    opacity: 1;
  }

  .none{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    transition: all ease-in 0.5s;
  }


  h1 {
    margin-top: 40px;
    margin-left: 20px;
    font-size: 2rem;
  }

  li {
    margin-left: 10px;
    font-size: 1.1rem;
  }
  .under_title {
    margin-left: 20px;
    font-size: 1.2rem;
    color: skyblue;
    margin-top: 3rem;
  }
  .all {
    margin-left: 10px;
    margin-top: 1.3rem;
  }
  .all li {
    margin-left: 10px;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .category {
    margin-left: 10px;
    margin-top: 1.3rem;
   
  }
  .category li {
    margin-left: 10px;
    margin-top: 1rem;
    font-size: 1.5rem;
    
  }

  .inquiry {
    margin-left: 10px;
    margin-top: 1rem;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
  }

  li:hover {
    color: rgb(129, 121, 121);
  }

  .Login {
    width: 80px;
    height: 30px;
    line-height: 25px;
    border: 3px solid #000;
    border-radius: 15px;
    text-align: center;
    font-size: 1rem;
  }
  @media screen and (max-width: 767px) {
    width: 100vw;
    right: -30px;
  }
  @media screen and (max-width: 360px) {
    .HeaderRightStyle{
      padding: 2rem;
    }
    .Login {
      width: 50px;
    }
  }
`;

const HeaderRight = ({ setClick, click }) => {
  return (
    <SideHeader>
      {click ? (
        <HeaderRightStyle>
          <div className="modal_container" >
          <div className="HeaderRightStyle">
            <h1>
              앗!
              <br />
              로그인이 필요해요
            </h1>
            <div className="scroll">
            <div className="under_title">테마</div>
            <ul className="all">
              <li>
                <Link to="/all">전체보기</Link>
              </li>
              <li>
                <Link to="/all1">누가 스뎅으로 쟁반을 만들어요?</Link>
              </li>
              <li>
                <Link to="/all2">묘하게 유용하네?</Link>
              </li>
              <li>
                <Link to="/all3">우리가 돈 나가는 일에 대처하는 <br/> 자세</Link>
              </li>
            </ul>

            <div className="under_title">카테고리</div>
            <ul className="category">
              {menu.map((name) => (
                <li key={name.link}>
                  <Link to={name.link}>{name.name} </Link>
                </li>
              ))}
            </ul>
            </div>
            <ul className="inquiry">
              <li>
                <Link to="/inquiry">
                  <RiHeadphoneFill /> 1:1 문의
                </Link>
              </li>
              <li>
                <Link to="/email">이메일 문의</Link>
              </li>
              <li className="Login">
                <Link to="/login">로그인</Link>
              </li>
            </ul>
            
          </div>
          </div>
        </HeaderRightStyle>
      ) : (
        <HeaderRightStyle>
          <div className="none" >
          <div className="HeaderRightStyle Plus">
            <h1>
              앗!
              <br />
              로그인이 필요해요
            </h1>

            <div className="under_title">테마</div>
            <ul className="all">
              <li>
                <Link to="/all">전체보기</Link>
              </li>
              <li>
                <Link to="/all1">누가 스뎅으로 쟁반을 만들어요?</Link>
              </li>
              <li>
                <Link to="/all2">묘하게 유용하네?</Link>
              </li>
              <li>
                <Link to="/all3">우리가 돈 나가는 일에 대처하는 자세</Link>
              </li>
            </ul>

            <div className="under_title">카테고리</div>
            <ul className="category">
              {menu.map((name) => (
                <li key={name.link}>
                  <Link to={name.link}>{name.name} </Link>
                </li>
              ))}
            </ul>

            <ul className="inquiry">
              <li>
                <Link to="/inquiry">
                  <RiHeadphoneFill /> 1:1 문의
                </Link>
              </li>
              <li>
                <Link to="/email">이메일 문의</Link>
              </li>
              <li className="Login">
                <Link to="/login">로그인</Link>
              </li>
            </ul>
          </div>
          </div>
        </HeaderRightStyle>
      )}
    </SideHeader>
  );
};

export default HeaderRight;
