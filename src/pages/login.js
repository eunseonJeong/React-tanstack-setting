import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Login = () => {
  const [user, setUser] = React.useState({
    id: "",
    password: "",
    passwordCheck: "",
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setUser((pre) => ({ ...pre, [name]: value }));
  };

  const { mutate: register, status } = useMutation({
    mutationFn: async ({ passwordCheck, ...user }) => {
      const { data } = await axios.post("http://3.38.191.164/login", user);
      // 토큰을 어떻게 할지
      const token = data.token;
      const decodeToken = jwt_decode(token);
      setCookie("token", decodeToken);
    },
  });

  console.log(status);

  return (
    <div>
      <input type="text" name="id" value={user.id} onChange={changeHandler} />
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="passwordCheck"
        value={user.passwordCheck}
        onChange={changeHandler}
      />
      <button
        onClick={() => {
          register(user);
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;