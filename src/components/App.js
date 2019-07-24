import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { FiSettings as SettingsIcon } from 'react-icons/all';
import Modal from 'react-responsive-modal';

import Header from './Header';
import Home from './Home';
import Modules from './Modules';
import Settings from './Settings';
import { themes } from '../shared/themes';

const themeHandler = themes();

const primary = theme('mode', themeHandler.maps.primary);

const secondary = theme('mode', themeHandler.maps.secondary);

const Wrapper = styled.div`
  background-color: ${secondary};
  color: ${primary};
`;

function App() {
  const [themeMode, setThemeMode] = useState('admirationOfTheNation');
  const [settingsToggled, setSettingsToggled] = useState(false);

  const toggleSettings = () => setSettingsToggled(!settingsToggled);

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Wrapper className="app w-full my-0 mx-auto min-h-full flex flex-col">
        {settingsToggled
          ? (
            <Modal
              open={settingsToggled}
              onClose={toggleSettings}
              center
              classNames={{
                modal: 'flex flex-col p-0'
              }}
              showCloseIcon={false}
            >
              <Settings
                themes={themeHandler}
                setTheme={setThemeMode}
                currentTheme={themeMode}
                toggleSettings={toggleSettings}
              />
            </Modal>
          )
          : null
        }
        <Header themes={themeHandler}>
          <div>
            <SettingsIcon
              className="cursor-pointer"
              size={40}
              onClick={toggleSettings}
            />
          </div>
        </Header>
        <div className="app-content w-full flex-1 p-2">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/modules" exact component={Modules} />
            <Route render={() => (<div>404!</div>)} />
          </Switch>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
