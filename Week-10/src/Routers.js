import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import List from "./pages/List/List";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;