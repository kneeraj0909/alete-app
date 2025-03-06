import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeIcon} from '../../assets/svg/Home';
import {NotebookIcon} from '../../assets/svg/Notebook';
import {HeathCardIcon} from '../../assets/svg/HealthCard';
import {PlusIcon} from '../../assets/svg/Plus';
import {MyProfileIcon} from '../../assets/svg/MyProfile';

const BottomTabBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomBarContainer}>
      <TouchableOpacity
        style={styles.bottomBar}
        onPress={() => console.log('Home clicked')}>
        <HomeIcon />
        <Text style={styles.bottomBarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBar}
        onPress={() => console.log('Notebook clicked')}>
        <NotebookIcon />
        <Text style={styles.bottomBarText}>Notebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBar}
        onPress={() => console.log('Health Card clicked')}>
        <HeathCardIcon />
        <Text style={styles.bottomBarText}>Health Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBar}
        onPress={() => console.log('Plus clicked')}>
        <PlusIcon />
        <Text style={styles.bottomBarText}>Plus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBar}
        onPress={() => console.log('My Profile clicked')}>
        <MyProfileIcon />
        <Text style={styles.bottomBarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  bottomBar: {
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
    color: '#000000',
    paddingTop: 10,
  },
});

export default BottomTabBar;
