import { combineReducers } from "redux";
import countReducer from "./count/reducer";

// combineReducers 여러개의 리듀서를 합쳐주는 역할을 합니다.
const reducers = combineReducers({
    countReducer
});

export default reducers;
