import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className='app-wrapper'>
            <Header className='header'/>
            <Sidebar className='sidebar'/>
            <Main className='main'/>
        </div>
    );
}

export default App;
