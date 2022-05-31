/* eslint-disable no-unreachable */
import { ADD_QTY, MINUS_QTY, MULTIPLE_QTY, DIVISION_QTY } from "./action"

const InitialState = {
    qty: 0
}



// 리듀서는 state와 action을 변화시키는데요...
const countReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_QTY:
            return{
                ...state,
                qty: state.qty + 1
            }
            break;
        case MINUS_QTY:
            return{
                ...state,
                qty: state.qty - 1
            }
            break;
        case MULTIPLE_QTY:
            return{
                ...state,
                qty: state.qty * 2
            }
            break;
        case DIVISION_QTY:
            return{
                ...state,
                qty: state.qty / 2
            }

        // 스토어의 state를 반환합니다.
        default:
            return state;

    }
}

export default countReducer;