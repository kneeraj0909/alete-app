import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ViewPolicyIcon} from '../../../assets/svg/ViewPolicy';
import DashboardHeader from '../../components/DashboardHeader';
import Button from '../../components/Button';

interface Policy {
  insurerName: string;
  policyType: string;
  policyNo: string;
  expiryDate: string;
  sumInsured: string;
}

const policies: Policy[] = Array(5).fill({
  insurerName: 'Care Health Insurance',
  policyType: 'GGC',
  policyNo: 'Health',
  expiryDate: '20-Nov-2024',
  sumInsured: '$10,00,000.00',
});

const RowData: React.FC<{label: string; value: string}> = ({label, value}) => (
  <View style={styles.rowDataContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const UpcomingRenewals: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <DashboardHeader title="Upcoming Renewals" />

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
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{paddingBottom: 80}}
        keyboardShouldPersistTaps="handled">
        {policies.map((item, _index) => (
          <View key={_index} style={styles.policyContainer}>
            <TouchableOpacity>
              <View style={styles.viewPolicy}>
                <ViewPolicyIcon />
                <Text style={styles.viewPolicyText}>View Policy</Text>
              </View>
            </TouchableOpacity>
            <RowData label="Insurer Name" value={item.insurerName} />
            <RowData label="Policy Type" value={item.policyType} />
            <RowData label="Policy No." value={item.policyNo} />
            <RowData label="Expiry Date" value={item.expiryDate} />
            <RowData label="Sum Insured" value={item.sumInsured} />
            <TouchableOpacity style={styles.renewContainer}>
              <Text style={styles.renewBtn}>RENEW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingRenewals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
    borderRadius: 14,
    marginBottom: 58,
  },
  header: {
    marginRight: 20,
  },
  headerButton: {
    backgroundColor: '#033381',
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 3,
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
    fontWeight: '500',
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
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    lineHeight: 13,
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
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#033381',
    width: 200,
  },
  value: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#000',
    width: 120,
  },
  renewContainer: {
    width: 136,
    height: 33,
    borderRadius: 4,
    backgroundColor: '#033381',
    justifyContent: 'center',
    alignItems: 'center',
  },
  renewBtn: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#D4DCE9',
  },
});
