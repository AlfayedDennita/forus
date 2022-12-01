import { render, screen } from '@testing-library/react';
import React from 'react';

import InputFieldGroup from './InputFieldGroup';
import InputField from '.';

/**
 * Test Scenario
 *
 * - InputFieldGroup component
 *  - should be rendered correctly when all required props are defined
 */

describe('InputFieldGroup component', () => {
  it('should be rendered correctly when all required props are defined', () => {
    const placeholderText = 'Input field';
    const labelText = 'Input Field Group';

    render(
      <InputFieldGroup labelText={labelText}>
        <InputField type="text" placeholder={placeholderText} />
      </InputFieldGroup>
    );

    const inputFieldGroup = screen.queryByLabelText(labelText);
    const inputField = screen.queryByPlaceholderText(placeholderText);

    expect(inputFieldGroup).toBeVisible();
    expect(inputField).toBeVisible();
  });
});
