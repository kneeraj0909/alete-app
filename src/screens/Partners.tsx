import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image} from 'react-native';
import Video from 'react-native-video';
import Footer from '../components/Footer';
import PartnersContent from '../../assets/svg/svgImg/partners-content.svg';

const {width, height} = Dimensions.get('window');

const Partners = () => {
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
      </View>
      <View style={styles.partnerContainer}>
        <Image source={require('../../assets/img/placecover.png')} />
        <View style={styles.partnerTextContainer}>
          <Text style={styles.partnerText}>Co-broking arrangement</Text>
          <Text style={styles.partnerText}>with</Text>
        </View>
        <PartnersContent />
      </View>
      <Footer />
    </View>
  );
};

export default Partners;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  video: {
    width: width,
    height: height,
    position: 'absolute',
  },
  partnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{translateX: -width / 2}, {translateY: -height / 2}],
    width: '100%',
    height: '100%',
  },
  partnerTextContainer: {
    marginTop: 34,
    marginBottom: 8,
  },
  partnerText: {
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center',
  },
});
