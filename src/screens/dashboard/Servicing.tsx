import React from 'react';
import {StyleSheet, View} from 'react-native';

import DashboardHeader from '../../components/DashboardHeader';

const Servicing: React.FC = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader title="Servicing & Request" />
    </View>
  );
};

export default Servicing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
