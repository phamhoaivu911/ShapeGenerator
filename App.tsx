/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, View, useColorScheme} from 'react-native';
import React from 'react';

import Circle from './src/components/Circle';
import Square from './src/components/Square';
import Triangle from './src/components/Triangle';

const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={{flex: 1}}>
          <Square position={{x: 250, y: 250}} />
          <Circle position={{x: 350, y: 350}} />
          <Triangle position={{x: 250, y: 500}} />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
