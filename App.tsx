/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';

import Square from './src/components/Square';

const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Square color="red" size={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
