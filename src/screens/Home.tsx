import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
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

        <Text style={styles.homeText}>
          Insurance Advisory Services for Ultra High Net Worth Families &
          Businesses
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            text="Client Login"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
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
    fontFamily: 'PlayfairDisplay-VariableFont_wght',
    color: 'white',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: 40,
  },
  buttonContainer: {
    marginTop: height * 0.05,
    backgroundColor: '#41B749',
    borderRadius: 2,
  },
});
