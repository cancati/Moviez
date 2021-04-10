import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PopularScreen from './src/Screen/PopulerMovies/PopularMovies';
import HomeScreen from './src/Screen/Home/HomeScreen';
import Icon from 'react-native-ionicons';
import SearchScreen from './src/Screen/SearchScreen';
import DetailScreen from './src/Screen/DetailScreen';

function SettingsScreen({navigation, route}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Text>Can</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Popular') {
            iconName = focused ? 'ios-flame' : 'ios-flame';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Popular"
        component={PopularScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Details"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
