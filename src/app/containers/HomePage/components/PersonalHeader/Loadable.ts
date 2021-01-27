/**
 *
 * Asynchronously loads the component for PersonalHeader
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PersonalHeader = lazyLoad(
  () => import('./index'),
  module => module.PersonalHeader,
);
