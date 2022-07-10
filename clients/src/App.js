import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import { loadUser } from 'redux/authSlice'
import Homepage from 'pages/home/Homepage'
import Page404 from 'pages/Page404'
import Page500 from 'pages/Page500'
import ProtectedRoute from 'components/ProtectedRoute'
import MyAppNavbar from 'components/common/appNavbar/AppNavbar'
import Login from 'components/account/login/Login'
import Register from 'components/account/register/Register'
import ActivationEmail from 'components/account/register/ActivationEmail'
import Profile from 'components/account/profile/Profile'
import ForgotPassword from 'components/account/handlePassword/ForgotPassword'
import ResetPassword from 'components/account/handlePassword/ResetPassword'
import Contest from 'components/contest/Contest'
import ContestInfo from 'components/contest/contestInfo/ContestInfo'
import StatisticTest from 'components/contest/statistics/StatisticTest'
import StatisticContest from 'components/contest/statistics/StatisticContest'
import MultiChoices from 'components/exam/MultiChoices'
import SubmitResult from 'components/exam/submitResult/SubmitResult'
import Admin from 'components/admin/Admin'
import './App.scss'
import PaymentReturn from 'components/payments/PaymentReturn'

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
            <div className="app">
                {authLoading && (
                    <div style={loadingCss} className='d-flex align-items-center justify-content-center'>
                        <SyncLoader
                            color={'#7ED321'}
                            loading={authLoading}
                            speedMultiplier={2}
                        />
                    </div>
                )}

                {!authLoading && (
                    <div className="bootstrap-container">
                        <MyAppNavbar />

                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/404" element={<Page404 />} />
                            <Route path="*" element={<Page404 />} />
                            <Route path="/500" element={<Page500 />} />
                            <Route path="/forgotPassword" element={<ForgotPassword />} />
                            <Route path="/activation/:activation_token" element={<ActivationEmail />} />
                            <Route path="/resetPassword/:activation_token" element={<ResetPassword />} />
                            <Route path="/dashboard" element={<ProtectedRoute />}>
                                <Route
                                    path="/dashboard"
                                    element={<Admin />}
                                />
                            </Route>

                            <Route path="/contests" element={<ProtectedRoute />}>
                                <Route
                                    path="/contests" exact
                                    element={<Contest />}
                                />
                                <Route
                                    path="/contests/:contestIdOrUrl"
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

                            <Route path="/payments/vnpay_return" element={<ProtectedRoute />}>
                                <Route
                                    path="/payments/vnpay_return"
                                    element={<PaymentReturn />}
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
