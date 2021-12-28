import React from 'react'
import ReactDOM from 'react-dom'
import 'react-app-polyfill/stable'
import 'core-js'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './app/store'
import { stopReportingRuntimeErrors } from 'react-error-overlay'

// if (process.env.NODE_ENV === 'development') {
//     stopReportingRuntimeErrors() // disables error overlays
// }


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
