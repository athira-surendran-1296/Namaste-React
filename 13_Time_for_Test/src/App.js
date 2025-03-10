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
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));  

root.render(<RouterProvider router={appRouter} />);