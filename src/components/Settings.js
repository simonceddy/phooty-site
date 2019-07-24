import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import { themes } from '../shared/themes';
import primaryColorMap from '../shared/themes/primaryColorMap';
import secondaryColorMap from '../shared/themes/secondaryColorMap';

function Settings({
  currentTheme,
  setTheme,
  toggleSettings
}) {
  let lastId = 0;

  const primary = theme('mode', primaryColorMap);
  const secondary = theme('mode', secondaryColorMap);

  const SettingsBox = style.div`
  background-color: ${secondary};
  color: ${primary};
  border: solid thin ${primary};
  min-height: 280px;
  min-width: 280px;
`;

  const SelectWrapper = style.select`
  background-color: ${secondary};
  color: ${primary};
  border: solid thin ${primary};
`;

  const FinishedButton = style.button`
  background-color: ${secondary};
  color: ${primary};
  border: solid thin ${primary};
`;

  return (
    <SettingsBox className="flex flex-col flex-1 p-2">
      <h2 className="text-3xl">SETTINGS</h2>
      <div className="w-full flex flex-col flex-1">
        <div id="theme-selector" className="flex flex-row justify-between">
          <span>Select colour theme:</span>
          <SelectWrapper
            onChange={(e) => {
              e.preventDefault();
              setTheme(e.target.value);
            }}
            defaultValue={currentTheme}
          >
            {themes.map(({ mode, name }) => {
              lastId++;
              return (
                <option value={mode} key={lastId}>
                  {name}
                </option>
              );
            })}
          </SelectWrapper>
        </div>
      </div>
      <FinishedButton type="button" onClick={toggleSettings}>Finished!</FinishedButton>
    </SettingsBox>
  );
}

export default Settings;