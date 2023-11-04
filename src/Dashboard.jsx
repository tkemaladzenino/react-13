import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './css/style.css';

function Dashboard() {
    const location = useLocation();
    const { state } = location;
    const [displayUserData, setDisplayUserData] = useState(false);
    const [displayedEmail, setDisplayedEmail] = useState('');
    const [displayedPassword, setDisplayedPassword] = useState('');

    const handleDisplayUserData = () => {
        if (state && state.username && state.password) {
            setDisplayedEmail(state.username);
            setDisplayedPassword(state.password);
            setDisplayUserData(true);
        }
    };

    return (
        <div className="container-fluid layout-body  d-flex justify-content-center ">
            <div className="row ">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4">
                    <div className="dash pb-4">
                        <h3 style={{ color: '#258be6' }}>გამარჯობა: "ელფოსტა"</h3>
                        <button className="btnA mt-5" onClick={handleDisplayUserData}>
                            გასვლა
                        </button>

                        {displayUserData && displayedEmail && displayedPassword && (
                            <>
                                <p style={{ color: '#006dd3' }}>email: {displayedEmail}</p>
                                <p style={{ color: '#006dd3' }}>Password: {displayedPassword}</p>
                            </>
                        )}
                    </div>

                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Dashboard;






























