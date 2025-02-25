import React from 'react';
import {
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

const {width} = Dimensions.get('window');
const numColumns = 3;
const cardMargin = 10;
const cardSize = (width - cardMargin * (numColumns + 1)) / numColumns;

interface ImageData {
  id: string;
  uri: ImageSourcePropType;
  cartTitle: string;
  route: string;
}

const images: ImageData[] = [
  {
    id: '1',
    uri: require('../../assets/img/1.png'),
    cartTitle: 'My Portfolio',
    route: 'Portfolio',
  },
  {
    id: '2',
    uri: require('../../assets/img/2.png'),
    cartTitle: 'Claims',
    route: 'Claims',
  },
  {
    id: '3',
    uri: require('../../assets/img/3.png'),
    cartTitle: 'Documents',
    route: 'Documents',
  },
  {
    id: '4',
    uri: require('../../assets/img/4.png'),
    cartTitle: 'Servicing &\n Request',
    route: 'Servicing',
  },
  {
    id: '5',
    uri: require('../../assets/img/5.png'),
    cartTitle: 'View Health\n Card',
    route: 'HealthCard',
  },
  {
    id: '6',
    uri: require('../../assets/img/6.png'),
    cartTitle: 'Health &\n Wellbeing',
    route: 'HealthWellbeing',
  },
  {
    id: '7',
    uri: require('../../assets/img/7.png'),
    cartTitle: 'Products &\n Quotes',
    route: 'Products',
  },
  {
    id: '8',
    uri: require('../../assets/img/8.png'),
    cartTitle: 'Find a\n Provider',
    route: 'Provider',
  },
  {
    id: '9',
    uri: require('../../assets/img/9.png'),
    cartTitle: 'Coming Soon',
    route: 'ComingSoon',
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
      <View style={styles.bottomBarContainer}>
        <TouchableOpacity
          style={styles.bottomBar}
          onPress={() => console.log('Home clicked')}>
          <HomeIcon />
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBar}
          onPress={() => console.log('Notebook clicked')}>
          <NotebookIcon />
          <Text style={styles.bottomBarText}>Notebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBar}
          onPress={() => console.log('Health Card clicked')}>
          <HeathCardIcon />
          <Text style={styles.bottomBarText}>Health Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBar}
          onPress={() => console.log('Plus clicked')}>
          <PlusIcon />
          <Text style={styles.bottomBarText}>Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBar}
          onPress={() => console.log('My Profile clicked')}>
          <MyProfileIcon />
          <Text style={styles.bottomBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: width * 0.4,
  },
  cardContainer: {
    marginBottom: 10,
    flex: 1,
    paddingHorizontal: 8,
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
