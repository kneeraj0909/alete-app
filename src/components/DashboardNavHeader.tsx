import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/svgImg/logo.svg';

const DashboardNavHeader = () => {
  return (
    <View style={styles.DashboardNavHeader}>
      <Logo />
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
