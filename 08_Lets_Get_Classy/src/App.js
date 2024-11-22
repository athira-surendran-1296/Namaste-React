import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import AboutClass from './components/About';

const AppLayout = () => {
return (
    <div className='app'>
        <Header />
            <Outlet />
        <Footer />
    </div>
)}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <AboutClass />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurent/:resId',
                element: <ResMenu />
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));  

root.render(<RouterProvider router={appRouter} />);