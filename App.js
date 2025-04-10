import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectionScreenOne from './components/SelectionScreenOne';
import SelectionScreenTwo from './components/SelectionScreenTwo'; // Import SelectionScreenTwo

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectionScreenOne">
        <Stack.Screen name="SelectionScreenOne" component={SelectionScreenOne} options={{ title: 'Story Preferences' }} />
        <Stack.Screen name="SelectionScreenTwo" component={SelectionScreenTwo} options={{ title: 'More Preferences' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;