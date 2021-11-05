import React from 'react'
import PanelLeft from 'components/multi-choices/panelLeft/PanelLeft'
import PanelCenter from 'components/multi-choices/panelCenter/PanelCenter'
import PanelRight from 'components/multi-choices/panelRight/PanelRight'
import './Container.scss'

function Container() {
    return (
        <div className="container">
            <PanelLeft />
            <PanelCenter />
            <PanelRight />
        </div>
    )
}

export default Container