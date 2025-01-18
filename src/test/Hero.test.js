import React, { Fragment } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../landing_page/home/Hero';

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Section");
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: /signup for free/i });
    expect(signupButton).toBeInTheDocument();
  });
});
