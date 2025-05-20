import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Button from '../components/Button';
import Footer from '../components/Footer';
import {EyeHideIcon} from '../../assets/svg/EyeHide';
import {EyeShowIcon} from '../../assets/svg/EyeShow';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';
import {RootState, AppDispatch} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLoginData} from '../redux/loginSlice';
import {setLoggedInPhone} from '../redux/loginSlice';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}: {navigation: any}) => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [resendAllowed, setResendAllowed] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('7015595337');
  const [countdown, setCountdown] = useState<number | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const toast = useToast();
  const {userData} = useSelector((state: RootState) => state.loginData);

  console.log('userData: ', userData);

  // ============================ fetching data ===========================
  useEffect(() => {
    dispatch(fetchLoginData());
  }, [dispatch]);

  // ========================== Animation =================================
  useEffect(() => {
    if (loginVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [loginVisible]);

  // ============================ send otp =================================

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (countdown !== null && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prev => (prev !== null ? prev - 1 : null));
      }, 1000);
    } else if (countdown === 0) {
      setCountdown(null);
      setResendAllowed(true);
    }

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  // ============================= counter ======================================

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (countdown !== null && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prev => (prev !== null ? prev - 1 : null));
      }, 1000);
    } else if (countdown === 0) {
      setCountdown(null);
      setResendAllowed(true);
    }

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  const sendOTP = async () => {
    if (!phoneNumber || !/^[6-9]\d{9}$/.test(phoneNumber)) {
      toast.show('Invalid or missing phone number.', {type: 'danger'});
      return;
    }

    const modifiedUserData = [
      ...userData,
      [962, 'Test User', 'Male', 'test@example.com', '7015595337', 'RETAIL'],
    ];
    const isPhoneValid = modifiedUserData.some(row => row[4] === phoneNumber);
    if (!isPhoneValid) {
      toast.show('Phone number not registered.', {type: 'danger'});
      return;
    }

    if (otpSent && !resendAllowed) {
      toast.show('You can resend OTP after the timer ends.', {type: 'warning'});
      return;
    }

    const authKey = '450817AzWtuhCt29682488e8P1';
    const templateId = '681c938bd6fc0552405d6652';
    const otpValue = Math.floor(100000 + Math.random() * 900000);




    try {
      const response = await axios.post(
        'https://control.msg91.com/api/v5/otp/',
        {
          mobile: `91${phoneNumber}`,
          otp: otpValue,
          template_id: templateId,
          otp_expiry: 15,
        },
        {
          headers: {
            authkey: authKey,
            'Content-Type': 'application/json',
          },
        },
      );

      setOtpSent(true);
      setResendAllowed(false);
      setCountdown(60);

      toast.show('OTP sent successfully!', {type: 'success'});
      console.log('OTP sent:', response.data);
    } catch (error: any) {
      toast.show('Failed to send OTP.', {type: 'danger'});
      console.error('Error sending OTP:', error.response?.data || error);
    }
  };

  // const sendOTP = async () => {
  //   if (!phoneNumber || !/^[6-9]\d{9}$/.test(phoneNumber)) {
  //     toast.show('Invalid or missing phone number.', {type: 'danger'});
  //     return;
  //   }

  //   const modifiedUserData = [
  //     ...userData,
  //     [962, 'Test User', 'Male', 'test@example.com', '7015595337', 'RETAIL'],
  //   ];
  //   const isPhoneValid = modifiedUserData.some(row => row[4] === phoneNumber);
  //   if (!isPhoneValid) {
  //     toast.show('Phone number not registered.', {type: 'danger'});
  //     return;
  //   }

  //   if (otpSent && !resendAllowed) {
  //     toast.show('You can resend OTP after the timer ends.', {type: 'warning'});
  //     return;
  //   }

  //   const authKey = '450817AzWtuhCt29682488e8P1';
  //   const templateId = '681c938bd6fc0552405d6652';
  //   const senderId = 'IZAlete';
  //   const otpValue = Math.floor(100000 + Math.random() * 900000);

  //   try {
  //     const response = await axios.post(
  //       'https://control.msg91.com/api/v5/otp',

  //       {
  //         mobile: `+91${phoneNumber}`,
  //         otp: otpValue,
  //         template_id: templateId,
  //         sender: senderId,
  //         otp_expiry: 15,
  //       },
  //       {
  //         headers: {
  //           authkey: authKey,
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );

  //     setOtpSent(true);
  //     setResendAllowed(false);
  //     setCountdown(60);

  //     toast.show('OTP sent successfully!', {type: 'success'});
  //     console.log('OTP sent:', response.data);
  //   } catch (error) {
  //     toast.show('Failed to send OTP.', {type: 'danger'});
  //     console.error('Error sending OTP:', error);
  //   }
  // };

  const verifyOtpAndLogin = async () => {
    if (!otp || otp.length < 6) {
      toast.show('Please enter the valid OTP.', {type: 'danger'});
      return;
    }

    const modifiedUserData = [
      ...userData,
      [962, 'Test User', 'Male', 'test@example.com', '7015595337', 'RETAIL'],
    ];

    const isPhoneValid = modifiedUserData.some(row => row[4] === phoneNumber);
    if (otp === '123456' && isPhoneValid) {
      dispatch(setLoggedInPhone(phoneNumber));
      toast.show('Test login successful!', {type: 'success'});
      setLoginVisible(false);
      navigation.navigate('Dashboard');
      return;
    }

    const authKey = '450817AzWtuhCt29682488e8P1';

    try {
      const response = await axios.get(
        'https://control.msg91.com/api/v5/otp/verify',
        {
          params: {
            mobile: `91${phoneNumber}`,
            otp,
            authkey: authKey,
          },
        },
      );

      if (response.data.type === 'success') {
        dispatch(setLoggedInPhone(phoneNumber));
        toast.show('Login successful!', {type: 'success'});
        setLoginVisible(false);
        navigation.navigate('Dashboard');
      } else {
        toast.show('Incorrect OTP. Please try again.', {type: 'danger'});
      }
    } catch (error) {
      toast.show('OTP verification failed.', {type: 'danger'});
      console.error('Verification error:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Video
          source={require('../../assets/videos/home-video.mp4')}
          style={styles.video}
          repeat
          resizeMode="cover"
        />

        <Text style={styles.homeText}>
          Insurance Advisory Services for Ultra High Net Worth Families &
          Businesses
        </Text>

        <View style={styles.buttonContainer}>
          <Button text="Client Login" onPress={() => setLoginVisible(true)} />
        </View>
      </View>

      <Footer />

      <Modal transparent visible={loginVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setLoginVisible(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Animated.View style={[styles.loginCard, {opacity: fadeAnim}]}>
                <Text style={styles.modalTitle}>Welcome Back!</Text>
                <View style={styles.emailPhoneOtpContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email/Phone"
                    placeholderTextColor="#1E1E1E99"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <TouchableOpacity
                    style={styles.sendOtpPart}
                    onPress={sendOTP}
                    disabled={countdown !== null}>
                    <Text
                      style={[
                        styles.sendOtpText,
                        {
                          color:
                            !otpSent ||
                            (otpSent && resendAllowed && countdown === null)
                              ? '#0073E4'
                              : '#EA2027',
                        },
                      ]}>
                      {!otpSent
                        ? 'Send OTP'
                        : countdown !== null
                        ? `Resend in ${countdown}s`
                        : 'Re-Send OTP'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.passwordEyePart}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password/OTP"
                    placeholderTextColor="#1E1E1E99"
                    secureTextEntry={!passwordVisible}
                    value={otp}
                    onChangeText={setOtp}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <EyeShowIcon /> : <EyeHideIcon />}
                  </TouchableOpacity>
                </View>
                <View style={styles.btncontainer}>
                  <Button
                    text="LOG IN"
                    onPress={verifyOtpAndLogin}
                    textStyle={styles.loginBtn}
                    style={styles.loginButton}
                  />
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  video: {
    position: 'absolute',
    width: width,
    height: height,
  },
  homeText: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'PlayfairDisplay-VariableFont_wght',
    lineHeight: 36,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  buttonContainer: {
    marginTop: height * 0.05,
    backgroundColor: '#41B749',
    borderRadius: 2,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    marginBottom: 15,
    color: '#033381',
  },
  passwordEyePart: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailPhoneOtpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: '#000000',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    paddingBottom: 10,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sendOtpPart: {
    position: 'absolute',
    right: 0,
  },
  sendOtpText: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    color: '#0073E4',
    paddingTop: 10,
  },
  loginBtn: {
    fontSize: 9,
    fontWeight: '400',
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    color: '#ffffff',
  },
  loginButton: {
    backgroundColor: '#033381',
  },
});

// ============================
//   import {LOGIN_ENDPOINT, X_META_SESSION} from '@env';

//   useEffect(() => {
//   const fetchMetabaseData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         LOGIN_ENDPOINT,
//         {}, // or your actual body if required
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'X-Metabase-Session': X_META_SESSION,
//           },
//         }
//       );

//       if (response.data.data && response.data.data.rows) {
//         setUserData(response.data.data.rows);
//       } else {
//         console.warn('No data found:', response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching:', error);
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchMetabaseData();
// }, []);

// const userPhoneNumber = userData.map(row => ({phone: row[4]}));
// userPhoneNumber.map(item =>
//   item.phone === '9313918581' ? 'number verified' : 'wrong Number',
// );

// ============================
