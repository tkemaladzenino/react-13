
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Authorization from './Authorization';
import Dashboard from './Dashboard.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Authorization />}></Route>
                <Route path="dashboard" element={< Dashboard />} />
                <Route path="authorization" element={<Authorization />} />
            </Routes>
        </BrowserRouter>
    );
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);


