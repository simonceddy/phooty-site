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
import primaryColorMap from '../shared/themes/primaryColorMap';
import secondaryColorMap from '../shared/themes/secondaryColorMap';

const primary = theme('mode', primaryColorMap);

const secondary = theme('mode', secondaryColorMap);

const Wrapper = styled.div`
  background-color: ${secondary};
  color: ${primary};
`;

function App() {
  const [themeMode, setThemeMode] = useState('light');
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
                setTheme={setThemeMode}
                currentTheme={themeMode}
                toggleSettings={toggleSettings}
              />
            </Modal>
          )
          : null
        }
        <Header>
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
