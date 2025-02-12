import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('<Navbar/>', () => {
  it('Renders the logo image', () => {
    render(<Navbar />);

    const logo = screen.getByAltText('Logo de Dygav');

    expect(logo).toBeInTheDocument();
  });

  it('Renders all navigation links', () => {
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

  it('Redirects to the correct page when clicking on a link', () => {
    render(<Navbar />);

    const viajaLink = screen.getByText('Viaja');
    const alojamientosLink = screen.getByText('Alojamientos');
    const propietariosLink = screen.getByText('Propietarios');
    const licenciasLink = screen.getByText('Licencias VUT');
    const crearCuentaLink = screen.getByText('Crear cuenta');
    const iniciarSesionLink = screen.getByText('Iniciar sesión');

    expect(viajaLink).toHaveAttribute('href', '#');
    expect(alojamientosLink).toHaveAttribute('href', '#');
    expect(propietariosLink).toHaveAttribute('href', '#');
    expect(licenciasLink).toHaveAttribute('href', '#');
    expect(crearCuentaLink).toHaveAttribute('href', '#');
    expect(iniciarSesionLink).toHaveAttribute('href', '#');
  });
});
