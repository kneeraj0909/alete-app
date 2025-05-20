import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>ECOMONEY INSURANCE BROKERS PVT. LTD</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor:'#0073E4'
  },
  headerText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    lineHeight: 14.52,
    color:'#ffffff',
    textAlign:'center'
  },
});
