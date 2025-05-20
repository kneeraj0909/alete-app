import React from 'react';
import {StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const FindAProvider: React.FC = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader title="Find A Provider" />
    </View>
  );
};

export default FindAProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
