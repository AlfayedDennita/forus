import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { render } from '../../../../test-utils';
import Alert from '.';

/**
 * Test Scenario
 *
 * - Alert component
 *  - should be rendered correctly when all required props are defined
 *  - should disappear when close button clicked
 *  - should render the correct icon when the type is "success"
 *  - should render the correct icon when the type is "danger"
 *  - should render the correct icon when the type is "warning"
 *  - should have the green background color when the type is "success"
 *  - should have the red background color when the type is "danger"
 *  - should have the yellow background color when the type is "warning"
 */

const alertTestId = 'alert';
const alertMessage = 'Alert message';

describe('Alert component', () => {
  it('should be rendered correctly when all required props are defined', () => {
    render(<Alert type="success" message={alertMessage} />);

    const alert = screen.queryByTestId(alertTestId);
    const alertText = screen.queryByText(alertMessage);

    expect(alert).toBeVisible();
    expect(alertText).toBeVisible();
  });

  it('should disappear when close button clicked', async () => {
    const user = userEvent.setup();

    render(<Alert type="success" message={alertMessage} />);

    const closeButton = screen.queryByRole('button', { name: 'Close' });
    await user.click(closeButton);

    const alert = screen.queryByTestId(alertTestId);
    expect(alert).toBeNull();
  });

  it('should render the correct icon when the type is "success"', () => {
    render(<Alert type="success" message={alertMessage} />);
    const successIcon = screen.queryByTestId('alert-success-icon');
    expect(successIcon).toBeVisible();
  });

  it('should render the correct icon when the type is "danger"', () => {
    render(<Alert type="danger" message={alertMessage} />);
    const dangerIcon = screen.queryByTestId('alert-danger-icon');
    expect(dangerIcon).toBeVisible();
  });

  it('should render the correct icon when the type is "warning"', () => {
    render(<Alert type="warning" message={alertMessage} />);
    const warningIcon = screen.queryByTestId('alert-warning-icon');
    expect(warningIcon).toBeVisible();
  });

  it('should have the green background color when the type is "success"', () => {
    render(<Alert type="success" message={alertMessage} />);
    const alert = screen.queryByTestId(alertTestId);
    expect(alert).toHaveClass('bg-green-200');
  });

  it('should have the red background color when the type is "danger"', () => {
    render(<Alert type="danger" message={alertMessage} />);
    const alert = screen.queryByTestId(alertTestId);
    expect(alert).toHaveClass('bg-red-200');
  });

  it('should have the yellow background color when the type is "warning"', () => {
    render(<Alert type="warning" message={alertMessage} />);
    const alert = screen.queryByTestId(alertTestId);
    expect(alert).toHaveClass('bg-yellow-200');
  });
});
