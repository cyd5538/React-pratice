import React from "react";
import { Link } from "react-router-dom";
import { addQty, multipleQty } from "../reducers/count/action";
import { connect } from "react-redux";

const AddPage = (props) => {

  
  const {
    qty,
    onAddQty,
    onMultiple
  } = props;

  return (
    <>
      <div>
        <Link to="/">메인 페이지로</Link>
      </div>
      <div>
        <Link to="/minuspage">빼기 페이지로</Link>
      </div>
      <div style={{ background: "yellow" }}>더하기페이지</div>
      <div>
        {`qty값은??? ===> ${qty}`}
      </div>
      <button onClick={onAddQty}>
        더하기
      </button>
      <button onClick={onMultiple}>
        곱하기
      </button>
    </>
  );
};

// 이함수는 액션을 디스패치하는건데 한마디로 명령을 내리는겁니다.

const mapDispatchToProps = (dispatch) => {
  return{
    // onAddQty라는 함수를 구성하여 우리가 만든 action함수를 전달합니다
    // 중요한건 dispatch에 우리가 만든 action함수를 실행시켜 type를 전달해줘야합니다.
    // 이렇게 구성하면 이함수를 props에서 확인할 수 있습니다.
    onAddQty : () => dispatch(addQty()),
    onMultiple : () => dispatch(multipleQty())
  }
}


// 여기서 보면 state를 주입할떄
const mapStateToProps = (state) => {
  return {
    // qty를 주입하고 그것은 countReducer에서 구성한 qty를 가져옵니다
    // 그래서 보면 state.countReducer.qty로 가져오는 것을 볼 수 있습니다.
    // 이렇게 주입되면 이 컴포넌트의 props에서 qty를 확인할 수 있습니다.
    qty: state.countReducer.qty
  }
}

// react-redux의 connect를 이용하여 AddPag컴포넌트에 연결합니다.
// mapStateToProps는 스토어의 전역상태를 컴포넌트에 주입해줍니다
// mapDispatchToProps 우리가 아까만든 action들을 dispatch(전달)해줄 함수를 구성합는 함수입니다.
export default connect(mapStateToProps, mapDispatchToProps) (AddPage);
