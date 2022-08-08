import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import News from './components/news/news';
import Setting from './components/setting/setting';
import Music from './components/music/music';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
