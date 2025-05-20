import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DashboardHeader from '../../components/DashboardHeader';

const Servicing: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader title="Servicing & Request" />
    </SafeAreaView>
  );
};

export default Servicing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
