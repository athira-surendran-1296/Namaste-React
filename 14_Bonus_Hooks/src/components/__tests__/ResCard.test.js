import { render, screen } from '@testing-library/react';
import ResCard, { TopRatedResCard } from '../ResCard';
import RES_CARD_MOCK_DATA from '../../components/mocks/ResCardMock.json';
import '@testing-library/jest-dom';

describe('Tests for ResCard Component', () => {
    it('should should load the card with restaurent name', () => {
        render(<ResCard res={RES_CARD_MOCK_DATA} />);
        const resName = screen.getByText('Paradise Biryani');
        expect(resName).toBeInTheDocument();
    });

    it('should should load the card with promoted label', () => {
        const TopRatedResCardComponent = TopRatedResCard(ResCard);
        render(<TopRatedResCardComponent res={RES_CARD_MOCK_DATA} />);
        const resName = screen.getByText('Top Rated');
        expect(resName).toBeInTheDocument();
    });
});