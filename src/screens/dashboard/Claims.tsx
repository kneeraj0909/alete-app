import React from 'react';
import {StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const Claims: React.FC = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader title="Claims" />
    </View>
  );
};

export default Claims;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
