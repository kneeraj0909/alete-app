import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import DashboardHeader from '../../components/DashboardHeader';

const HealthCard: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader title="Health Card" />
    </SafeAreaView>
  );
};

export default HealthCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
