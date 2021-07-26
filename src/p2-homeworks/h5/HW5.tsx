import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './pages/Header'
import Routes from './Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>
            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
