import { createBrowserRouter}from 'react-router-dom';
import Login from './feature/auth/pages/Login';
import Register from './feature/auth/pages/Register'
import Feed from './feature/post/Feed.jsx';

const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>

    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:'/',
        element: <Feed/>
    }
]);

export default router;