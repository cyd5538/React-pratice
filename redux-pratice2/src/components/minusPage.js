import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { divisionQty, minusQty } from "../reducers/count/action";

const MinusPage = (props) => {
  const {
    qty,
    onMinus,
    onDivision
  } = props;

  return (
    <>
      <div>
        <Link to="/">메인 페이지로</Link>
      </div>
      <div>
        <Link to="/addpage">더하기 페이지로</Link>
      </div>
      <div style={{ background: "green" }}>더하기페이지</div>
      <div>
        {`qty값은??? ===> ${qty}`}
      </div>
      <button onClick={onMinus}>
        뺴기
      </button>
      <button onClick={onDivision}>
        뺴기
      </button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    onMinus : () => dispatch(minusQty()),
    onDivision : () => dispatch(divisionQty())
  }
}
const mapStateToProps = (state) => {
  return {
    qty: state.countReducer.qty
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinusPage);
