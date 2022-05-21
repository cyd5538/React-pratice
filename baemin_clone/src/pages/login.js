import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
const LoginStyle = styled.div`
  margin-top 150px;
  display:flex;
  justify-content: center;
  .container{
    width: 500px;
    
    h1{
      text-align:center;
    }
    .text{
      margin-top: 50px;
      background-color: rgb(249, 249, 249);
      height: 100px;
      display:flex;
      align-items: center;
      div:first-child{
        width: 80%;
        padding-right: 1rem;
        padding-left: 1rem;
      }
      div:last-child{
        width: 20%;
        padding-right: 1rem;
        padding-left: 1rem;
      }
    }
    form{
      display:flex;
      flex-direction: column;
      input,
      button{
        height: 60px;
        margin-top: 20px;
        ::placeholder{
          font-size:1.2rem;
          padding-left: 1rem;
        }
      }
      div{
        display:flex;
        align-items: center;
        input{
          margin:0;
          margin-right: 10px;
          width: 20px;
        }
      }
      button{
        background-color: rgb(238, 238, 238);
        border: none;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
      }
    }
    .bottom{
      display:flex;
      margin-top: 50px;
      justify-content: center;
      div{
        margin-right: 10px;
        font-size: 1rem;
      }
      div:last-child{
        margin-right: 0;
      }
    }
  }
  .bottom_bottom{
    margin-top: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
`;

function Login() {
  return (
    <LoginStyle>
      <div className="container">
        <h1>로그인</h1>
        <div>
          <div className="text">
            <div>
              2022년 3월 14일 이전에 가입하셨다면 <br />
              여기를 눌러 비밀번호를 다시 설정해주세요.
            </div>
            <div>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className="icon"></div>
        </div>
        <form>
          <input type="text" placeholder="아이디" />
          <input type="text" placeholder="비밀번호" />
          <div>
            <input type="checkbox" />
            <span>아이디 저장</span>
          </div>
          <button type="submit">로그인</button>
        </form>
        <div className="bottom">
          <div>회원가입 |</div>
          <div>아이디 찾기 |</div>
          <div>비밀번호 찾기</div>
        </div>
        <div className="bottom_bottom">
          <span>비회원 주문조희</span>
          <span>
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </LoginStyle>
  );
}

export default Login;
