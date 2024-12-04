import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

// describe - to group tests
// it == test - they both are same

describe('Contact Component', () => {
    it('Should load the Contact component', () => {
        render(<Contact />); // To render the component on JSDOM (virtual browser)
        const heading = screen.getByRole('heading');
    
        // Assersion
        expect(heading).toBeInTheDocument();
    });
    
    test('Should load the button inside Contact component', () => {
        render(<Contact />); // To render the component on JSDOM (virtual browser)
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });
    
    test('Should load the input name inside Contact component', () => {
        render(<Contact />); 
        const input = screen.getByPlaceholderText('name');
        expect(input).toBeInTheDocument();
    });
    
    test('Should load the 2 inputs inside Contact component', () => {
        render(<Contact />); 
        const inpBoxes = screen.getAllByRole('textbox'); //FOR FETCHING MULTIPLE ELEMENTS
        // console.log(inpBoxes)
        expect(inpBoxes.length).toBe(2);
    });
});

