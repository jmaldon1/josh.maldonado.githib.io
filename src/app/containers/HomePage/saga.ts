import { call, put, takeLatest } from 'redux-saga/effects';
import { homePageActions } from './slice';
import * as itemImportsJson from './items/itemImports.json';
import { Item, ItemWithoutId } from './types';

import moment from 'moment';
import _ from 'lodash';

export async function fetchItemDetailsFromFilesystem(
  itemImports: string[],
): Promise<{}> {
  // Flatten the results into a 1D array.
  return _.flatten(
    // Resolve the array of promises into a 2D array of results.
    await Promise.all(
      // Map will return an array of promises.
      _.map(itemImports, async (itemImport: string) => {
        // Dynamic import directory must be static.
        // https://github.com/webpack/webpack/issues/6680#issuecomment-370800037
        const module = await import(
          `app/containers/HomePage/items/itemDetails/${itemImport}.ts`
        );
        return module.itemDetailsWithoutId;
      }),
    ),
  );
}

export function* getItemDetails() {
  const itemImports = itemImportsJson.imports;
  const itemDetailsWithoutIds = yield call(
    fetchItemDetailsFromFilesystem,
    itemImports,
  );

  // Sort by date (Latest date will come first in the array [Descending])
  // Reserving the input allows us to order the imported item details correctly.
  const sortedItemDetailsWithoutId = _.sortBy(itemDetailsWithoutIds.reverse(), [
    (o: ItemWithoutId): Date => {
      // Need to convert to a date object to get an accurate sort.
      return moment(o.date, 'YYYY-MMM').toDate();
    },
  ]).reverse();

  // Add an ID to each item.
  const itemDetails = _.map(
    sortedItemDetailsWithoutId,
    (item: any, index: number): Item => {
      return { ...item, i: index.toString() };
    },
  );

  // Add to store
  yield put(homePageActions.setItemDetails(itemDetails));
}

export function* homePageSaga() {
  yield takeLatest(homePageActions.loadItems.type, getItemDetails);
}
