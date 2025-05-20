import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Popover from 'react-native-popover-view';
import {HomeIcon} from '../../assets/svg/Home';
import {NotebookIcon} from '../../assets/svg/Notebook';
import {HeathCardIcon} from '../../assets/svg/HealthCard';
import {PlusIcon} from '../../assets/svg/Plus';
import {MyProfileIcon} from '../../assets/svg/MyProfile';
import {LogoutIcon} from '../../assets/svg/Logout';
import {MyProfileSmall} from '../../assets/svg/MyProfileSmall';

type NavigationType = {
  navigate: (screen: string) => void;
};

const BottomTabBar: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const [showPopover, setShowPopover] = useState<boolean>(false);

  const logoutHandler = () => {
    setShowPopover(false);
  };

  const myProfileHandler = () => {
    setShowPopover(false);
    navigation.navigate('MyProfile');
  };

  const goToHome = () => {
    navigation.navigate('Dashboard');
  };

  const tabs = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      onPress: () => goToHome(),
    },
    {
      icon: <NotebookIcon />,
      label: 'Notebook',
      onPress: () => console.log('Notebook clicked'),
    },
    {
      icon: <HeathCardIcon />,
      label: 'Health Card',
      onPress: () => console.log('Health Card clicked'),
    },
    {
      icon: <PlusIcon />,
      label: 'Plus',
      onPress: () => console.log('Plus clicked'),
    },
  ];

  return (
    <View style={styles.bottomBarContainer}>
      {tabs.map(({icon, label, onPress}, index) => (
        <TouchableOpacity
          key={index}
          style={styles.bottomBar}
          onPress={onPress}>
          {icon}
          <Text style={styles.bottomBarText}>{label}</Text>
        </TouchableOpacity>
      ))}

      <Popover
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(prev => !prev)}
        from={
          <View>
            <TouchableOpacity
              style={styles.bottomBar}
              onPress={() => setShowPopover(true)}>
              <MyProfileIcon />
              <Text style={styles.bottomBarText}>Profile</Text>
            </TouchableOpacity>
          </View>
        }>
        <View>
          <TouchableOpacity style={styles.menuItem} onPress={myProfileHandler}>
            <MyProfileSmall />
            <Text style={styles.menuText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={logoutHandler}>
            <LogoutIcon />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Popover>
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
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  bottomBar: {
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 10,
    fontFamily:'InriaSerif-Regular',
    fontWeight: '700',
    lineHeight: 12,
    color: '#000000',
    paddingTop: 6,
  },
  menuItem: {
    flexDirection: 'row',
    gap: 20,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default BottomTabBar;
