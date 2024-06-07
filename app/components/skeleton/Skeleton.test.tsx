import React from 'react';
import { render } from '@testing-library/react-native';
import Skeleton from '.';

describe('Skeleton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Skeleton width={100} height={100} />);
    const skeletonView = getByTestId('skeleton-view');

    expect(skeletonView).toBeTruthy();
  });

  it('applies animation correctly', async () => {
    const { findByTestId } = render(<Skeleton width={100} height={100} />);
    const skeletonView = await findByTestId('skeleton-view');

    // Wait for animation to complete (adjust timeout as needed)
    await new Promise(resolve => setTimeout(resolve, 1500));

    expect(skeletonView.props.style.opacity).toBeCloseTo(0.55, 1);
  });
});
