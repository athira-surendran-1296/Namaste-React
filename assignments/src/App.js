import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ImageExample from './assignments/AddImageExample/ImageExample';
import Login from './assignments/LoginPage/Login';

const AssignmentLayout = () => {
    return (
        <div className='assignment'>
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    // Assignments
    {
        path: '/',
        element: <AssignmentLayout />,
        children: [
            {
                path: '/',
                element: <Login /> /** Login page using Formik 07 Assignment */
            },
            {
                path: '/image-example',
                element: <ImageExample /> /** Different ways of importing images 07 Assignment */
            },
        ],
        errorElement: <div>Oops! Something went wrong...</div>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));  

root.render(<RouterProvider router={appRouter} />);