import { useState } from "react";
import { signup, login, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const currentUser = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;


  const provider = new GoogleAuthProvider();
  

  const handleSignup = async () => {

    try {
      await signup(email, password);
      alert("회원가입이 완료되었습니다 로그인해주세요.");
      setEmail("");
      setPassword("");
    } catch {
      if (email === "") {
        alert("이메일을 입력하세요");
      } else if (password === "") {
        alert("패스워드를 입력하세요");
      } else if (user !== null) {
        const emailCheck = user.email;
        if(email === emailCheck){
          alert("이미 사용중인 이메일입니다.")
        }
      }else{
        alert('이메일과 비밀번호 양식을 확인해 주세요')
      }
    }
  };
  
  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch {
      if (email === "") {
        alert("이메일을 입력하세요");
      } else if (password === "") {
        alert("패스워드를 입력하세요");
      } else {
        alert("비밀번호 아이디를 확인해주세요");
      }
    }
  };

  //구글로그인
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      navigate("/home");
    });
  };

  return (
    <div className="App">
      <div id="title">Login</div>
      <div id="fields">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login">
        <button id="login" onClick={handleLogin}>
          로그인
        </button>
      </div>

      <div className="join">
        <button id="join" onClick={handleSignup}>
          Sign up
        </button>
      </div>
      <div className="login">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
      <div className="show">ID : {currentUser?.email}</div>
    </div>
  );
};

export default Login;
