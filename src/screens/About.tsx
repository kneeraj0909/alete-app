import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('window');

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require('../../assets/img/aboutbg.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.heading}> Hello!</Text>
        <Text style={styles.text}>
          Welcome to India’s first HNW’s focused Insurance Advisory Services for
          Ultra High Net Worth Families & Businesses. We have more than 500
          clients today who are being actively serviced by us.
        </Text>
        <Text style={styles.text}>
          We provide be spoke Insurance Risk Management advice to HNW families
          and their businesses. These could be personal as well as business
          insurance coverage, that can be accessed at one place by our clients.
          Our risk assessment based advisory services include insuring Health
          through global coverage, insuring high-end homes & apartments,
          including art and other valuables from Indian Insurers.
        </Text>

        <Text style={styles.text}>
          For businesses, we focus on commercials insurances where
          Promoters/Directors/Investors are particularly at risk.
        </Text>

        <Text style={styles.text}>
          For specialized commercial lines, we associate closely with the
          leading Insurers, their underwriters, International reinsurers and
          brokerages, who have access to various insurance markets across the
          world.
        </Text>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    top: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#ffffff',
    lineHeight: 21,
    textAlign: 'center',
    paddingBottom: 12,
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    lineHeight: 16,
    textAlign: 'justify',
    paddingBottom: 8,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
