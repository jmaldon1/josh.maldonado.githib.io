import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2021-Jan',
    priority: 1,
    title: 'Created personal website!',
    image: {
      name: 'react-banner.jpg',
    },
    details: `
    <ul>
      <li>Created a personal website to keep an online presence.</li>
      <li>Tech: React, Redux, Typescript</li>
      <li><a href="https://github.com/jmaldon1/josh.maldonado.githib.io" target="_blank" rel="noopener noreferrer"">Source code</a></li>
    </ul>
    `,
    component: 'BasicCard',
  },
];
