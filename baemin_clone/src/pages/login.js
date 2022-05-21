import React from "react";
import styled from 'styled-components';

const LoginStyle = styled.div`
  margin-top 150px;
  text-align: center;
`

function Login() {
  return (
    <LoginStyle>
      <h1>로그인</h1>
      <div>
        <div className="text">
          2022년 3월 14일 이전에 가입하셨다면 여기를 눌러 비밀번호를 다시
          설정해주세요.
        </div>
        <div className="icon"></div>
      </div>
      <form>
        <input type="text" placeholder="아이디"/>
        <input type="text" placeholder="비밀번호"/>
        <input type="checkbox" />
        <button type="submit">로그인</button>
      </form>
      <div>
        <div>회원가입 |</div>
        <div>아이디 찾기 |</div>
        <div>비밀번호 찾기</div>
      </div>
    </LoginStyle>
  );
}

export default Login;
