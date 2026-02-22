import { createBrowserRouter}from 'react-router-dom';
import Login from './feature/auth/pages/Login';
import Register from './feature/auth/pages/Register'

const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>

    },
    {
        path:"/register",
        element:<Register/>
    }
]);

export default router;