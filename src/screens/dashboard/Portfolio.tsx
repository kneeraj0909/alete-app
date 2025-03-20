import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ViewPolicyIcon} from '../../../assets/svg/ViewPolicy';
import {PlusSmallIcon} from '../../../assets/svg/PlusSmallIcon';
import DashboardHeader from '../../components/DashboardHeader';
import Button from '../../components/Button';

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
  return (
    <View style={styles.container}>
      <DashboardHeader title="Rajesh Relan" />
      <View style={styles.buttonsWrapper}>
        <Button
          text="My Family"
          onPress={function (): void {}}
          style={styles.btnContainer}
          textStyle={styles.btnText}
        />
        <Button
          text="My Company"
          onPress={function (): void {}}
          style={styles.btnContainer}
          textStyle={styles.btnText}
        />
        <Button
          text="All Policies"
          onPress={function (): void {}}
          style={styles.btnContainer}
          textStyle={styles.btnText}
        />
        <Button
          text="Add Policy"
          onPress={function (): void {}}
          style={styles.btnContainer}
          textStyle={styles.btnText}
          leftIcon={<PlusSmallIcon pathProps={{fill: '#ffffff'}} />}
        />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {policies.map((item, _index) => (
          <View style={styles.policyContainer} >
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
    borderRadius:14,
    marginBottom:67
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  btnContainer: {
    backgroundColor: '#033381',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2,
  },
  btnText: {
    fontSize: 8,
    fontWeight: 500,
    fontFamily: 'Inter-VariableFont_opsz,wght',
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
    width: 120,
  },
});
