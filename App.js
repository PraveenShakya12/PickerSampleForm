import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigations/MainNavigator';
import {Provider as StoreProvider} from 'react-redux';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
