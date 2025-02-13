import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImagesCarousel } from './ImagesCarousel';

describe('ImagesCarousel', () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
  ];

  const altText = 'Test Image';

  it('renders the first image', () => {
    render(<ImagesCarousel images={images} alt={altText} />);

    const image = screen.getByAltText(altText);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[0]))
    );
  });

  it('shows the next image when the next button is clicked', () => {
    render(<ImagesCarousel images={images} alt={altText} />);

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    const image = screen.getByAltText(altText);
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[1]))
    );
  });

  it('shows the previous image when the previous button is clicked', () => {
    render(<ImagesCarousel images={images} alt={altText} />);

    const prevButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);

    const image = screen.getByAltText(altText);
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[1]))
    );
  });

  it('should loop to the first image after the last image', () => {
    render(<ImagesCarousel images={images} alt={altText} />);

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    const image = screen.getByAltText(altText);
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[1]))
    );

    fireEvent.click(nextButton);

    const newImage = screen.getByAltText(altText);
    expect(newImage).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[0]))
    );
  });

  it('should loop to the last image before the first image', () => {
    render(<ImagesCarousel images={images} alt={altText} />);

    const prevButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);

    const image = screen.getByAltText(altText);
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[1]))
    );

    fireEvent.click(prevButton);

    const newImage = screen.getByAltText(altText);
    expect(newImage).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[0]))
    );
  });
});
