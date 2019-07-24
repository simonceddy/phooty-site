import heaveHo from './heaveHo';
import heaveHoClassic from './heaveHoClassic';
import atHomeOrFarAway from './atHomeOrFarAway';
import nobleBanner from './nobleBanner';
import admirationOfTheNation from './admirationOfTheNation';

const maps = {
  primary: {},
  secondary: {},
  primaryTitle: {}
};

export const themes = () => {
  const presets = [
    heaveHo,
    heaveHoClassic,
    atHomeOrFarAway,
    nobleBanner,
    admirationOfTheNation
  ];

  presets.map(({ mode, map }) => {
    if (map === undefined) return null;
    maps.primary[mode] = map.primary || null;
    maps.secondary[mode] = map.secondary || null;
    maps.primaryTitle[mode] = map.primaryTitle || null;
    return true;
  });

  return { presets, maps };
};

export default {
  themes,
  maps
};
