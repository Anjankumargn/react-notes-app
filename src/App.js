// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import NotesList from './components/NotesList';
// import Search from './components/Search';
// import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Form/LoginPage';
import SignUp from './Form/SignUpPage';
import Notess from './Notess';
// import NavBar from './NavBar';
import './index.css';

const App = () => {
	

	return (
    <BrowserRouter>
    {/* <NavBar/> */}
    <Routes>
    <Route path="/" element={<Login />} /> {/* Add route for LoginPage */}
    <Route path="/signup" element={<SignUp />} />
    <Route path="/notes" element={<Notess />} /> 

     </Routes>
     </BrowserRouter>
	);
};

export default App; 