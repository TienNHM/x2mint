import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from 'pages/home/Homepage'
import Page404 from 'pages/Page404'
import Page500 from 'pages/Page500'
import ProtectedRoute from 'components/ProtectedRoute'
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
import PaymentReturn from 'components/payments/PaymentReturn'

export default function AppRouting() {
    return (
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
                <Route path="/dashboard" element={<Admin />} />
            </Route>

            <Route path="/contests" element={<ProtectedRoute />}>
                <Route path="/contests" exact element={<Contest />} />
                <Route path="/contests/:contestIdOrUrl" element={<ContestInfo />} />
            </Route>

            <Route path="/test/:testId" element={<ProtectedRoute />}>
                <Route path="/test/:testId" element={<MultiChoices />} />
            </Route>

            <Route path="/takeTest" element={<ProtectedRoute />}>
                <Route path="/takeTest/:takeTestId" element={<SubmitResult />} />
            </Route>

            <Route path="/statistics" element={<ProtectedRoute />}>
                <Route path="/statistics/take-test/:testId" element={<StatisticTest />} />
                <Route path="/statistics/contest/:contestId/taketests" element={<StatisticContest />} />
            </Route>

            <Route path="/payments/vnpay_return" element={<ProtectedRoute />}>
                <Route path="/payments/vnpay_return" element={<PaymentReturn />} />
            </Route>
        </Routes>
    )
}