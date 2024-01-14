import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const isLogedIn = localStorage.getItem("user");
  useEffect(() => {
    if (isLogedIn) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.name) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }else{
        //add toast notification
        console.log("Invalid credentials!",data.error)
    }
  };
  return (
    <div className="signup-container">
      <h1>Login</h1>
      <form
        className="login-form"
        method="POST"
        onSubmit={(e) => handleLogin(e)}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
