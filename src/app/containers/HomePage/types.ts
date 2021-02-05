import { Layout, Layouts } from 'react-grid-layout';

import { BasicCard } from './components/BasicCard';
import { DateSeperator } from './components/DateSeperator';

/* --- STATE --- */
export interface HomePageState {
  layouts: Layouts;
  breakpoint: string;
  itemDetails: Item[];
  showHint: boolean;
  randomNumber: number;
}

export type ContainerState = HomePageState;

export interface ItemImage {
  name: string | null;
}

export interface ItemWithoutId {
  date: string;
  priority: number;
  title: string;
  image: ItemImage;
  details: string;
  component: string | null;
}

export interface Item {
  i: string;
  date: string;
  priority: number;
  title: string;
  image: ItemImage;
  details: string;
  component: string | null;
}

export interface ItemWithLayout {
  i: string;
  date: string;
  priority: number;
  title: string;
  image: ItemImage;
  details: string;
  component: string | null;
  layout: Layout;
}

export interface ItemDateSeperator {
  isDateSeperator: boolean;
  component: typeof DateSeperator;
  layout: Layout;
}

export interface ItemDOM {
  i: string;
  date: string;
  priority: number;
  title: string;
  image: ItemImage;
  details: string;
  component: typeof BasicCard | null;
  layout: Layout;
}
