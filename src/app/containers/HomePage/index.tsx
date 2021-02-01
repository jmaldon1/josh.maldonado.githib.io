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
import {
  selectLayouts,
  selectItemDetails,
  selectShowHint,
  selectRandomNumber,
} from './selectors';
import { homePageSaga } from './saga';

import { Layout, Layouts } from 'react-grid-layout';
import { GridLayout } from './components/GridLayout';
import {
  generateRandomLayout,
  generateCondensedTimelineLayout,
} from './components/GridLayout/generateLayouts';
import { PersonalHeader } from './components/PersonalHeader';

import ReactGA from 'react-ga';
import _ from 'lodash';

// Google Analytics
ReactGA.initialize('G-814B22G7SF');
ReactGA.pageview(window.location.pathname + window.location.search);

interface Props {}

export const HomePage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const dispatch = useDispatch();
  const itemDetails = useSelector(selectItemDetails);
  const layouts = useSelector(selectLayouts);
  const showHint = useSelector(selectShowHint);
  const randomNumber = useSelector(selectRandomNumber);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, [itemDetails]);
  };
  useEffectOnMount(() => {
    if (itemDetails.length === 0 || _.flatten(_.values(layouts)).length === 0) {
      // Load the items.
      dispatch(homePageActions.loadItems());
      // Start with a randomized layout.
      const randomLayout = generateRandomLayout(itemDetails.length);
      const allLayouts: Layouts = {
        lg: randomLayout,
        md: randomLayout,
        sm: randomLayout,
        xs: randomLayout,
        xxs: randomLayout,
      };
      dispatch(homePageActions.setLayouts(allLayouts));
    }
  });

  const onLayoutChange = (layout: Layout[], allLayouts: Layouts) => {
    dispatch(homePageActions.setLayouts(allLayouts));
  };

  const onClickRandomize = () => {
    const randomLayout = generateRandomLayout(itemDetails.length);
    const allLayouts: Layouts = {
      lg: randomLayout,
      md: randomLayout,
      sm: randomLayout,
      xs: randomLayout,
      xxs: randomLayout,
    };
    dispatch(homePageActions.setLayouts(allLayouts));
  };

  const onClickTimeline = () => {
    const allLayouts: Layouts = {
      lg: generateCondensedTimelineLayout(itemDetails, 12),
      md: generateCondensedTimelineLayout(itemDetails, 10),
      sm: generateCondensedTimelineLayout(itemDetails, 6),
      xs: generateCondensedTimelineLayout(itemDetails, 4),
      xxs: generateCondensedTimelineLayout(itemDetails, 3),
    };
    dispatch(homePageActions.setLayouts(allLayouts));
    dispatch(homePageActions.hideHint());
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
          layouts={layouts}
          itemDetails={itemDetails}
          onLayoutChange={onLayoutChange}
          onClickRandomize={onClickRandomize}
          onClickTimeline={onClickTimeline}
          showHint={showHint}
          randomNumber={randomNumber}
        />
      </Div>
    </>
  );
});

const Div = styled.div``;
