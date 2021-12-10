import React, { useEffect, useState } from 'react'
import { ADMIN } from 'utils/constants'
import AccountRegister from './AccountRegister/AccountRegister'

export default function AppContent({ currentAction }) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        if (currentAction === ADMIN.ACCOUNT.REGISTER) {
            setComponent(<AccountRegister />)
        }
        else {
            setComponent(<AccountRegister />)
        }
    }, [currentAction])

    return (
        <div>
            {component}
        </div>
    )
}