import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ResponsiveContainer } from './ResponsiveContainer';

describe('ResponsiveContainer', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <ResponsiveContainer>
                <div>Test Content</div>
            </ResponsiveContainer>
        );
        expect(getByText('Test Content')).toBeInTheDocument();
    });
});
