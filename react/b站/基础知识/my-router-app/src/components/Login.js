import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getRoute } from './../store/userinfo';
import { useDispatch } from "react-redux";
export default function Login() {
  let username = "";
  let password = "";
  const dispatch = useDispatch();
  const nav = useNavigate();
  function sendLogin() {
    axios
      .post("http://localhost:8000/loginIn", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.mes === "登录成功") {
          localStorage.setItem("id", res.data.id);

          dispatch(getRoute(res.data.id));

          nav("/page2");
        } else {
          alert("登录失败");
        }
      });
  }
  return (
    <div>
      <label>用户名</label>
      <input
        onInput={(e) => {
          username = e.target.value;
        }}
        type="text"
      />
      <label>密码</label>
      <input
        onInput={(e) => {
          password = e.target.value;
        }}
        type="text"
      />
      <button onClick={sendLogin}>登录</button>
    </div>
  );
}
