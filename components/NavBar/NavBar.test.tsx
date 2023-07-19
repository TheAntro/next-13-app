import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  it('Should render a nav element', () => {
    render(<NavBar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
