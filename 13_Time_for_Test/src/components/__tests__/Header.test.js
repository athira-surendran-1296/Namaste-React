import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Header components tests', () => {
    it('should load the logout button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        // const logoutBtn = screen.getByRole('button');
        const logoutBtn = screen.getByText('Logout'); // get by text also takes input as regex - '/Logout/'
        expect(logoutBtn).toBeInTheDocument();
    });

    it('should change login button to logout when clicked', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const logoutBtn = screen.getByText('Logout');
        fireEvent.click(logoutBtn); //Simulating the click
        const loginBtn = screen.getByText('Login');
        expect(loginBtn).toBeInTheDocument();
    });
});