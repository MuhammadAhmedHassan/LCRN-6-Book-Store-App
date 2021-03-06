import React, {useEffect} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {HomeTabs} from './navigation';
import {BookDetail, BookDetailAnimatd} from './screens';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    LogBox.ignoreLogs(['Looks like you']);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeTabs">
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="BookDetails" component={BookDetailAnimatd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
