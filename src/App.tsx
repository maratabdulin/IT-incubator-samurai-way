import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className='app-wrapper'>
            <Header className='header'/>
            <Navbar className='navbar'/>
            <Profile className='profile'/>
        </div>
    );
}

export default App;
