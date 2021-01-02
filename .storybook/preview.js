import { addParameters, addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

addParameters({
  // viewMode: 'story',
  // docs: { page: null },
  options: {
    showRoots: true,
  },
  statuses: {
    Stable: '#29A347',
    Development: '#CC8000',
    Deprecated: '#F04B32',
  },
  facelift: {
    enhanceUi: true,
    defaultVariant: 'light',
  },
});

addDecorator(withPerformance);
