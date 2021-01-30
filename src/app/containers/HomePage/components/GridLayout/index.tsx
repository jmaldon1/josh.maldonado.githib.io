/**
 *
 * GridLayout
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import RGL, { WidthProvider, Layout } from 'react-grid-layout';
import _ from 'lodash';

import { GridLayoutStyle } from './styles';
import { Item, ItemWithLayout, ItemDateSeperator, ItemDOM } from '../../types';
import { BasicCard } from '../BasicCard';
import { DateSeperator } from '../DateSeperator';
import { BaseItem } from '../BaseItem';

const ReactGridLayout = WidthProvider(RGL);

interface Props {
  layout: Layout[];
  itemDetails: Item[];
  onLayoutChange: (layout: Layout[]) => void;
  onClickMessItUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickCleanItUp: React.MouseEventHandler<HTMLButtonElement>;
}

export const GridLayout = memo(
  ({
    layout,
    itemDetails,
    onLayoutChange,
    onClickMessItUp,
    onClickCleanItUp,
  }: Props) => {
    return (
      <Div>
        <TextCenteredDiv>
          <h1>What am I up too?</h1>
        </TextCenteredDiv>
        <TextCenteredDiv>
          <button onClick={onClickCleanItUp}>Timeline</button>
          <button onClick={onClickMessItUp}>Randomize</button>
        </TextCenteredDiv>
        <ReactGridLayout
          draggableHandle=".draggable"
          layout={layout}
          isBounded={true}
          className="layout"
          rowHeight={30}
          cols={12}
          onLayoutChange={onLayoutChange}
          compactType={null}
        >
          {generateDOM(layout, itemDetails)}
        </ReactGridLayout>
        <GridLayoutStyle />
      </Div>
    );
  },
);

const Div = styled.div``;

const TextCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

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

function generateDOM(layout: Layout[], itemDetails: Item[]): any[] {
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
            <item.component {...item} />
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
