import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('renders the title', () => {
    render(<Hero />);

    expect(screen.getByText('¿A Donde Te Apetece Ir?')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Hero />);

    expect(
      screen.getByText('Estás a unos clics de tu nuevo lugar favorito')
    ).toBeInTheDocument();
  });

  it('renders the city select input with default option', () => {
    render(<Hero />);

    expect(screen.getByLabelText('Escoge tu cuidad')).toBeInTheDocument();
    expect(screen.getByText('Cuidad')).toBeInTheDocument();
  });

  it('renders the date input', () => {
    render(<Hero />);

    expect(screen.getByLabelText('Fecha de reserva')).toBeInTheDocument();
  });

  it('renders the number of travelers input', () => {
    render(<Hero />);

    expect(
      screen.getByPlaceholderText('Número de viajeros')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Huespedes')).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<Hero />);

    expect(screen.getByRole('button', { name: /Buscar/i })).toBeInTheDocument();
  });
});
