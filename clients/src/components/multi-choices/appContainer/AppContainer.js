import React from 'react'
import PanelLeft from 'components/multi-choices/panelLeft/PanelLeft'
import PanelPresentation from 'components/multi-choices/panelPresentation/PanelPresentation'
import PanelRight from 'components/multi-choices/panelRight/PanelRight'
import './AppContainer.scss'

function Container() {
    return (
        <div className="app-container">
            <PanelLeft />
            <PanelPresentation />
            <PanelRight />
        </div>
    )
}

export default Container