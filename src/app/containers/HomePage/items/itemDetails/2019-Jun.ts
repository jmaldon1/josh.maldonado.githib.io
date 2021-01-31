import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2019-Jun',
    priority: 1,
    title: `
    <a href="https://medium.com/hackernoon/learning-bitcoins-lightning-network-with-go-set-up-deea944b920e" target="_blank" rel="noopener noreferrer">
      Learning Bitcoin’s Lightning Network with Go (Set up)
    </a>
    `,
    image: {
      name: 'bitcoin-banner.png',
    },
    details: `
    <ul>
      <li>Wrote my first Medium article under the Hackernoon publication.</li>
      <li>Tried out one of bitcoins newest protocols.</li>
      <li>First time diving into Golang.</li>
    </ul>
    `,
    component: 'BasicCard',
  },
];
