import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import Button from '../components/Button';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}: any) => {
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

      <Text style={styles.homeText}>
        Insurance Advisory Services for Ultra High Net Worth Families &
        Businesses
      </Text>

      <View style={styles.button}>
        <Button
          text="Client Login"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Home;

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
  homeText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -width / 2}, {translateY: -height / 4}],
    color: 'white',
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -width / 6}, {translateY: -height / 16}],
  },
});
