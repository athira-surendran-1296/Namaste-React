import { act, fireEvent, render, screen } from "@testing-library/react"
import ResMenu from "../ResMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/ResMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

describe('Integration test - Add to cart feature',() => {
    it('should load Res Menu Component',async () => {
        await act(() => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <ResMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ))

        const accordianHeader = screen.getByText('Veg Pizza (14)');
        expect(accordianHeader).toBeInTheDocument();

        fireEvent.click(accordianHeader);

        const items = screen.getAllByTestId('foodItems');
        expect(items.length).toBe(14);

        const addBtns = screen.getAllByRole("button", { name: 'Add' });
        expect(addBtns.length).toBe(14);

        expect(screen.getByText('(0)')).toBeInTheDocument();

        fireEvent.click(addBtns[0]);
        expect(screen.getByText('(1)')).toBeInTheDocument();

        fireEvent.click(addBtns[1]);
        expect(screen.getByText('(2)')).toBeInTheDocument();

        expect(screen.getAllByTestId('foodItems').length).toBe(16); // 14 from ResMenu + 2 from Cart

        fireEvent.click(screen.getByRole("button", {name: 'Clear Cart'}));

        expect(screen.getAllByTestId('foodItems').length).toBe(14); // 14 from ResMenu

        expect(screen.getByText('Your Cart is empty')).toBeInTheDocument();

    });
});