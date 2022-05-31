import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";


// 우리가 아까 구성한 리듀서들을 스토어에 세팅합니다.
const store = createStore(reducers);

// 그다음 루트 컴포넌트를 providerfh store에 있는 데이터들을 주입
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
