import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

// 组件
import WXHAppHeader from '@/components/app-header'
import WXHAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'


export default memo(function App() {
    return (
        <HashRouter>
            <WXHAppHeader/>
            { renderRoutes(routes) }
            <WXHAppFooter/>
        </HashRouter>
    )
})
