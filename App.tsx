/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Colors} from 'react-native/Libraries/NewAppScreen';
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
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={[{flex: 1}, backgroundStyle]}>
        <Square color="red" size={100} />
        <Circle color="blue" diameter={100} />
        <Triangle color="pink" size={200} />
      </View>
    </SafeAreaView>
  );
};

export default App;
