import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero component', () => {
  it('renders the title and subtitle', () => {
    render(<Hero title='Test Title' subtitle='Test Subtitle' />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders children when passed in', () => {
    render(
      <Hero title='Test Title' subtitle='Test Subtitle'>
        <div>Child Element</div>
      </Hero>
    );

    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });
});
