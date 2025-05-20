import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {LeftArrowIcon} from '../../assets/svg/LeftArrow';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface DashboardHeaderProps {
  title: string;
  style?: ViewStyle;
}

const DashboardHeader = ({title, style}: DashboardHeaderProps) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={[styles.header, style]}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter-VariableFont_opsz,wght',
    fontWeight: '700',
    color: '#525056',
  },
});
