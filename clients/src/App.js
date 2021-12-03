import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import Contest from 'components/contestManagement/contest/Contest'
import SubmitResult from 'components/multi-choices/submitResult/SubmitResult'
import Homepage from 'components/common/home/Homepage'
import About from 'components/common/home/About'
import Contact from 'components/common/home/Contact'
import Login from 'components/common/login/Login'
import Register from 'components/common/register/Register'
import Profile from 'components/common/profile/Profile'
import AuthContextProvider from './contexts/AuthContext'


const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 2000,
    offset: '30px',
    transition: transitions.FADE,
    containerStyle: {
        zIndex: 100
    }
}

function App() {
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <div className="app">
                <div className="bootstrap-container">
                    <Navbar/>
                    <AuthContextProvider>
                        <Routes className="app__body">
                            <Route exact path ="/" element={<Homepage />} />
                            <Route path ="/about" element={<About />} />
                            <Route path ="/contact" element={<Contact />} />
                            <Route path ="/create" element={<Contest />} />
                            <Route path ="/login" element={<Login />} />
                            <Route path ="/register" element={<Register />} />
                            {/* <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />}/>
					        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} /> */}
                            <Route path ="/profile" element={<Profile />} />
                        </Routes>
                    </AuthContextProvider>
                </div>
            </div>
        </AlertProvider>
    )
}

export default App
