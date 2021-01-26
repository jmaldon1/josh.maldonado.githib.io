import { ItemWithoutId } from '../../types';
// import { BasicCard } from '../../components/BasicCard';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2020-12',
    priority: 3,
    title: 'Created Musher Python Module',
    image: {
      url: 'app/containers/HomePage/assets/audio_waves.jpg',
    },
    details: 'details about the item.',
    component: 'BasicCard',
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'b',
    image: {
      url: 'fake_url',
    },
    details: 'details about the item.',
    component: null,
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'c',
    image: {
      url: 'fake_url',
    },
    details: 'details about the item.',
    component: null,
  },
];
