import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Item } from './types';

import { Layout } from 'react-grid-layout';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  layout: [],
  itemDetails: [],
  showHint: true,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadItems(state) {
      // Empty action, just used to trigger the saga.
    },
    setLayout(state, action: PayloadAction<Layout[]>) {
      state.layout = action.payload;
    },
    setItemDetails(state, action: PayloadAction<Item[]>) {
      state.itemDetails = action.payload;
    },
    stopShowingHint(state) {
      state.showHint = false;
    },
  },
});

export const {
  actions: homePageActions,
  reducer,
  name: sliceKey,
} = homePageSlice;
