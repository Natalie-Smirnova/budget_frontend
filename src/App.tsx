import React from 'react';
import {LoginPage} from './pages/LoginPage'
import {RegisterPage} from './pages/RegisterPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {TransactionsPage} from "./pages/TransactionsPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/transactions" element={<TransactionsPage/>} />
            </Routes>
        </Router>
    );
};

export default App;