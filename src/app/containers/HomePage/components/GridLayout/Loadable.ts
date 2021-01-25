/**
 *
 * Asynchronously loads the component for GridLayout
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GridLayout = lazyLoad(
  () => import('./index'),
  module => module.GridLayout,
);
