import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import AboutClass from './components/About';
import UserContext from './utils/userContext';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import HookDemo01 from './components/HookDemo01';
import HookDemo02 from './components/HookDemo02';
import HookDemo03 from './components/HookDemo03';
import InterviewPrep from './components/InterviewPrep';

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Some authentication logic and finally we get the logged in user
        setUserName('Athira');
    }, []);

    return (
        <div className='app'>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                    <Header />
                        <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </div>
    )
}

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
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading Grocery....</h1>} >
                            <Grocery />
                         </Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/hook-demo-01',
                element: <HookDemo01 />
            },
            {
                path: '/hook-demo-02',
                element: <HookDemo02 />
            },
            {
                path: '/hook-demo-03',
                element: <HookDemo03 />
            },
            {
                path: '/interview-prep',
                element: <InterviewPrep />
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));  

root.render(<RouterProvider router={appRouter} />);