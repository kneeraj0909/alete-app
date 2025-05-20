import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const FindAProvider: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader title="Find A Provider" />
    </SafeAreaView>
  );
};

export default FindAProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
