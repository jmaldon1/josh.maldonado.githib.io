import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2019-Nov',
    priority: 1,
    title: 'Started Musher, my first full fledged python module',
    image: {
      name: 'wip-banner.png',
    },
    details: `
    Goals:
    <ul>
      <li>Detect the key of a song given a music file.</li>
      <li>Allow it to run on any platform.</li>
      <li>Use C++ logic for speed benefits.</li>
      <li>Use Python as a wrapper for ease of use.</li>
      <li><a href="https://github.com/jmaldon1/Musher" target="_blank" rel="noopener noreferrer"">Source code</a></li>
    </ul>
    `,
    component: 'BasicCard',
  },
];
