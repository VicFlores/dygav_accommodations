import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo de Dygav');
    expect(logo).toBeInTheDocument();
  });

  it('renders the burger menu icon when menu is closed', () => {
    render(<Navbar />);
    const burgerIcon = screen.getByTestId('burger-icon');
    expect(burgerIcon).toBeInTheDocument();
  });

  it('renders the close icon when menu is open', () => {
    render(<Navbar />);
    const burgerMenu = screen.getByTestId('burger-menu');
    fireEvent.click(burgerMenu);
    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
  });

  it('toggles the menu when burger menu is clicked', () => {
    render(<Navbar />);
    const burgerMenu = screen.getByTestId('burger-menu');
    fireEvent.click(burgerMenu);
    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(burgerMenu);
    const burgerIcon = screen.getByTestId('burger-icon');
    expect(burgerIcon).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
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
