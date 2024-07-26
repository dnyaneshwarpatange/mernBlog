import React, { useState } from 'react';
import { Input, Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
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
          "Content-Type": "application/json"
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
        console.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginpage">
      <div className="loginpageup">
        <h1>Create Account</h1>
      </div>
      <div className="loginpagedown">
        <Stack spacing={3} as="form" onSubmit={handleSubmit}>
          <Input
            name="username"
            value={user.username}
            onChange={handleInput}
            placeholder='Enter your username'
            size='sm'
          />
          <Input
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder='Enter your email'
            size='sm'
          />
          <Input
            name="password"
            type='password'
            value={user.password}
            onChange={handleInput}
            placeholder='Enter your password'
            size='sm'
          />
          <Button className="createaccountbutton" type="submit" colorScheme='green'>Create</Button>
        </Stack>
      </div>
    </div>
  );
}

export default Register;
