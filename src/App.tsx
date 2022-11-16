import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="app-wrapper-content">

                    <Route
                        path="/dialogs" component={Dialogs}
                    />

                    <Route
                        path="/music"
                        component={() => <Music music={'Music'}/>}
                    />

                    <Route
                        path="/news"
                        component={() => <News news={'News'}/>}
                    />

                    <Route
                        path="/settings"
                        component={() => <Settings settings={'Settings'}/>}
                    />

                    <Route
                        path="/profile"
                        component={() => <Profile/>}
                    />
                </div>

                <Header
                    logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cummins_logo.svg/1086px-Cummins_logo.svg.png'}
                    alt={'logo'}/>
                <Navbar profile={'Profile'} message={'Message'} news={'News'} music={'Music'} setting={'Settings'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;