import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Navbar from 'components/common/navbar/Navbar'
import Contest from 'components/contest/Contest'
import SubmitResult from 'components/MultiChoices/submitResult/SubmitResult'
import Homepage from 'components/common/home/Homepage'
import About from 'components/common/home/About'
import Contact from 'components/common/home/Contact'
import Login from 'components/common/login/Login'
import Register from 'components/common/register/Register'
import Profile from 'components/common/profile/Profile'
import ProtectedRoute from 'components/ProtectedRoute'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from 'redux/authSlice'
import Spinner from 'react-bootstrap/Spinner'
import './App.scss'
import ContestInfo from 'components/contest/contestInfo/ContestInfo'
import MultiChoices from 'components/MultiChoices/MultiChoices'
import { BeatLoader, HashLoader, SyncLoader } from 'react-spinners'

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
        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
                <div className="app">
                    {authLoading ? (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 10000
                            }}
                            className='d-flex align-items-center justify-content-center'
                        >
                            <SyncLoader
                                color={'#7ED321'}
                                loading={authLoading}
                                speedMultiplier={2}
                            />
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
                                        path="/contest" exact
                                        element={<Contest isCreator={false} />}
                                    />
                                    <Route
                                        path="/contest/:contestId"
                                        element={<ContestInfo />}
                                    />
                                </Route>

                                <Route path="/test/:testId" element={<ProtectedRoute />}>
                                    <Route
                                        path="/test/:testId"
                                        element={<MultiChoices />}
                                    />
                                </Route>

                                <Route path="/takeTest" element={<ProtectedRoute />}>
                                    <Route
                                        path="/takeTest/:takeTestId"
                                        element={<SubmitResult />}
                                    />
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
    )
}

export default App
