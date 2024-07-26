import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx'; // Ensure the path is correct
import "../index.css"; // Assuming this file contains necessary styles

const Navbar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navleftt">
                <Button as={Link} to="/" colorScheme='teal'>Home</Button>
            </div>
            <div className="navright">
                {!isLoggedIn ? (
                    <>
                        <Button as={Link} to="/api/v1/login" colorScheme='teal'>Sign In</Button>
                        <Button as={Link} to="/api/v1/register" colorScheme='teal'>Sign Up</Button>
                    </>
                ) : (
                    <>
                        <Button as={Link} to="/api/v1/create" colorScheme='teal'>Create Posts</Button>
                        <Button onClick={logout} colorScheme='teal'>Sign Out</Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
