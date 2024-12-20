import React from 'react';
import {ExpensesOverview} from './components/ExpensesOverview'
import {Login} from './components/Login/Login'
import {Register} from './components/Register/Register'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    );
};

export default App;