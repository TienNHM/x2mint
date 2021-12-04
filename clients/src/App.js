import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { CookiesProvider } from 'react-cookie'
import Navbar from 'components/common/navbar/Navbar'
import Contest from 'components/contest/Contest'
import SubmitResult from 'components/MultiChoices/submitResult/SubmitResult'
import Homepage from 'components/common/home/Homepage'
import About from 'components/common/home/About'
import Contact from 'components/common/home/Contact'
import Login from 'components/common/login/Login'
import Register from 'components/common/register/Register'
import Profile from 'components/common/profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/authSlice'
import Spinner from 'react-bootstrap/Spinner'
import './App.scss'

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
    const dispatch = useDispatch()
    const { authLoading, isAuthenticated } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <CookiesProvider>
            <BrowserRouter>
                <AlertProvider template={AlertTemplate} {...options}>
                    <div className="app">
                        {authLoading ? (
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    top: 0,
                                    left: 0,
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    zIndex: 10000,
                                    paddingTop: 300
                                }}
                            >
                                <Spinner
                                    animation="border"
                                    color="#5FA509"
                                    style={{ color: '#188a0b' }}
                                    size={50}
                                ></Spinner>
                            </div>
                        ) : (
                            <div className="bootstrap-container">
                                <Navbar />
                                <Routes>
                                    <Route exact path="/" element={<Homepage />} />
                                    <Route path="/create" element={<ProtectedRoute />}>
                                        <Route
                                            path="/create"
                                            element={<Contest isCreator={true} />}
                                        />
                                    </Route>
                                    <Route path="/contest" element={<ProtectedRoute />}>
                                        <Route
                                            path="/contest"
                                            element={<Contest isCreator={false} />}
                                        />
                                    </Route>
                                    <Route path="/result" element={<ProtectedRoute />}>
                                        <Route path="/result" element={<SubmitResult />} />
                                    </Route>
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </div>
                        )}
                    </div>
                </AlertProvider>
            </BrowserRouter>
        </CookiesProvider>
    )
}

export default App
