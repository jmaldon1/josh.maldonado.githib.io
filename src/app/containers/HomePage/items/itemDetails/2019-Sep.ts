import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2019-Sep',
    priority: 1,
    title: 'Attended Strange Loop',
    image: {
      name: 'strange-loop-banner.png',
    },
    details: `
    <ul>
      <li>Attended my first programming conferece.</li>
      <li>Was shown programming from many new perspectives.</li>
      <li>Learned about many new technologies and current work going on.</li>
      <li>Interacted with many innovators in various spaces.</li>
    </ul>
    `,
    component: 'BasicCard',
  },
];
