// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VectorStore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VectorStore/i);
    expect(titleElement).toBeInTheDocument();
});
