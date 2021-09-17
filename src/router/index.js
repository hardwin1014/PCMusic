import WDiscover from '@/pages/discover';
import WMine from '@/pages/mine'
import WFriend from '@/pages/friend'
import Login from '../pages/login';
import { Redirect } from 'react-router';

const routes = [
    {
        path: '/',
        exact:true,
        render:() => (
            <Redirect to="/discover"/>
        )
    },{
        path: '/discover',
        component: WDiscover
    },
    {
        path: '/mine',
        component: WMine
    },
    {
        path: '/friend',
        component: WFriend
    },
    {
        path: '/login',
        component: Login
    }
]

export default routes;