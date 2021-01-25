/**
 *
 * HomePage
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageActions, reducer, sliceKey } from './slice';
import { selectLayout } from './selectors';
import { homePageSaga } from './saga';
// import { messages } from './messages';

import { Layout } from 'react-grid-layout';
import {
  GridLayout,
  itemDetails,
  generateRandomLayout,
  generateTimelineLayout,
} from './components/GridLayout';

interface Props {}

export const HomePage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    // On mount, we start with a randomized layout.
    dispatch(
      homePageActions.setLayout(generateRandomLayout(itemDetails.length)),
    );
  });

  const onLayoutChange = (layout: Layout[]) => {
    dispatch(homePageActions.setLayout(layout));
  };

  // const homePage = useSelector(selectHomePage);
  const layout = useSelector(selectLayout);

  const onClickMessItUp = () => {
    dispatch(
      homePageActions.setLayout(generateRandomLayout(itemDetails.length)),
    );
  };

  const onClickCleanItUp = () => {
    dispatch(homePageActions.setLayout(generateTimelineLayout(itemDetails)));
  };

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Div>
        <GridLayout
          layout={layout}
          onLayoutChange={onLayoutChange}
          onClickMessItUp={onClickMessItUp}
          onClickCleanItUp={onClickCleanItUp}
        />
        {/* <div>
          <span>Creativity meets persistence</span>
        </div>
        <button onClick={onClickCleanItUp}>Clean it up</button>
        <button onClick={onClickMessItUp}>Mess it up</button>
        <ReactGridLayout
          layout={layout}
          isBounded={true}
          className="layout"
          rowHeight={30}
          cols={12}
          onLayoutChange={onLayoutChange}
          compactType={null}
        >
          {generateDOM(layout)}
        </ReactGridLayout> */}
      </Div>
    </>
  );
});

const Div = styled.div``;

// {/* <div key="a">a</div>
//         <div key="b">
//           <Card
//             style={{
//               width: '100%',
//               height: '100%',
//               //  Scroll bar only when needed
//               overflow: 'auto',
//             }}
//           >
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content. Some quick example text to build
//                 on the card title and make up the bulk of the card's content.
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//         <div key="c">c</div>
//         <div key="d">d</div>
//         <div key="e">e</div>
//         <div key="f">f</div> */}
//           {/* <div key="g">g</div> */}
//           {/* {generateDOM(num_items)} */}
