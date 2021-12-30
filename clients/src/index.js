import React from 'react'
import ReactDOM from 'react-dom'
import 'react-app-polyfill/stable'
import 'core-js'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './app/store'
import { Auth0Provider } from '@auth0/auth0-react'
import { stopReportingRuntimeErrors } from 'react-error-overlay'

// if (process.env.NODE_ENV === 'development') {
//     stopReportingRuntimeErrors() // disables error overlays
// }

ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
    >
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
)

reportWebVitals()
