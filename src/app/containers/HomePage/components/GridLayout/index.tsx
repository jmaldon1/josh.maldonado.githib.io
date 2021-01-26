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
        <div>
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
          {generateDOM(layout, itemDetails)}
        </ReactGridLayout>
        <GridLayoutStyle />
      </Div>
    );
  },
);

const Div = styled.div``;

function isInt(value: any): boolean {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

type TimelineReduceResultTuple = [Layout[], string, number, number];

export function generateTimelineLayout(itemDetails: Item[]): Layout[] {
  return _.reduce(
    itemDetails,
    function (
      result: TimelineReduceResultTuple,
      item: Item,
    ): TimelineReduceResultTuple {
      const createNextResultFn = (
        result: TimelineReduceResultTuple,
      ): TimelineReduceResultTuple => {
        // Create a timeline date seperator or just return the result.
        const [layout, date, maxY, totalItems] = result;
        if (date !== item.date) {
          // Create the timeline date seperator.
          const timelineSeperator = {
            i: item.date,
            x: 5,
            w: 2,
            maxW: 2,
            y: maxY,
            h: 1,
            maxH: 1,
          };
          // NOTE: Functional would make a copy of the array with the newly added element.
          layout.push(timelineSeperator);
          return [layout, item.date, maxY, totalItems];
        }
        return result;
      };

      const [layout, , maxY, totalItems] = createNextResultFn(result);
      const prevItem = layout[layout.length - 1];
      const prevX = prevItem.x;
      const prevY = prevItem.y;
      const prevW = prevItem.w;
      const isPrevItemATimelineSeperator = !isInt(prevItem.i);

      // TODO: Change width and height based on item priority?
      const nextW = 4;
      const nextH = 8;
      const createNextXAndYFn = (
        prevX: number,
        prevY: number,
        prevW: number,
        isPrevItemATimelineSeperator: boolean,
      ): [number, number] => {
        if (isPrevItemATimelineSeperator) {
          const nextX = 0;
          const nextY = maxY + 1;
          return [nextX, nextY];
        } else {
          const nextX = prevX + prevW;
          const nextY = prevY;

          if (nextX + nextW > 12) {
            // Next item should be put onto the next row
            return [0, maxY];
          }
          return [nextX, nextY];
        }
      };
      const [nextX, nextY] = createNextXAndYFn(
        prevX,
        prevY,
        prevW,
        isPrevItemATimelineSeperator,
      );

      const newMaxY = Math.max(maxY, nextY + nextH);
      const nextItem = {
        i: totalItems.toString(),
        x: nextX,
        w: nextW,
        y: nextY,
        h: nextH,
      };
      layout.push(nextItem);
      // create a normal layout item underneath the date layout seperator item
      return [layout, item.date, newMaxY, totalItems + 1];
    },
    [[], '', 0, 0],
  )[0];
}

export function generateRandomLayout(numItems: number): Layout[] {
  return _.map(_.range(numItems), function (item: any, i: number) {
    const w = Math.ceil(Math.random() * 4);
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: Math.round(Math.random() * 5) * 2,
      y: Math.floor(i / 6) * y,
      w: w,
      h: y,
      i: i.toString(),
    };
  });
}

function itemDOMify(
  itemDetailsWithLayout: (ItemWithLayout | ItemDateSeperator)[],
): ItemDOM[] {
  return _.map(itemDetailsWithLayout, (item: any) => {
    if (item.isDateSeperator) {
      return {
        ...item,
        component: DateSeperator,
      };
    }

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

const joinItemDetailsWithLayout = (layout: Layout[], itemDetails: Item[]) => {
  return _.map(layout, (layoutItem: any) => {
    const layoutItemIndex = layoutItem.i;
    const matchingItemIndex = _.findIndex(itemDetails, (obj: Item): boolean => {
      return obj.i === layoutItemIndex;
    });
    if (matchingItemIndex === -1) {
      // If theres no match, its a date seperator.
      return {
        isDateSeperator: true,
        component: null,
        layout: layoutItem,
      };
    }

    return {
      ...itemDetails[matchingItemIndex],
      layout: layoutItem,
    };
  });
};

function generateDOM(layout: Layout[], itemDetails: Item[]): any[] {
  // Join the layout item with its details.
  const itemDetailsWithLayout = joinItemDetailsWithLayout(layout, itemDetails);
  const itemDOMs = itemDOMify(itemDetailsWithLayout);

  return _.map(itemDOMs, (item: ItemDOM) => {
    const layout = item.layout;
    if (item.component === null) {
      return (
        <div key={layout.i}>
          <span className="text">{layout.i}</span>
        </div>
      );
    }
    return (
      <div key={layout.i} className="custom-component">
        <item.component {...item} />
      </div>
    );
  });
}
