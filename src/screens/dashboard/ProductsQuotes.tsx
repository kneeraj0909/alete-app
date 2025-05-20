import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const ProductsQuotes: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader title="Products Quotes" />
    </SafeAreaView>
  );
};

export default ProductsQuotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
