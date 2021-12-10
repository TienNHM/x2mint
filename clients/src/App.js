import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
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
import { loadUser } from 'redux/authSlice'
import ContestInfo from 'components/contest/contestInfo/ContestInfo'
import MultiChoices from 'components/MultiChoices/MultiChoices'
import Admin from 'components/admin/Admin'
import Page404 from 'pages/Page404'
import Page500 from 'pages/Page500'
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

const loadingCss = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10000
}

function App() {
    const dispatch = useDispatch()
    const { authLoading } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
                <div className="app">
                    {authLoading ? (
                        <div style={loadingCss} className='d-flex align-items-center justify-content-center'>
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
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/404" element={<Page404 />} />
                                <Route path="/500" element={<Page500 />} />

                                <Route path="/dashboard" element={<ProtectedRoute />}>
                                    <Route
                                        path="/dashboard"
                                        element={<Admin />}
                                    />
                                </Route>

                                <Route path="/contests-mangement" element={<ProtectedRoute />}>
                                    <Route
                                        path="/contests-mangement"
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
                            </Routes>
                        </div>
                    )}
                </div>
            </AlertProvider>
        </BrowserRouter>
    )
}

export default App
