/**
 *
 * Asynchronously loads the component for BaseItem
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BaseItem = lazyLoad(
  () => import('./index'),
  module => module.BaseItem,
);
