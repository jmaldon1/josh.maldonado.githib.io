import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2020-Nov',
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
];
