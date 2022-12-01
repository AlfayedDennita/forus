import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Button from '.';

/**
 * Test Scenario
 *
 * Button component
 *  - should be rendered correctly when all required props are defined
 *  - should render a button with type="button" attribute when the type is "button"
 *  - should render a button with type="submit" attribute when the type is "submit"
 *  - should render a link when the type is "link"
 *  - should have the primary background color when the variant is "primary"
 *  - should have the zinc background color when the variant is "secondary"
 *  - should execute the onClick function when it is given as a prop and the button is clicked
 */

const buttonText = 'Button';

describe('Button component', () => {
  it('should be rendered correctly when all required props are defined', () => {
    render(<Button type="button">{buttonText}</Button>);
    const button = screen.queryByText(buttonText);
    expect(button).toBeVisible();
  });

  it('should render a button with type="button" attribute when the type is "button"', () => {
    render(<Button type="button">{buttonText}</Button>);
    const button = screen.queryByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render a button with type="submit" attribute when the type is "submit"', () => {
    render(<Button type="submit">{buttonText}</Button>);
    const button = screen.queryByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render a link when the type is "link"', () => {
    render(
      <BrowserRouter>
        <Button type="link">{buttonText}</Button>
      </BrowserRouter>
    );
    const button = screen.queryByRole('link');
    expect(button).toBeVisible();
  });

  it('should have the primary background color when the variant is "primary"', () => {
    render(
      <Button type="button" variant="primary">
        {buttonText}
      </Button>
    );
    const button = screen.queryByText(buttonText);
    expect(button).toHaveClass('bg-primary-500');
  });

  it('should have the zinc background color when the variant is "secondary"', () => {
    render(
      <Button type="button" variant="secondary">
        {buttonText}
      </Button>
    );
    const button = screen.queryByText(buttonText);
    expect(button).toHaveClass('bg-zinc-100');
  });

  it('should execute the onClick function when it is given as a prop and the button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button type="button" onClick={onClick}>
        {buttonText}
      </Button>
    );

    const button = screen.queryByText(buttonText);

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
