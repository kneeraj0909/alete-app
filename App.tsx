import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Partners from './src/screens/Partners';
import Dashboard from './src/screens/Dashboard';
import Header from './src/components/Header';
import {Image, TouchableOpacity} from 'react-native';
import Sidebar from './src/components/Sidebar';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

type DrawerNavProps = DrawerNavigationProp<{Home: undefined}>;

function CustomHeaderRight() {
  const navigation = useNavigation<DrawerNavProps>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        source={{
          uri: 'https://www.alete.in/assets/public/images/new-logo.jpg',
        }}
        style={{width: 92, height: 28, marginRight: 15}}
      />
    </TouchableOpacity>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerTintColor: '#0D99FF',
        drawerActiveTintColor: '#0047AB',
        drawerInactiveTintColor: '#000',
        headerRight: () => <CustomHeaderRight />,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Partners" component={Partners} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
