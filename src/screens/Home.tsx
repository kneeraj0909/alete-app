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

const {width, height} = Dimensions.get('window');

const Home = ({navigation}: any) => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchMetabaseData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          'http://65.0.155.177:3000/api/card/354/query',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Metabase-Session': '85e5ed6f-5158-4285-af29-44a565fd48ed',
            },
          },
        );

        if (response.data.data && response.data.data.rows) {
          setUserData(response.data.data.rows);
        } else {
          console.warn('No data found:', response.data);
        }
      } catch (error) {
        console.error('Error fetching:', error);
        setLoginError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchMetabaseData();
  }, []);



  

  const handleLogin = () => {
    setLoginVisible(true);
  };

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


console.log("userData",userData)




  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Video
          source={require('../../assets/videos/home-video.mp4')}
          style={styles.video}
          repeat={true}
          paused={false}
          resizeMode="cover"
        />

        <Text style={styles.homeText}>
          Insurance Advisory Services for Ultra High Net Worth Families &
          Businesses
        </Text>

        <View style={styles.buttonContainer}>
          <Button text="Client Login" onPress={handleLogin} />
        </View>
      </View>

      <Footer />

      <Modal transparent visible={loginVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setLoginVisible(false)}>
          <View style={styles.modalBackground}>
            <Animated.View style={[styles.loginCard, {opacity: fadeAnim}]}>
              <Text style={styles.modalTitle}>Welcome Back!</Text>
              <TextInput
                style={styles.input}
                placeholder="Email/Phone"
                placeholderTextColor="#1E1E1E99"
              />
              <View style={styles.passwordEyePart}>
                <TextInput
                  style={styles.input}
                  placeholder="Password/OTP"
                  placeholderTextColor="#1E1E1E99"
                  secureTextEntry={!passwordVisible}
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
                  onPress={() => navigation.navigate('Dashboard')}
                  textStyle={styles.loginBtn}
                  style={{
                    width: '50%',
                    backgroundColor: '#033381',
                    marginTop: 15,
                    borderRadius: 3,
                  }}
                />
                <Text style={styles.sendOtpText}>Resend OTP</Text>
              </View>
            </Animated.View>
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
    fontWeight: 600,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    fontWeight: 600,
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    marginBottom: 15,
    color: '#033381',
  },
  passwordEyePart: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
  sendOtpText: {
    fontSize: 10,
    fontWeight: 400,
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    color: '#0073E4',
    paddingTop: 10,
  },
  loginBtn: {
    fontSize: 9,
    fontWeight: 400,
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    color: '#ffffff',
  },
});
