import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import styles from './Footer.module.css';

describe('Footer', () => {
  it('renders main footer structure', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Descubre tu refugio perfecto a solo un clic de distancia.'
      )
    ).toBeInTheDocument();
  });

  it('renders all platform images', () => {
    render(<Footer />);

    const platformImages = [
      'Booking.com',
      'Airbnb',
      'Rentalia',
      'Vrbo',
      'Google',
      'Expedia',
    ];

    platformImages.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });

  it('renders social media icons', () => {
    const { container } = render(<Footer />);

    const socialIcons = container.querySelector(`.${styles.social_media}`);
    expect(socialIcons?.children.length).toBe(3);
  });

  it('renders company information', () => {
    render(<Footer />);

    expect(screen.getByAltText('Logo de Dygav')).toBeInTheDocument();
    expect(
      screen.getByText(/Somos una empresa con amplia experiencia/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/© 2025 Dygav. Todos los derechos reservados./)
    ).toBeInTheDocument();
  });

  it('renders quick links sections', () => {
    render(<Footer />);

    const sections = ['Enlaces de utiles', 'Políticas', 'Contacto'];
    sections.forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });

  it('renders all navigation links', () => {
    render(<Footer />);

    const links = [
      'Inciar sesión',
      'Registrarse',
      'Blog',
      'Privacidad',
      'Cookies',
      'Formularios',
      'Aviso Legal',
    ];

    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders contact information', () => {
    render(<Footer />);

    expect(screen.getByText(/Avenida Gregorio/)).toBeInTheDocument();
  });
});
