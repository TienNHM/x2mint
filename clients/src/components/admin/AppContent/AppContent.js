import React, { useEffect, useState } from 'react'
import { ADMIN } from 'utils/constants'
import AccountRegister from './AccountRegister/AccountRegister'
import Dashboard from './Dashboard/Dashboard'

export default function AppContent({ currentAction }) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        if (currentAction === ADMIN.ACCOUNT.REGISTER) {
            setComponent(<AccountRegister />)
        }
        else {
            setComponent(<Dashboard />)
        }
    }, [currentAction])

    return (
        <div>
            {component}
        </div>
    )
}