import React, { useEffect, useState } from 'react'
import { ADMIN } from 'utils/constants'
import AccountRegister from './Account/AccountRegister/AccountRegister'
import AccountStatistics from './Account/AccountStatistics/AccountStatistics'
import Dashboard from './Dashboard/Dashboard'

export default function AppContent({ currentAction }) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        if (currentAction === ADMIN.ACCOUNT.REGISTER) {
            setComponent(<AccountRegister />)
        }
        if (currentAction === ADMIN.ACCOUNT.STATISTICS) {
            setComponent(<AccountStatistics />)
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