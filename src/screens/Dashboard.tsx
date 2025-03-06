import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Card} from 'react-native-paper';
import Video from 'react-native-video';
import {HomeIcon} from '../../assets/svg/Home';
import {NotebookIcon} from '../../assets/svg/Notebook';
import {HeathCardIcon} from '../../assets/svg/HealthCard';
import {PlusIcon} from '../../assets/svg/Plus';
import {MyProfileIcon} from '../../assets/svg/MyProfile';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import BottomTabBar from '../components/BottomTabBar';
// import Tooltip from 'react-native-tooltips';
const Slideshow = require('react-native-image-slider-show').default;

const {width} = Dimensions.get('window');
const numColumns = 3;
const cardMargin = 10;
const cardSize = (width - cardMargin * (numColumns + 1)) / numColumns;

const SlidedataSource = [
  {
    url: Image.resolveAssetSource(require('../../assets/img/slider1.png')).uri,
    text: 'Your Health,\nYour Safety Net! \nDiscover the perfect health insurance for you and your loved ones.',
  },
  {
    url: Image.resolveAssetSource(require('../../assets/img/slider1.png')).uri,
    text: 'Peace of Mind, Always!\nCovers unexpected medical expenses.\nAccess to quality healthcare without financial stress.',
  },
  {
    url: Image.resolveAssetSource(require('../../assets/img/slider1.png')).uri,
    text: 'Comprehensive Coverage,\nTailored for You!\nCashless hospitalizations at a vast network of hospitals.',
  },
];

interface ImageDataProps {
  id: string;
  uri: ImageSourcePropType;
  cartTitle: string;
  route: string;
}

const images: ImageDataProps[] = [
  {
    id: '1',
    uri: require('../../assets/img/1.png'),
    cartTitle: 'My Portfolio',
    route: 'Portfolio',
  },
  {
    id: '2',
    uri: require('../../assets/img/upcoming-renewal.png'),
    cartTitle: 'Upcoming Renewals',
    route: 'ComingSoon',
  },
  {
    id: '3',
    uri: require('../../assets/img/3.png'),
    cartTitle: 'Documents',
    route: 'Documents',
  },
  {
    id: '4',
    uri: require('../../assets/img/5.png'),
    cartTitle: 'View Health\n Card',
    route: 'HealthCard',
  },
  {
    id: '5',
    uri: require('../../assets/img/2.png'),
    cartTitle: 'Claims',
    route: 'Claims',
  },

  {
    id: '6',
    uri: require('../../assets/img/4.png'),
    cartTitle: 'Servicing &\n Request',
    route: 'Servicing',
  },
  {
    id: '7',
    uri: require('../../assets/img/7.png'),
    cartTitle: 'Products &\n Quotes',
    route: 'Products',
  },
  {
    id: '8',
    uri: require('../../assets/img/6.png'),
    cartTitle: 'Health &\n Wellbeing',
    route: 'HealthWellbeing',
  },
  {
    id: '9',
    uri: require('../../assets/img/8.png'),
    cartTitle: 'Find a\n Provider',
    route: 'Provider',
  },
];

interface CardImageProps {
  imageUri: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

const CardImage = ({imageUri, title, onPress}: CardImageProps) => (
  <TouchableOpacity
    style={[styles.cardContainer, {width: cardSize}]}
    onPress={onPress}>
    <Card style={styles.card}>
      <Card.Cover source={imageUri} style={styles.image} />
    </Card>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function Dashboard() {
  const [position, setPosition] = useState(0);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const tooltipRef = useRef(null);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === SlidedataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/home-video.mp4')}
          style={styles.video}
          repeat
          resizeMode="cover"
        />
        <View style={styles.sliderContainer}>
          <View style={styles.imageSlider}>
            <Slideshow
              position={position}
              dataSource={SlidedataSource}
              containerStyle={styles.slider}
              arrowSize={0}
              indicatorColor="transparent"
              indicatorSelectedColor="transparent"
            />
          </View>
          <View style={styles.textSlider}>
            <Text style={styles.sliderText}>
              {SlidedataSource[position].text}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={{flex: 1}}
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CardImage
            imageUri={item.uri}
            title={item.cartTitle}
            onPress={() => navigation.navigate(item.route)}
          />
        )}
        numColumns={numColumns}
      />
      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  videoContainer: {
    position: 'relative',
    height: width * 0.4,
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  sliderContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    height: width * 0.35,
    marginHorizontal: 10,
  },
  imageSlider: {
    width: '50%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textSlider: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sliderText: {
    fontSize: 9.48,
    fontWeight: '700',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    lineHeight: 18,
  },
  cardContainer: {
    marginBottom: 8,
    flex: 1,
    paddingHorizontal: 6,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: cardSize * 0.9,
    resizeMode: 'cover',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17.8,
    color: '#000000',
    textAlign: 'center',
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  bottomBar: {
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 12,
    color: '#000000',
    paddingTop: 10,
  },
});

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';

// const Dashboard = () => {
//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{ uri: 'https://www.alete.in/' }}
//         style={{ flex: 1 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default Dashboard;
