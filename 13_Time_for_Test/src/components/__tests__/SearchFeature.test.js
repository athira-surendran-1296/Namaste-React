// Integration testing for search feature
import { act, fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../../components/mocks/ResListMockData.json';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// jest.fn(() => {}); // Returns a mock function

globalThis.fetch = jest.fn(() => {
    return Promise.resolve({ // Mock for the fetch function
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

describe('Integration testing for the search feature', () => {
    
    beforeAll(() => {
        // console.log("called before any test is executed")
    })

    afterAll(() => {
        // console.log("called after all tests are executed")
    })

    beforeEach(() => {
        // console.log("called before every test is executed")
    })

    afterEach(() => {
        // console.log("called after every test is executed")
    })


    it('should load the body component with the search button, and when search clicked should load 4 cards', async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            );
        })

        const searchBtn = screen.getByText('Search');
        expect(searchBtn).toBeInTheDocument();

        const cardsBeforeSearch = screen.getAllByTestId('resCard');
        expect(cardsBeforeSearch.length).toBe(8); // data-testid='resCard' ResCard.js

        const searchInp = screen.getByTestId('searchInp'); // data-testid='searchInp' Body.js
        fireEvent.change(searchInp, {target: {value: 'pizza'}});
        
        fireEvent.click(searchBtn);

        const cardsAfterSearch = screen.getAllByTestId('resCard');

        expect(cardsAfterSearch.length).toBe(4); // data-testid='resCard' ResCard.js
    });
});