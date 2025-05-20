import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Logo from '../../assets/svg/svgImg/logo.svg';

const Sidebar = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Logo />
      </View>
      <View style={styles.drawerItems}>
        {props.state.routes.map((route: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => props.navigation.navigate(route.name)}
            style={styles.drawerItem}>
            <Text style={styles.drawerText}>{route.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    alignItems: 'flex-start',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  drawerItems: {
    padding: 10,
  },
  drawerItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerText: {
    fontFamily: 'Inter-VariableFont_opsz,wght',
    fontSize: 15,
    fontWeight: '700',
    color:'#000000'
  },
});
