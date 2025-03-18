import React from 'react';
import {StyleSheet, View} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';

const ProductsQuotes: React.FC = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader title="Products Quotes" />
    </View>
  );
};

export default ProductsQuotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
});
