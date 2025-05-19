// __tests__/Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/app/home/page';

describe('HomePage', () => {
  it('renders a heading with welcome text', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { name: /welcome/i });
    expect(heading).toBeInTheDocument();
  });
});
