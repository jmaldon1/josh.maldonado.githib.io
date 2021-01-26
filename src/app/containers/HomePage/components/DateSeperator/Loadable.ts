/**
 *
 * Asynchronously loads the component for DateSeperator
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DateSeperator = lazyLoad(
  () => import('./index'),
  module => module.DateSeperator,
);
