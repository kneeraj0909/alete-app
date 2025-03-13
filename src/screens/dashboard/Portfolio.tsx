import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {ViewPolicyIcon} from '../../../assets/svg/ViewPolicy';
import {LeftArrowIcon} from '../../../assets/svg/LeftArrow';
import {PlusSmallIcon} from '../../../assets/svg/PlusSmallIcon';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface Policy {
  insurer: string;
  product: string;
  category: string;
  expiryDate: string;
  premiumDue: string;
}

const policies: Policy[] = Array(9).fill({
  insurer: 'Care Health Insurance',
  product: 'GGC',
  category: 'Health',
  expiryDate: '20-Nov-2024',
  premiumDue: '₹4,19,766.00',
});

const RowData: React.FC<{label: string; value: string}> = ({label, value}) => (
  <View style={styles.rowDataContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const PolicyCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          <Text>Rajesh Relan</Text>
        </View>
        <View style={styles.headerRight}>
          {['My Family', 'My Company'].map(item => (
            <TouchableOpacity key={item} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addPolicyButton}>
            <PlusSmallIcon />
            <Text style={styles.addPolicyText}>Add Policy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All Policies</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {policies.map((item, index) => (
          <View key={index} style={styles.policyContainer}>
            <TouchableOpacity>
              <View style={styles.viewPolicy}>
                <ViewPolicyIcon />
                <Text style={styles.viewPolicyText}>View Policy</Text>
              </View>
            </TouchableOpacity>
            <RowData label="Insurer Name" value={item.insurer} />
            <RowData label="Product" value={item.product} />
            <RowData label="Category" value={item.category} />
            <RowData label="Expiry Date" value={item.expiryDate} />
            <RowData label="Premium Due" value={item.premiumDue} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PolicyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
    marginHorizontal: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    backgroundColor: '#033381',
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  headerButtonText: {
    fontSize: 8,
    color: '#ffffff',
  },
  addPolicyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    borderWidth: 1,
    borderColor: '#033381',
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  addPolicyText: {
    fontSize: 8,
    color: '#033381',
  },
  viewAllButton: {
    borderWidth: 1,
    borderColor: '#033381',
    borderRadius: 2,
    paddingHorizontal: 6,
    paddingVertical: 3,
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginBottom: 16,
    lineHeight: 9.74,
    marginHorizontal: 20,
  },
  viewAllText: {
    fontSize: 8,
    color: '#033381',
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  policyContainer: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderColor: '#033381AB',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
  },
  viewPolicy: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#033381',
    borderRadius: 3,
    paddingHorizontal: 13,
    paddingVertical: 3,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  viewPolicyText: {
    fontSize: 10.61,
    fontWeight: 400,
    lineHeight: 12.84,
    color: '#033381',
  },
  rowDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#033381',
    width: 200,
  },
  value: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    width:120
  },
});
