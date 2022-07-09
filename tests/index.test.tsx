import { render, screen } from '@testing-library/react';
import Home from 'src/pages/index';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
