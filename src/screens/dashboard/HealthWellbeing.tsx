import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const HealthWellbeing: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader title="Health Wellbeing" />
    </SafeAreaView>
  );
};

export default HealthWellbeing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
