import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import InputField from '.';

/**
 * Test Scenario
 *
 * InputField component
 *  - should be rendered correctly when all required props are defined
 *  - should have the red border ring when the error message is defined
 *  - should render the error message when the error message is defined
 *  - should execute onChange function when it is given as a prop and the input is changed (typed)
 */

const placeholderText = 'Input field';

describe('InputField component', () => {
  it('should be rendered correctly when all required props are defined', () => {
    render(<InputField type="text" placeholder={placeholderText} />);
    const inputField = screen.queryByPlaceholderText(placeholderText);
    expect(inputField).toBeVisible();
  });

  it('should have the red border ring when the error message is defined', () => {
    render(
      <InputField
        type="text"
        errorMessage="Something went wrong."
        placeholder={placeholderText}
      />
    );
    const inputField = screen.queryByPlaceholderText(placeholderText);
    expect(inputField).toHaveClass('ring-red-300');
  });

  it('should render the error message when the error message is defined', () => {
    const errorMessageText = 'Something went wrong.';

    render(
      <InputField
        type="text"
        errorMessage={errorMessageText}
        placeholder={placeholderText}
      />
    );

    const errorMessage = screen.queryByText(errorMessageText);

    expect(errorMessage).toBeVisible();
  });

  it('should execute onChange function when it is given as a prop and the input is changed (typed)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <InputField
        type="text"
        onChange={onChange}
        placeholder={placeholderText}
      />
    );

    const inputField = screen.queryByPlaceholderText(placeholderText);

    await user.type(inputField, 'test');

    expect(onChange).toHaveBeenCalled();
  });
});
