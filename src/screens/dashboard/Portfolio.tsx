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
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import {RootState, AppDispatch} from '../../redux/store';
import {fetchPortfolioData} from '../../redux/portfolioSlice';
import {useDispatch, useSelector} from 'react-redux';

interface Policy {
  insurer: string;
  product: string;
  category: string;
  expiryDate: string;
  premiumDue: string;
}

// ============================ fetching data ===========================

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

// const RowData: React.FC<{fadeAnim: Animated.Value;}> = ({fadeAnim}) => ();

type PortfolioProps = {
  navigation: any;
  route: RouteProp<RootStackParamList, 'Portfolio'>;
};

const Portfolio: React.FC<PortfolioProps> = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch<AppDispatch>();
  const portfolioData = useSelector(
    (state: RootState) => state.portfolioSliceData?.portfolioData || [],
  );

  const phone = useSelector(
    (state: RootState) => state.loginData.loggedInPhone,
  );

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

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, [dispatch]);

  // const matchedRow2 = portfolioData.find(row => row[4]);
  // console.log('matchedRow2', matchedRow2?.[0]);


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
      <TouchableOpacity>
        <View style={styles.viewPolicy}>
          <ViewPolicyIcon />
          <Text style={styles.viewPolicyText}>View Policy</Text>
        </View>
      </TouchableOpacity>

      <SkeletonRowData />
      {/* <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        keyboardShouldPersistTaps="handled">
        {loading ? (
          <SkeletonRowData />
        ) : portfolioData.length > 0 ? (
          portfolioData.map((item: any, index: number) => (
            <Animated.View
              key={index}
              style={[
                styles.rowDataContainer,
                {opacity: fadeAnim, marginBottom: 12},
              ]}>
              <View style={styles.labelValue}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{item[1]}</Text>
              </View>
              <View style={styles.labelValue}>
                <Text style={styles.label}>Insurer</Text>
                <Text style={styles.value}>{item[2]}</Text>
              </View>
              <View style={styles.labelValue}>
                <Text style={styles.label}>Product</Text>
                <Text style={styles.value}>{item[3]}</Text>
              </View>
              <View style={styles.labelValue}>
                <Text style={styles.label}>Category</Text>
                <Text style={styles.value}>{item[4]}</Text>
              </View>
              <View style={styles.labelValue}>
                <Text style={styles.label}>Expiry Date</Text>
                <Text style={styles.value}>{item[5]}</Text>
              </View>
              <View style={styles.labelValue}>
                <Text style={styles.label}>Premium</Text>
                <Text style={styles.value}>{item[6]}</Text>
              </View>
            </Animated.View>
          ))
        ) : (
          <Text>No policies found</Text>
        )}
      </ScrollView> */}
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
    borderRadius: 14,
    marginBottom: 58,
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
  rowDataContainer: {},
  labelValue: {
    flexDirection: 'row',
  },
  label: {
    width: 200,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#033381',
  },
  value: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter-VariableFont_opsz,wght',
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
