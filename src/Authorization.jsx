

import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Authorization = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        if (!enteredUsername || !enteredPassword) {
            window.alert('ყველა ველის შევსება აუცილებელია');
        } else {
            localStorage.setItem('email', enteredUsername);
            localStorage.setItem('password', enteredPassword);
            navigate('/dashboard');
        }
    };

    return (
        <div className="container-fluid layout-bodyR  d-flex justify-content-center pt-5">
            <div className="row">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4 pt-5">
                    <div className="containerA mt-3">
                        <h2 style={{ color: '#68c7d4' }}>ავტორიზაცია</h2>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <Form className="custom-form mt-3">
                            <Form.Group>
                                <Form.Label >ელფოსტა</Form.Label>
                                <Form.Control
                                    id="username"
                                    type="text"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setErrorMessage('');
                                    }}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>პაროლი</Form.Label>
                                <Form.Control
                                    id="password"
                                    type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrorMessage('');
                                    }}
                                />
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













