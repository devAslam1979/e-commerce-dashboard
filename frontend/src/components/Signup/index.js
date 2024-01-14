import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const isLogedIn=localStorage.getItem('user')
  useEffect(()=>{
    if(isLogedIn){
      navigate('/')
    }
  })

  
  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    navigate('/')
  };
  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <form
        className="signup-form"
        method="POST"
        onSubmit={(e) => handleSignup(e)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={(e) =>
              setUserInfo((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
        </div>
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
        <button type="submit" className="signup-btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
