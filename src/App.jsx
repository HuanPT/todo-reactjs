import React, { useState } from "react";
import AuthForm from "./Component/Form/AuthForm";
import TodoApp from "./Component/TodoApp/TodoApp";
import AppContext from "../AppContext";
// Custom hook - các hook tùy chỉnh do người dùng tự định nghĩa
// cho phép tái sử dụng logic
// tên: Bắt đầu bằng use
// trong custom hook thì sử dụng các hook khác như là (useState, useEffect)

// const AppContext = createContext(
//   // Default value
//   {}
// );
// AppContext  => Provider/Consumer

// <AppContext.Provideer> => Bọc các thành phần con và cung cấp giá trị</AppContext.Provideer>
// <AppContext.Consumer>Các component con sử dụng để lấy dữ liệu</AppContext.Consumer>
// useContext()=> sử dụng cho func component

// 2 Bọc các thành phần con trong provider
function App() {
  const [credential, setCredential] = useState(() => {
    const token = localStorage.getItem("todoapp-token");
    const user = localStorage.getItem("todoapp-userinfo");

    return { user: user ? JSON.parse(user) : null, token };
  });

  const onLoggedIn = (user, token) => {
    localStorage.setItem("todoapp-token", token);
    localStorage.setItem("todoapp-userinfo", JSON.stringify(user));
    setCredential({ user, token });
  };

  // if (!credential.user) {
  //   return <AuthForm onLoggedIn={onLoggedIn} />;
  // }

  // return <TodoApp credential={credential} setCredential={setCredential} />;

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          credential,
          setCredential,
          onLoggedIn,
        }}
      >
        {!credential.user ? <AuthForm /> : <TodoApp />}
      </AppContext.Provider>
    </div>
  );
}

export default App;

// Tối ưu hóa hiệu năng
// useCallback
// useMemo
// useTransition

// useReducer() => Kết hợp với context
// useRef() => chỉ để ghi nhớ giá trị và không render lại

// Nâng cao
// HOC - Higher-Order Component
