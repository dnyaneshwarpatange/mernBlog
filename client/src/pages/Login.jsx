import React, { useState, useContext } from 'react';
import { Input, Stack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx'; // Ensure the path is correct

const Login = () => {
    const { login } = useContext(AuthContext);
    const [user, setUser] = useState({
        email: "",
        password: ""
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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                login();
                alert("Login Successful");
                setUser({
                    email: "",
                    password: "",
                });
                navigate("/home");
            } else {
                alert("Invalid username or Password");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="loginpage">
            <div className="loginpageup">
                <h1>Sign In</h1>
            </div>
            <div className="loginpagedown">
                <Stack spacing={3} as="form" onSubmit={handleLogin}>
                    <Input
                        placeholder='Enter your email'
                        size='sm'
                        name='email'
                        value={user.email}
                        onChange={handleInput}
                    />
                    <Input
                        type='password'
                        placeholder='Enter your password'
                        size='sm'
                        name='password'
                        value={user.password}
                        onChange={handleInput}
                    />
                    <Button type='submit' className="createaccountbutton" colorScheme='green'>Sign In</Button>
                </Stack>
            </div>
        </div>
    );
};

export default Login;
