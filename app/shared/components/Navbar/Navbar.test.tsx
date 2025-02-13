import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo de Dygav');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);

    const links = [
      'Viaja',
      'Alojamientos',
      'Propietarios',
      'Licencias VUT',
      'Crear cuenta',
      'Iniciar sesión',
    ];

    links.forEach((linkText) => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
    });
  });
});
