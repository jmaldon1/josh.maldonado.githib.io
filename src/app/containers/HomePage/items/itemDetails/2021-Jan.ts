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
      <li><a href="https://github.com/jmaldon1/josh.maldonado.githib.io" target="_blank" rel="noopener noreferrer">Source code</a></li>
    </ul>
    `,
    component: 'BasicCard',
  },
  {
    date: '2021-Jan',
    priority: 1,
    title: 'Mock Database Models',
    image: {
      name: 'db-model-banner.png',
    },
    details: `
    <ul>
      <li>Created a simple database model of a mock audio plugin manager</li>
      <li>Modeled with <a href="https://pgmodeler.io/" target="_blank" rel="noopener noreferrer">PgModeler</a></li>
      <li><a href="https://postgrest.org/en/latest/" target="_blank" rel="noopener noreferrer">PostgREST</a> as the RESTful API.</li>
      <li>
        <a href="https://github.com/jmaldon1/mock-database-designs/blob/main/plugin-platform/model-picture.png" target="_blank" rel="noopener noreferrer">
          Link to model image
        </a>
      </li>
    </ul>
    `,
    component: 'BasicCard',
  },
];
