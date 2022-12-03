import { render, screen } from '@testing-library/react';
import React from 'react';

import BrandIcon from '.';

/**
 * Test Scenario
 *
 * - BrandIcon component
 *  - should be rendered correctly
 */

describe('BrandIcon component', () => {
  it('should be rendered correctly', () => {
    render(<BrandIcon />);
    const brandIcon = screen.queryByRole('img', { alt: 'Forus Icon' });
    expect(brandIcon).toBeVisible();
  });
});
