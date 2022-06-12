import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/news";
import Setting from "./components/setting/setting";
import Music from "./components/music/music";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
