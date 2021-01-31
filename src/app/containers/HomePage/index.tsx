/**
 *
 * HomePage
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageActions, reducer, sliceKey } from './slice';
import { selectLayout, selectItemDetails, selectShowHint } from './selectors';
import { homePageSaga } from './saga';

import { Layout } from 'react-grid-layout';
import { GridLayout } from './components/GridLayout';
import {
  generateRandomLayout,
  generateCondensedTimelineLayout,
} from './components/GridLayout/generateLayouts';
import { PersonalHeader } from './components/PersonalHeader';

interface Props {}

export const HomePage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const dispatch = useDispatch();
  const itemDetails = useSelector(selectItemDetails);
  const layout = useSelector(selectLayout);
  const showHint = useSelector(selectShowHint);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, [itemDetails]);
  };
  useEffectOnMount(() => {
    if (itemDetails.length === 0 || layout.length === 0) {
      // Load the items.
      dispatch(homePageActions.loadItems());
      // Start with a randomized layout.
      dispatch(
        homePageActions.setLayout(generateRandomLayout(itemDetails.length)),
      );
    }
  });

  const onLayoutChange = (layout: Layout[]) => {
    dispatch(homePageActions.setLayout(layout));
  };

  const onClickMessItUp = () => {
    dispatch(
      homePageActions.setLayout(generateRandomLayout(itemDetails.length)),
    );
  };

  const onClickCleanItUp = () => {
    dispatch(
      homePageActions.setLayout(generateCondensedTimelineLayout(itemDetails)),
    );
    dispatch(homePageActions.stopShowingHint());
  };
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Josh's Timeline" />
      </Helmet>
      <Div>
        <PersonalHeader />
        <GridLayout
          layout={layout}
          itemDetails={itemDetails}
          onLayoutChange={onLayoutChange}
          onClickMessItUp={onClickMessItUp}
          onClickCleanItUp={onClickCleanItUp}
          showHint={showHint}
        />
      </Div>
    </>
  );
});

const Div = styled.div``;
