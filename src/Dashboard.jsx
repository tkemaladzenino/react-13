import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import './css/style.css';

function Dashboard() {
    const location = useLocation();
    const { state } = location;
    const [displayedEmail, setDisplayedEmail] = useState('');
    const [displayedPassword, setDisplayedPassword] = useState('');
    const navigate = useNavigate();

    const handleExit = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate('/authorization');
    };

    return (
        <div className="container-fluid layout-body  d-flex justify-content-center ">
            <div className="row ">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4">
                    <div className="dash pb-4">

                        <h3 style={{ color: " #258be6" }}>გამარჯობა "ემაილი": {displayedPassword}</h3>
                    </div>
                    <button className="btnA" onClick={handleExit}>
                        გასვლა
                    </button>
                </div>
            </div>
            <Outlet />
        </div >
    );
}

export default Dashboard;




































