import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Authorization = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        if (!enteredUsername || !enteredPassword) {
            setUsername('');
            setPassword('');
        } else {
            setUsername(enteredUsername);
            setPassword(enteredPassword);
            navigate('/dashboard', {
                state: { username: enteredUsername, password: enteredPassword },
            });
        }
    };

    return (
        <div className="container-fluid layout-bodyR  d-flex justify-content-center pt-5">
            <div className="row">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4 pt-5">
                    <div className="containerA mt-3">
                        <h2 style={{ color: '#68c7d4' }}>ავტორიზაცია</h2>
                        <Form className="custom-form mt-3">
                            <Form.Group>
                                <Form.Label>მომხმარებლის სახელი</Form.Label>
                                <Form.Control id="username" type="text" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>პაროლი</Form.Label>
                                <Form.Control id="password" type="password" />
                            </Form.Group>
                            <button className="btn" onClick={handleLogin}>
                                შესვლა
                            </button>
                        </Form>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Authorization;












