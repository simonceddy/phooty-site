import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import { themes } from '../shared/themes';

const themeHandler = themes();

const primary = theme('mode', themeHandler.maps.primary);
const secondary = theme('mode', themeHandler.maps.secondary);

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

function Settings({
  currentTheme,
  setTheme,
  toggleSettings
}) {
  let lastId = 0;

  return (
    <SettingsBox className="flex flex-col flex-1 p-2">
      <h2 className="text-3xl mb-2">SETTINGS</h2>
      <div className="w-full flex flex-col flex-1">
        <div id="theme-selector" className="flex flex-row justify-between">
          <span className="mr-2">Colour theme:</span>
          <SelectWrapper
            onChange={(e) => {
              e.preventDefault();
              setTheme(e.target.value);
            }}
            defaultValue={currentTheme}
          >
            {themeHandler.presets.map(({ mode, name }) => {
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
