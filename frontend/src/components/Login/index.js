import React, { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
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
