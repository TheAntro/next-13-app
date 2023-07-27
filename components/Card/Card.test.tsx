import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  it('Should render children passed in', () => {
    const childTitle = 'Child title';
    const childContent = 'Child content';
    const child = (
      <>
        <h1>{childTitle}</h1>
        <p>{childContent}</p>
      </>
    );
    render(<Card>{child}</Card>);
    expect(
      screen.getByRole('heading', { name: childTitle })
    ).toBeInTheDocument();
    expect(screen.getByText(childContent)).toBeInTheDocument();
  });
});
