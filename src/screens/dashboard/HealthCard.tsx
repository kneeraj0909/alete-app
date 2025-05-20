import React from 'react';
import {StyleSheet, View} from 'react-native';

import DashboardHeader from '../../components/DashboardHeader';

const HealthCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader title="Health Card" />
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
