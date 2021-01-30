import _ from 'lodash';
import { Layout } from 'react-grid-layout';

import { Item } from '../../types';

type SplitLayout = { [key: string]: Layout[] };
type CTimelineReduceResultTuple = [SplitLayout, number, string, Layout | null];
export function generateCondensedTimelineLayout(itemDetails: Item[]): Layout[] {
  // TODO: Change width and height based on item priority?
  const w = 3;
  const h = 8;

  const dateSplitLayouts = _.reduce(
    itemDetails,
    (
      result: CTimelineReduceResultTuple,
      item: Item,
    ): CTimelineReduceResultTuple => {
      const [splitLayouts, maxY, date, prevItem] = result;

      const isNewRow = (() => {
        // Initial row
        if (prevItem === null) return true;
        // This item needs to overflow to next row.
        if (prevItem.x + prevItem.w + w > 12) return true;
        return false;
      })();

      const prevY = prevItem === null ? 0 : prevItem.y;
      const prevX = prevItem === null ? 0 : prevItem.x;

      const x = isNewRow ? 0 : prevX + w;
      const y = isNewRow ? maxY + 2 : prevY;
      const newMaxY = Math.max(maxY, y + h);

      const totalItems = _.flatten(_.values(splitLayouts)).length;
      const nextItem = {
        i: totalItems.toString(),
        x: x,
        w: w,
        y: y,
        h: h,
      };

      const newDateSplitLayouts = ((): SplitLayout => {
        const matchingKeys = _.filter(_.keys(splitLayouts), (key: string) => {
          return _.includes(key, item.date);
        });

        const keyName = (() => {
          if (isNewRow || date !== item.date) {
            // New key name
            const keyNum = matchingKeys.length;
            return `${item.date}_${keyNum}`;
          }
          // Existing key name found.
          return [...matchingKeys].sort().reverse()[0];
        })();

        const updatedDateSplitLayouts = (() => {
          if (isNewRow || date !== item.date) {
            return {
              ...splitLayouts,
              [keyName]: [],
            };
          }
          return splitLayouts;
        })();

        const layoutGroup = updatedDateSplitLayouts[keyName];
        const newLayoutGroup = _.concat(layoutGroup, nextItem);
        return {
          ...updatedDateSplitLayouts,
          [keyName]: newLayoutGroup,
        };
      })();

      return [
        // layout
        newDateSplitLayouts,
        // maxY
        newMaxY,
        // date
        item.date,
        // prevItem
        nextItem,
      ];
    },
    [{}, -1, '', null],
  )[0];

  const splitLayouts = _.map(
    dateSplitLayouts,
    (layouts: Layout[], date: string) => {
      const firstElement = _.head(layouts);
      if (firstElement === undefined) return [];
      const x = firstElement.x;
      const y = firstElement.y - 1;
      return [
        {
          i: date,
          x: x,
          w: layouts.length * w,
          y: y,
          h: 1,
          maxH: 1,
        },
        ...layouts,
      ];
    },
  );
  // Sort by y else x
  return _.sortBy(_.flatten(splitLayouts), ['y', 'x']);
}

export function generateRandomLayout(numItems: number): Layout[] {
  return _.map(_.range(numItems), function (item: any, i: number) {
    // const w = Math.ceil(Math.random() * 4);
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: Math.round(Math.random() * 5) * 2,
      y: Math.floor(i / 6) * y,
      w: 3,
      h: 8,
      i: i.toString(),
    };
  });
}

function isInt(value: any): boolean {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

type TimelineReduceResultTuple = [Layout[], string, number, number];
export function generateTimelineLayout(itemDetails: Item[]): Layout[] {
  // NOTE: This is the predecessor to the `generateCondensedTimelineLayout` function.
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
      const nextW = 3;
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
