import React from 'react';
import {StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const HealthWellbeing: React.FC = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader title="Health Wellbeing" />
    </View>
  );
};

export default HealthWellbeing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
