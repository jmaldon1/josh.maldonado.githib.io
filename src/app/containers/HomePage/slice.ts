import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Item } from './types';

import { Layouts } from 'react-grid-layout';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  layouts: {
    lg: [],
    md: [],
    sm: [],
    xs: [],
    xxs: [],
  },
  itemDetails: [],
  showHint: true,
  randomNumber: Math.random(),
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadItems(state) {
      // Empty action, just used to trigger the saga.
    },
    setLayouts(state, action: PayloadAction<Layouts>) {
      state.layouts = action.payload;
    },
    setItemDetails(state, action: PayloadAction<Item[]>) {
      state.itemDetails = action.payload;
    },
    hideHint(state) {
      state.showHint = false;
    },
  },
});

export const {
  actions: homePageActions,
  reducer,
  name: sliceKey,
} = homePageSlice;
