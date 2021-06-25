import { ItemWithoutId } from '../../types';

export const itemDetailsWithoutId: ItemWithoutId[] = [
  {
    date: '2021-Mar',
    priority: 3,
    title: `Created a Video Game Addon`,
    details: `
    <ul>
      <li>Created my first addon for World of Warcraft.</li>
      <li>First time coding in Lua.</li>
      <li>Available at <a target="_blank" rel="noopener noreferrer" href="https://www.curseforge.com/wow/addons/world-of-parkour">Curseforge</a>.</li>
    </ul>
    `,
    image: {
      name: 'game_addon.png',
    },
    component: 'BasicCard',
  },
];
