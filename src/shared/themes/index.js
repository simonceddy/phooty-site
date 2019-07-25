import heaveHo from './heaveHo';
import heaveHoClassic from './heaveHoClassic';
import dawnTilDark from './dawnTilDark';
import nobleBanner from './nobleBanner';
import admirationOfTheNation from './admirationOfTheNation';
import ifYourHeartBeatsTrue from './ifYourHeartBeatsTrue';
import ridingTheBumps from './ridingTheBumps';

const maps = {
  primary: {},
  secondary: {},
  primaryTitle: {}
};

export const themes = () => {
  const presets = [
    admirationOfTheNation,
    heaveHo,
    heaveHoClassic,
    dawnTilDark,
    ridingTheBumps,
    ifYourHeartBeatsTrue,
    nobleBanner,
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
