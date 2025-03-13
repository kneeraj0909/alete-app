import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Animated,
} from 'react-native';
import {LeftArrowIcon} from '../../../assets/svg/LeftArrow';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {DocumentsIcon} from '../../../assets/svg/Documents';
import {DownArrowIcon} from '../../../assets/svg/DownArrow';
import {DownloadIcon} from '../../../assets/svg/Download';

interface dropdownProps {
  dropdownTitle?: string;
  expanded?: boolean;
  onPress: () => void;
  data: string[];
}

interface DownloadDropdownProps {
  dropdownTitle: string;
  onPress: () => void;
}

const DownloadDropdown = ({dropdownTitle, onPress}: DownloadDropdownProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 8,
      }}>
      <DocumentsIcon />
      <Text style={styles.dropdownText}>{dropdownTitle}</Text>
      <DownloadIcon />
    </Pressable>
  );
};

const Dropdown = ({dropdownTitle, expanded, onPress, data}: dropdownProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: expanded ? 180 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityAnim, {
      toValue: expanded ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [expanded]);

  return (
    <View style={{paddingHorizontal: 20}}>
      <Pressable style={styles.dropdown} onPress={onPress}>
        <DocumentsIcon />
        <Text style={styles.dropdownText}>{dropdownTitle}</Text>
        <Animated.View
          style={{
            transform: [
              {
                rotate: rotateAnim.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
          }}>
          <DownArrowIcon />
        </Animated.View>
      </Pressable>

      {expanded && (
        <Animated.View
          style={{
            opacity: opacityAnim,
          }}>
          <View
            style={[
              {marginTop: expanded ? -10 : 0},
              styles.subDropdownContainer,
            ]}>
            {data.map((item, index) => (
              <DownloadDropdown
                key={index}
                dropdownTitle={item}
                onPress={() => {}}
              />
            ))}
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const Documents: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedDropdown(prev => (prev === title ? null : title));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          <Text>Download Documents</Text>
        </View>
      </View>

      <Dropdown
        dropdownTitle="Policy Documents"
        expanded={expandedDropdown === 'Policy Documents'}
        onPress={() => handleToggle('Policy Documents')}
        data={['Insurance Policy', 'Terms & Conditions', 'Claim']}
      />
      <Dropdown
        dropdownTitle="Know your Customer (KYC)"
        expanded={expandedDropdown === 'Know your Customer (KYC)'}
        onPress={() => handleToggle('Know your Customer (KYC)')}
        data={['Aadhar Card', 'PAN Card', 'Driving License']}
      />
      <Dropdown
        dropdownTitle="Medical Records"
        expanded={expandedDropdown === 'Medical Records'}
        onPress={() => handleToggle('Medical Records')}
        data={['Blood Test']}
      />

      <Dropdown
        dropdownTitle="Others"
        expanded={expandedDropdown === 'Others'}
        onPress={() => handleToggle('Others')}
        data={['Others']}
      />

      <DownloadDropdown
        dropdownTitle={'Registration certificate'}
        onPress={() => {}}
      />
    </View>
  );
};

export default Documents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
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
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  subDropdownContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    paddingVertical: 5,
    marginBottom: 10,
  },
});
