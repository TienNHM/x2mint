import React, { useEffect, useState } from 'react'
import { ADMIN } from 'utils/constants'
import AccountGrantPermissions from './Account/AccountGrantPermissions/AccountGrantPermissions'
import AccountManagement from './Account/AccountManagement/AccountManagement'
import AccountStatistics from './Account/AccountStatistics/AccountStatistics'
import ContestArchive from './Contest/ContestArchive/ContestArchived'
import ContestParticipants from './Contest/ContestParticipants/ContestParticipants'
import ContestStatistics from './Contest/ContestStatistics/ContestStatistics'
import Dashboard from './Dashboard/Dashboard'

export default function AppContent({ currentAction }) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        if (currentAction === ADMIN.ACCOUNT.STATISTICS) {
            setComponent(<AccountStatistics />)
        }
        else if (currentAction === ADMIN.ACCOUNT.MANAGE) {
            setComponent(<AccountManagement />)
        }
        else if (currentAction === ADMIN.ACCOUNT.GRANT_PERMISSIONS) {
            setComponent(<AccountGrantPermissions />)
        }
        else if (currentAction === ADMIN.CONTEST.STATISTICS) {
            setComponent(<ContestStatistics />)
        }
        else if (currentAction === ADMIN.CONTEST.PARTICIPANT) {
            setComponent(<ContestParticipants />)
        }
        else if (currentAction === ADMIN.CONTEST.ARCHIVE) {
            setComponent(<ContestArchive />)
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