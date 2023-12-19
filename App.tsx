import React from 'react';
import {StatusBar} from 'react-native';
import NavigationRoute from 'routes';

const App = (): React.JSX.Element => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationRoute />
    </>
  );
};

export default App;
