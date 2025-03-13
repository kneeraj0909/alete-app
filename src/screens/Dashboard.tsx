import React from 'react';
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
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

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
    url: Image.resolveAssetSource(require('../../assets/img/1.png')).uri,
    text: 'Peace of Mind, Always!\nCovers unexpected medical expenses.\nAccess to quality healthcare without financial stress.',
  },
  {
    url: Image.resolveAssetSource(require('../../assets/img/2.png')).uri,
    text: 'Comprehensive Coverage,\nTailored for You!\nCashless hospitalizations at a vast network of hospitals.',
  },
];

const renderItem = ({item}: {item: {url: string; text: string}}) => (
  <View style={styles.carouselItem}>
    <Image source={{uri: item.url}} style={styles.carouselImage} />
    <Text style={styles.carouselText}>{item.text}</Text>
  </View>
);

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
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/home-video.mp4')}
          style={styles.video}
          repeat
          resizeMode="cover"
        />

        <View style={styles.sliderContainer}></View>
      </View>

      <FlatList
        style={{flex: 1}}
        data={images}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({item}) => (
          <CardImage
            imageUri={item.uri}
            title={item.cartTitle}
            onPress={() => navigation.navigate(item.route)}
          />
        )}
        numColumns={numColumns}
      />
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

  carouselItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselImage: {
    width: width * 0.35,
    height: 200,
    borderRadius: 10,
  },
  carouselText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    paddingLeft: 10,
  },
  sliderContainer: {
    position: 'absolute',
  },
});
