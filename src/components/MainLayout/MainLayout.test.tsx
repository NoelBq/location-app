import { render, screen } from '@testing-library/react';
import { MainLayout } from './MainLayout';
import '@testing-library/jest-dom'

describe('MainLayout', () => {
    it('renders children correctly', () => {
        render(
            <MainLayout>
                <div data-testid="child-element">Child Content</div>
            </MainLayout>
        );

        const childElement = screen.getByTestId('child-element');
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent('Child Content');
    });
});
