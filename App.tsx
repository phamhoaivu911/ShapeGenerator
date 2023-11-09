/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import CirclesScreen from './src/screens/CirclesScreen';
import HomeScreen from './src/screens/HomeScreen';
import SquaresScreen from './src/screens/SquaresScreen';
import TrianglesScreen from './src/screens/TrianglesScreen';

const Tab = createBottomTabNavigator();

const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Squares" component={SquaresScreen} />
        <Tab.Screen name="Circles" component={CirclesScreen} />
        <Tab.Screen name="Triangles" component={TrianglesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
