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
import FlashMessage from 'react-native-flash-message';
import React from 'react';

import CirclesScreen from './src/screens/CirclesScreen';
import HomeScreen from './src/screens/HomeScreen';
import SquaresScreen from './src/screens/SquaresScreen';
import TabBarIcon from './src/components/TabBarIcon';
import TrianglesScreen from './src/screens/TrianglesScreen';

const Tab = createBottomTabNavigator();

const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const tabBarStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const headerStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
  };

  const headerTitleStyle = {
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle,
          headerStyle,
          headerTitleStyle,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarIcon: TabBarIcon.HomeIcon}}
        />
        <Tab.Screen
          name="Squares"
          component={SquaresScreen}
          options={{tabBarIcon: TabBarIcon.SquareIcon}}
        />
        <Tab.Screen
          name="Circles"
          component={CirclesScreen}
          options={{tabBarIcon: TabBarIcon.CircleIcon}}
        />
        <Tab.Screen
          name="Triangles"
          component={TrianglesScreen}
          options={{tabBarIcon: TabBarIcon.TriangleIcon}}
        />
      </Tab.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
