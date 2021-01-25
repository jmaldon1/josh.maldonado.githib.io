import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

import { Layout } from 'react-grid-layout';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  layout: [],
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    setLayout(state, action: PayloadAction<Layout[]>) {
      state.layout = action.payload;
    },
  },
});

export const {
  actions: homePageActions,
  reducer,
  name: sliceKey,
} = homePageSlice;
