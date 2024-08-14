import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        alert("Registration Successful");
        setUser({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registerpage flex w-[100vw] h-[90vh] justify-center items-center flex-col">
      <div className="registerpageup">
        <h1 className="text-2xl text-antiquewhite pb-8">Create Account</h1>
      </div>
      <div className="registerpagedown">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <input
            name="username"
            value={user.username}
            onChange={handleInput}
            placeholder="Enter your username"
            className="w-[30vw] p-2 bg-antiquewhite rounded"
          />
          <input
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Enter your email"
            className="w-[30vw] p-2 bg-antiquewhite rounded"
          />
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleInput}
            placeholder="Enter your password"
            className="w-[30vw] p-2 bg-antiquewhite rounded"
          />
          <button
            type="submit"
            className="createaccountbutton w-[4rem] p-2 bg-green-500 text-white rounded"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
