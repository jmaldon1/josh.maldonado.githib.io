import { ItemWithoutId } from '../../types';
// import { BasicCard } from '../../components/BasicCard';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2020-12',
    priority: 3,
    title: `
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jmaldon1/Musher">
      <b>Musher: Musical Key Detection Python Module</b>
    </a>`,
    details: `
    <ul>
      <li>Finished my first python module</li>
      <li>
        CI/CD using Github Actions, automated deployment to 
        <a href="https://pypi.org/project/musher/" target="_blank" rel="noopener noreferrer">
          PyPI
        </a>
      </li>
      <li>Logic Built with C++ then wrapped in Python</li>
    </ul>
    `,
    image: {
      name: 'audio_waves.jpg',
    },
    component: 'BasicCard',
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'b',
    image: {
      name: null,
    },
    details: 'details about the item.',
    component: null,
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'c',
    image: {
      name: null,
    },
    details: 'details about the item.',
    component: null,
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'd',
    image: {
      name: null,
    },
    details: 'details about the item.',
    component: null,
  },
];
