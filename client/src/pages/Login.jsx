import React, { useState, useContext } from 'react';
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
        <div className="loginpage flex w-[100vw] h-[90vh] justify-center items-center flex-col">
            <div className="loginpageup">
                <h1 className="text-2xl text-antiquewhite pb-8">Sign In</h1>
            </div>
            <div className="loginpagedown">
                <form onSubmit={handleLogin} className="flex flex-col items-center space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        className="w-[30vw] p-2 bg-antiquewhite rounded"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        className="w-[30vw] p-2 bg-antiquewhite rounded"
                    />
                    <button type="submit" className="createaccountbutton w-[4rem] p-2 bg-green-500 text-white rounded">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
