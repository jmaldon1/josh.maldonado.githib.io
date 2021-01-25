import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.homePage || initialState;

export const selectHomePage = createSelector(
  [selectDomain],
  homePageState => homePageState,
);

export const selectLayout = createSelector(
  [selectDomain],
  homePageState => homePageState.layout,
);
