import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import MyAppNavbar from 'components/common/appNavbar/AppNavbar'
import Contest from 'components/contest/Contest'
import SubmitResult from 'components/MultiChoices/submitResult/SubmitResult'
import Homepage from 'components/common/home/Homepage'
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
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './App.scss'
import StatisticTest from 'components/contest/statistics/StatisticTest'
import StatisticContest from 'components/contest/statistics/StatisticContest'
import { ToastContainer } from 'react-toastify'

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
            <ReactNotification />

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
                        <MyAppNavbar />

                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/register" element={<Register />} />
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

                            <Route path="/statistics" element={<ProtectedRoute />}>
                                <Route
                                    path="/statistics/take-test/:testId"
                                    element={<StatisticTest />}
                                />
                                <Route
                                    path="/statistics/contest/:contestId/taketests"
                                    element={<StatisticContest />}
                                />
                            </Route>
                        </Routes>
                    </div>
                )}
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </BrowserRouter>
    )
}

export default App
