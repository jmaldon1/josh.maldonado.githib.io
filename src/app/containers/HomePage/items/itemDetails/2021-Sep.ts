import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2021-Mar',
    priority: 3,
    title: `Building API's with <a target="_blank" rel="noopener noreferrer" href="https://github.com/tiangolo/fastapi">Fast API</a>`,
    details: `
    <ul>
      <li>Building up my knowledge in API design and standards.</li>
      <li>Created an example <a target="_blank" rel="noopener noreferrer" href="https://github.com/jmaldon1/fast-api-oauth">git repo</a>
       showcasing how oauth is designed using Fast API.</li>
    </ul>
    `,
    image: {
      name: 'fast-api-banner.png',
    },
    component: 'BasicCard',
  },
];
