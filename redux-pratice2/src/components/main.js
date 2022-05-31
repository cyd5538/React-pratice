import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
const Main = (props) => {
  const {
    qty
  } = props;
  return (
    <>
    <div>
      <Link to="/addpage">더하기 페이지로</Link>
    </div>
    <div>
      <Link to="/minuspage">빼기 페이지로</Link>
    </div>
    <div style={{background : 'skyblue'}}>
      메인페이지
    </div>
    <div>
        {`qty값은??? ===> ${qty}`}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    qty: state.countReducer.qty
  }
}

export default connect(mapStateToProps, null)(Main)
