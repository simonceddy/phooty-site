import primary from './primaryColorMap';
import secondary from './secondaryColorMap';
import primaryTitle from './primaryTitleColorMap';

export const themes = [
  { mode: 'light', name: 'Light' },
  { mode: 'dark', name: 'Dark' },
  { mode: 'heaveHo', name: 'Heave Ho modern' },
  { mode: 'heaveHoClassic', name: 'Heave Ho classic' },
  { mode: 'homeOrFarAway', name: 'At Home or Far Away' },
];

export const maps = {
  primary,
  secondary,
  primaryTitle
};

export default {
  themes,
  maps
};
