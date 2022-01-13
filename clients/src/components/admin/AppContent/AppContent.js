import Profile from 'components/account/profile/Profile'
import React, { useEffect, useState } from 'react'
import { ADMIN } from 'utils/constants'
import AccountGrantPermissions from './Account/AccountGrantPermissions/AccountGrantPermissions'
import AccountManagement from './Account/AccountManagement/AccountManagement'
import AccountStatistics from './Account/AccountStatistics/AccountStatistics'
import ContestArchive from './Contest/ContestArchive/ContestArchived'
import ContestParticipants from './Contest/ContestParticipants/ContestParticipants'
import ContestStatistics from './Contest/ContestStatistics/ContestStatistics'
import Revenue from './Revenue/Revenue'
import Dashboard from './Dashboard/Dashboard'
import MessengerCustomerChat from 'react-messenger-customer-chat'

export default function AppContent({ currentAction }) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        const components = {
            [ADMIN.ACCOUNT.STATISTICS]: <AccountStatistics />,
            [ADMIN.ACCOUNT.MANAGE]: <AccountManagement />,
            [ADMIN.ACCOUNT.GRANT_PERMISSIONS]: <AccountGrantPermissions />,
            [ADMIN.CONTEST.STATISTICS]: <ContestStatistics />,
            [ADMIN.CONTEST.PARTICIPANT]: <ContestParticipants />,
            [ADMIN.CONTEST.ARCHIVE]: <ContestArchive />,
            [ADMIN.SETTINGS.ACCOUNT]: <Profile />,
            [ADMIN.REVENUE]: <Revenue />,
            [ADMIN.DASHBOARD]: <Dashboard />
        }

        setComponent(components[currentAction])

    }, [currentAction])

    return (
        <div>
            {component ? component : <Dashboard />}

            <MessengerCustomerChat
                pageId="110971274789083"
                appId="332254335175096"
                htmlRef="fb-customer-chat"
            />
        </div>
    )
}