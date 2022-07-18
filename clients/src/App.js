import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import { loadUser } from 'redux/authSlice'
import MyAppNavbar from 'components/common/appNavbar/AppNavbar'
import './App.scss'
import AppRouting from 'routing'

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
                        <AppRouting />
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
