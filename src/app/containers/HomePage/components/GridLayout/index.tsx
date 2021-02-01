/**
 *
 * GridLayout
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { WidthProvider, Responsive, Layout, Layouts } from 'react-grid-layout';
import _ from 'lodash';

import { GridLayoutStyle } from './styles';
import { Item, ItemWithLayout, ItemDateSeperator, ItemDOM } from '../../types';
import { BasicCard } from '../BasicCard';
import { DateSeperator } from '../DateSeperator';
import { BaseItem } from '../BaseItem';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Props {
  layouts: Layouts;
  itemDetails: Item[];
  onLayoutChange: (layout: Layout[], allLayouts: Layouts) => void;
  onClickTimeline: React.MouseEventHandler<HTMLButtonElement>;
  onClickRandomize: React.MouseEventHandler<HTMLButtonElement>;
  showHint: boolean;
  randomNumber: number;
}

export const GridLayout = memo(
  ({
    layouts,
    itemDetails,
    onLayoutChange,
    onClickTimeline,
    onClickRandomize,
    showHint,
    randomNumber,
  }: Props) => {
    return (
      <Div>
        <TextCenteredDiv>
          <h4 id="Headline">What am I up to?</h4>
        </TextCenteredDiv>
        <TextCenteredDiv>
          {LayoutButtons(onClickTimeline, onClickRandomize, showHint)}
        </TextCenteredDiv>
        <ResponsiveGridLayout
          draggableHandle=".draggable"
          layouts={layouts}
          isBounded={true}
          className="layout"
          rowHeight={30}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 3 }}
          onLayoutChange={onLayoutChange}
          compactType={null}
        >
          {generateDOM(layouts.lg, itemDetails, randomNumber)}
        </ResponsiveGridLayout>
        <GridLayoutStyle />
      </Div>
    );
  },
);

const Div = styled.div``;

const Divider = styled.div`
  width: 15px;
  height: auto;
  display: inline-block;
`;

const TextCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const displayHint = (showHint: boolean) => {
  if (!showHint) return null;
  return <small>HINT: press this ---&gt;</small>;
};

const LayoutButtons = (
  onClickTimeline: React.MouseEventHandler<HTMLButtonElement>,
  onClickRandomize: React.MouseEventHandler<HTMLButtonElement>,
  showHint: boolean,
) => {
  return (
    <div>
      {displayHint(showHint)}
      <Divider />
      <button onClick={onClickTimeline}>Timeline</button>
      <small>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jmaldon1/josh.maldonado.githib.io/blob/fb1ce642f286ac28a121605c37fecca6e34b0cef/src/app/containers/HomePage/components/GridLayout/generateLayouts.ts#L6-L120"
        >
          (source code)
        </a>
      </small>
      <Divider />
      <button onClick={onClickRandomize}>Randomize</button>
      <small>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jmaldon1/josh.maldonado.githib.io/blob/fb1ce642f286ac28a121605c37fecca6e34b0cef/src/app/containers/HomePage/components/GridLayout/generateLayouts.ts#L122-L134"
        >
          (source code)
        </a>
      </small>
    </div>
  );
};

function itemDOMify(
  itemDetailsWithLayout: (ItemWithLayout | ItemDateSeperator)[],
): (ItemDOM | ItemDateSeperator)[] {
  return _.map(itemDetailsWithLayout, (item: any) => {
    switch (item.component) {
      case 'BasicCard':
        return {
          ...item,
          component: BasicCard,
        };
      default:
        return item;
    }
  });
}

const joinItemDetailsWithLayout = (
  layout: Layout[],
  itemDetails: Item[],
): (ItemWithLayout | ItemDateSeperator)[] => {
  return _.map(layout, (layoutItem: any) => {
    const layoutItemIndex = layoutItem.i;
    const matchingItemIndex = _.findIndex(itemDetails, (obj: Item): boolean => {
      return obj.i === layoutItemIndex;
    });
    if (matchingItemIndex === -1) {
      // If theres no match, its a date seperator.
      return {
        isDateSeperator: true,
        component: DateSeperator,
        layout: layoutItem,
      };
    }

    return {
      ...itemDetails[matchingItemIndex],
      layout: layoutItem,
    };
  });
};

type ItemDOMUnion = ItemDOM | ItemDateSeperator;

function generateDOM(
  layout: Layout[],
  itemDetails: Item[],
  randomNumber: number,
): JSX.Element[] {
  // Join the layout item with its details.
  const itemDetailsWithLayout = joinItemDetailsWithLayout(layout, itemDetails);
  const itemDOMs = itemDOMify(itemDetailsWithLayout);

  return _.map(itemDOMs, (item: ItemDOMUnion) => {
    const layout = item.layout;
    if (item.component === null) {
      // We haven't specified the component to use for this item,
      // so just generate a generic box.
      return (
        <div key={layout.i}>
          <BaseItem>
            <span className="text">{layout.i}</span>
          </BaseItem>
        </div>
      );
    }
    return (
      <div key={layout.i} className="custom-component">
        {'isDateSeperator' in item ? (
          // A date seperator is not a base item.
          <div className="draggable">
            <item.component {...item} randomNumber={randomNumber} />
          </div>
        ) : (
          <BaseItem>
            <item.component {...item} />
          </BaseItem>
        )}
      </div>
    );
  });
}
