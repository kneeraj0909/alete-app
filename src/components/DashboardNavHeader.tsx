import {StyleSheet, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/svgImg/logo.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const DashboardNavHeader = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.DashboardNavHeader}>
      <Logo onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

export default DashboardNavHeader;

const styles = StyleSheet.create({
  DashboardNavHeader: {
    width: '100%',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    paddingRight: 10,
    paddingVertical: 10,
  },
});
