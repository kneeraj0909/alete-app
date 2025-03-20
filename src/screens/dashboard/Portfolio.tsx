import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
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

const policies: Policy[] = Array(5).fill({
  insurer: 'Care Health Insurance',
  product: 'GGC',
  category: 'Health',
  expiryDate: '20-Nov-2024',
  premiumDue: '₹4,19,766.00',
});

const SkeletonRowData: React.FC = () => {
  const shimmerAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0.3,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return <Animated.View style={[styles.skeletonRow, {opacity: shimmerAnim}]} />;
};

const RowData: React.FC<{
  label: string;
  value: string;
  fadeAnim: Animated.Value;
}> = ({label, value, fadeAnim}) => (
  <Animated.View style={[styles.rowDataContainer, {opacity: fadeAnim}]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </Animated.View>
);

const PolicyCard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
        <DashboardHeader title="Rajesh Relan" />
        <View style={styles.buttonsWrapper}>
          <Button
            text="My Family"
            onPress={() => {}}
            style={styles.btnContainer}
            textStyle={styles.btnText}
          />
          <Button
            text="My Company"
            onPress={() => {}}
            style={styles.btnContainer}
            textStyle={styles.btnText}
          />
          <Button
            text="All Policies"
            onPress={() => {}}
            style={styles.btnContainer}
            textStyle={styles.btnText}
          />
          <Button
            text="Add Policy"
            onPress={() => {}}
            style={styles.btnContainer}
            textStyle={styles.btnText}
            leftIcon={<PlusSmallIcon pathProps={{fill: '#ffffff'}} />}
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{paddingBottom: 80}}
          keyboardShouldPersistTaps="handled">
          {policies.map((item, index) => (
            <View key={index} style={styles.policyContainer}>
              <TouchableOpacity>
                <View style={styles.viewPolicy}>
                  <ViewPolicyIcon />
                  <Text style={styles.viewPolicyText}>View Policy</Text>
                </View>
              </TouchableOpacity>

              {loading ? (
                <>
                  <SkeletonRowData />
                  <SkeletonRowData />
                  <SkeletonRowData />
                  <SkeletonRowData />
                  <SkeletonRowData />
                </>
              ) : (
                <>
                  <RowData
                    label="Insurer Name"
                    value={item.insurer}
                    fadeAnim={fadeAnim}
                  />
                  <RowData
                    label="Product"
                    value={item.product}
                    fadeAnim={fadeAnim}
                  />
                  <RowData
                    label="Category"
                    value={item.category}
                    fadeAnim={fadeAnim}
                  />
                  <RowData
                    label="Expiry Date"
                    value={item.expiryDate}
                    fadeAnim={fadeAnim}
                  />
                  <RowData
                    label="Premium Due"
                    value={item.premiumDue}
                    fadeAnim={fadeAnim}
                  />
                </>
              )}
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
    borderRadius: 14,
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
    fontSize: 10.61,
    fontWeight: '400',
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
  skeletonRow: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 16,
  },
});
