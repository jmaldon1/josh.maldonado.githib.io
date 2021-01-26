/**
 *
 * Asynchronously loads the component for BasicCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BasicCard = lazyLoad(
  () => import('./index'),
  module => module.BasicCard,
);
