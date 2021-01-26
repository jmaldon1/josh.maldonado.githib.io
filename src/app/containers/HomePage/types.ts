import { Layout } from 'react-grid-layout';

import { BasicCard } from './components/BasicCard';

/* --- STATE --- */
export interface HomePageState {
  layout: Layout[];
  itemDetails: Item[];
}

export type ContainerState = HomePageState;

export interface ItemImage {
  url: string;
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
  component: string | null;
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
