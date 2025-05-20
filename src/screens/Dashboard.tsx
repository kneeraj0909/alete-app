import React, {useMemo, useRef} from 'react';
import {
  Image,
  View,
  StyleSheet,
  FlatList,
  Text,
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SlidedataSource = [
  {
    url: require('../../assets/img/slider1.png'),
    text: 'Your Health,\nYour Safety Net! \nDiscover the perfect health insurance for you and your loved ones.',
  },
  {
    url: require('../../assets/img/1.png'),
    text: 'Peace of Mind, Always!\nCovers unexpected medical expenses.\nAccess to quality healthcare without financial stress.',
  },
  {
    url: require('../../assets/img/2.png'),
    text: 'Comprehensive Coverage,\nTailored for You!\nCashless hospitalizations at a vast network of hospitals.',
  },
];

const renderItem = ({
  item,
}: {
  item: {url: ImageSourcePropType; text: string};
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
    <Image source={item.url} style={styles.carouselImage} />
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
    route: 'UpcomingRenewals',
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
    cartTitle: 'View Health\nCard',
    route: 'Dashboard',
  },
  {
    id: '5',
    uri: require('../../assets/img/2.png'),
    cartTitle: 'Claims',
    route: 'Dashboard',
  },
  {
    id: '6',
    uri: require('../../assets/img/4.png'),
    cartTitle: 'Servicing &\nRequest',
    route: 'Dashboard',
  },
  {
    id: '7',
    uri: require('../../assets/img/7.png'),
    cartTitle: 'Products &\nQuotes',
    route: 'Dashboard',
  },
  {
    id: '8',
    uri: require('../../assets/img/6.png'),
    cartTitle: 'Health &\nWellbeing',
    route: 'Dashboard',
  },
  {
    id: '9',
    uri: require('../../assets/img/8.png'),
    cartTitle: 'Find a\nProvider',
    route: 'Dashboard',
  },
];

interface CardImageProps {
  imageUri: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

const CardImage = React.memo(({imageUri, title, onPress}: CardImageProps) => (
  <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
    <Card style={styles.card}>
      <Card.Cover source={imageUri} style={styles.image} />
    </Card>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
));

export default function Dashboard() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const carouselRef =
    useRef<Carousel<{url: ImageSourcePropType; text: string}>>(null);
  const {width} = useWindowDimensions();
  const numColumns = 3;
  const cardMargin = 10;
  const cardSize = useMemo(
    () => (width - cardMargin * (numColumns + 1)) / numColumns,
    [width],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Video
            source={require('../../assets/videos/home-video.mp4')}
            style={styles.video}
            repeat
            resizeMode="cover"
          />
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Carousel
              ref={carouselRef}
              data={SlidedataSource}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              autoplay
              loop
              autoplayInterval={15000}
              autoplayDelay={4000}
              vertical={false}
            />
          </View>
        </View>

        <FlatList
          style={{flex: 1}}
          data={images}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          renderItem={({item}) => (
            <CardImage
              imageUri={item.uri}
              title={item.cartTitle}
              onPress={() => navigation.navigate(item.route)}
            />
          )}
          getItemLayout={(data, index) => ({
            length: cardSize,
            offset: cardSize * index,
            index,
          })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  videoContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    flex: 1,
    marginBottom: 4,
    alignItems: 'center',
  },
  card: {
    width: 100,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 90,
    resizeMode: 'cover',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Inter-VariableFont_opsz,wght',
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  carouselImage: {
    width: '40%',
    height: 100,
    borderRadius: 8,
  },
  carouselText: {
    width: '40%',
    height: 100,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#ffffff',
    textAlign: 'justify',
    lineHeight: 16,
  },
});
