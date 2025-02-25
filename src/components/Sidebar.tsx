import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Sidebar = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={{ uri: 'https://www.alete.in/assets/public/images/new-logo.jpg' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.drawerItems}>
        {props.state.routes.map((route: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => props.navigation.navigate(route.name)}
            style={styles.drawerItem}
          >
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
    width: 120,
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
    fontSize: 16,
    fontWeight: '500',
  },
});
