import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import styles from './Hero.module.css';

describe('Hero', () => {
  it('renders title and subtitle', () => {
    render(<Hero title='Test Title' subtitle='Test Subtitle' />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <Hero title='Test Title' subtitle='Test Subtitle'>
        <div data-testid='child'>Child Content</div>
      </Hero>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(
      <Hero title='Test Title' subtitle='Test Subtitle' />
    );

    expect(container.querySelector('section')).toHaveClass(styles.container);
    expect(container.querySelector('h1')).toHaveClass(styles.title);
    expect(container.querySelector('p')).toHaveClass(styles.subtitle);
  });
});
