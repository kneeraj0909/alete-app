import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ViewPolicyIcon} from '../../../assets/svg/ViewPolicy';
import DashboardHeader from '../../components/DashboardHeader';

interface Policy {
  insurerName: string;
  policyType: string;
  policyNo: string;
  expiryDate: string;
  sumInsured: string;
}

const policies: Policy[] = Array(2).fill({
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
    <View style={styles.container}>
      <View style={styles.header}>
        <DashboardHeader title="Upcoming Renewals" />
        <View style={styles.headerRight}>
          {['My Family', 'My Company'].map(item => (
            <TouchableOpacity key={item} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>{item}</Text>
            </TouchableOpacity>
          ))}
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
    </View>
  );
};

export default UpcomingRenewals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
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
    fontSize: 12.65,
    fontWeight: 500,
    color: '#D4DCE9',
  },
});
