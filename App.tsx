import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Partners from './src/screens/Partners';
import Dashboard from './src/screens/Dashboard';
import Header from './src/components/Header';
import {TouchableOpacity, View} from 'react-native';
import Sidebar from './src/components/Sidebar';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Portfolio from './src/screens/dashboard/Portfolio';
import Claims from './src/screens/dashboard/Claims';
import Documents from './src/screens/dashboard/Documents';
import Servicing from './src/screens/dashboard/Servicing';
import HealthCard from './src/screens/dashboard/HealthCard';
import HealthWellbeing from './src/screens/dashboard/HealthWellbeing';
import ProductsQuotes from './src/screens/dashboard/ProductsQuotes';
import UpcomingRenewals from './src/screens/dashboard/UpcomingRenewals';
import FindAProvider from './src/screens/dashboard/FindAProvider';
import MyProfile from './src/screens/dashboard/MyProfile';
import BottomTabBar from './src/components/BottomTabBar';
import Logo from './assets/svg/svgImg/logo.svg';
import DashboardNavHeader from './src/components/DashboardNavHeader';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';


export type RootStackParamList = {
  DrawerNavigator: undefined;
  Dashboard: undefined;
  Portfolio: undefined;
  Claims: undefined;
  Documents: undefined;
  Servicing: undefined;
  HealthCard: undefined;
  HealthWellbeing: undefined;
  Products: undefined;
  Provider: undefined;
  UpcomingRenewals: undefined;
  MyProfile: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

type DrawerNavProps = DrawerNavigationProp<{Home: undefined}>;

const CustomHeaderRight = (): React.JSX.Element => {
  const navigation = useNavigation<DrawerNavProps>();

  return (
    <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => navigation.navigate('Home')}>
      <Logo />
    </TouchableOpacity>
  );
};

const DrawerNavigator = (): React.JSX.Element => {
  return (
    <ToastProvider placement="top">
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
    </ToastProvider>
  );
};

const TabBarWrapper = () => {
  const state = useNavigationState(state => state);

  const currentRouteName = state?.routes[state?.index]?.name || 'Home';

  const hideBottomTabScreens = [
    'Dashboard',
    'Portfolio',
    'Claims',
    'Documents',
    'Servicing',
    'HealthCard',
    'HealthWellbeing',
    'Products',
    'Provider',
    'UpcomingRenewals',
    'MyProfile',
  ];

  return hideBottomTabScreens.includes(currentRouteName) ? (
    <BottomTabBar />
  ) : null;
};

const DashboardNavHeaderCom = () => {
  const state = useNavigationState(state => state);

  const currentRouteName = state?.routes[state?.index]?.name || 'Home';

  const hideBottomTabScreens = [
    'Dashboard',
    'Portfolio',
    'Claims',
    'Documents',
    'Servicing',
    'HealthCard',
    'HealthWellbeing',
    'Products',
    'Provider',
    'UpcomingRenewals',
    'MyProfile',
  ];

  return hideBottomTabScreens.includes(currentRouteName) ? (
    <DashboardNavHeader />
  ) : null;
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <DashboardNavHeaderCom />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="Claims" component={Claims} />
          <Stack.Screen name="Documents" component={Documents} />
          <Stack.Screen name="Servicing" component={Servicing} />
          <Stack.Screen name="HealthCard" component={HealthCard} />
          <Stack.Screen name="HealthWellbeing" component={HealthWellbeing} />
          <Stack.Screen name="Products" component={ProductsQuotes} />
          <Stack.Screen name="Provider" component={FindAProvider} />
          <Stack.Screen name="UpcomingRenewals" component={UpcomingRenewals} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
        </Stack.Navigator>

        <TabBarWrapper />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
