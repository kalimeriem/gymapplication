import React from 'react';
import {
  Image,
  ScrollView,
  ImageSourcePropType,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';
// HomeScreen.tsx
// Replace with THIS exact import:
import type { RootStackParamList } from '../../Navigation/AppNavigator';
// Define your navigation types

// Add to your imports

// Image imports with proper typing
const headerImage: ImageSourcePropType = require('../../assets/images/header.jpg');
const notification: ImageSourcePropType = require('../../assets/images/Notification.png');
const banner: ImageSourcePropType = require('../../assets/images/BG.png');
const fire: ImageSourcePropType = require('../../assets/images/fire.png');
const model: ImageSourcePropType = require('../../assets/images/model.png');
const couple: ImageSourcePropType = require('../../assets/images/welcome.jpg');
const cycle: ImageSourcePropType = require('../../assets/images/cycle.png');
const yoga: ImageSourcePropType = require('../../assets/images/yoga.png');
const walk: ImageSourcePropType = require('../../assets/images/walk.png');
const next: ImageSourcePropType = require('../../assets/images/next.png');
const play: ImageSourcePropType = require('../../assets/images/play.png');
const star: ImageSourcePropType = require('../../assets/images/Star.png');
const book: ImageSourcePropType = require('../../assets/images/Book.png');
const home: ImageSourcePropType = require('../../assets/images/Home.png');
const heart: ImageSourcePropType = require('../../assets/images/H.png');
const calendar: ImageSourcePropType = require('../../assets/images/Calender.png');
const profile: ImageSourcePropType = require('../../assets/images/User.png');
const plus: ImageSourcePropType = require('../../assets/images/Plus.png');
const sleepGraph: ImageSourcePropType = require('../../assets/images/sleep_grap.png');

type ActivityItem = {
  name: string;
  image: ImageSourcePropType;
  status: number;
  color: string;
  darkColor: string;
  lightColor: string;
};

const data: ActivityItem[] = [
  {
    name: 'Cycling',
    image: cycle,
    status: 20,
    color: '#F8D7D7',
    darkColor: '#EBACA2',
    lightColor: '#85C1E9',
  },
  {
    name: 'Walking',
    image: walk,
    status: 30,
    color: '#C9E3CC',
    darkColor: '#1ABC9C',
    lightColor: '#76D7C4',
  },
  {
    name: 'Yoga',
    image: yoga,
    status: 50,
    color: '#F9E79F',
    darkColor: '#F1C40F',
    lightColor: '#F7DC6F',
  },

];

// Fixed ImageContainer component
interface ImageContainerProps {
  image: ImageSourcePropType;
  size?: number;
  height?: number;
  width?: number;
}

const ImageContainer = ({ image, size, height, width }: ImageContainerProps) => (
  <View style={[styles.imageContainer, {
    height: size || height || 50,
    width: size || width || 50
  }]}>
    <Image
      source={image}
      style={styles.fullSizeImage}
      resizeMode="contain"
    />
  </View>
);

// Fixed BottomButton component
const BottomButton = ({
  image,
  style,
  imageStyle
}: {
  image?: ImageSourcePropType;
  style?: any;
  imageStyle?: any
}) => (
  <View style={[styles.bottomButtonContainer, style]}>
    {image && (
      <Image
        source={image}
        style={[
          styles.bottomButtonImage,
          image === plus && styles.plusButtonImage,
          imageStyle,
        ]}
      />
    )}
    {image === home && <View style={styles.activeTabIndicator} />}
  </View>
);

const BottomTab = () => (
  <View style={styles.bottomTabContainer}>
    <BottomButton image={home} />
    <BottomButton image={heart} />
    <BottomButton
      image={plus}
      style={styles.plusButtonContainer}
    />
    <BottomButton />
    <BottomButton image={calendar} />
    <BottomButton image={profile} />
  </View>
);

const VideoPlay = () => {
  const handlePlayPress = () => {
    const youtubeUrl = 'https://www.youtube.com/watch?v=IT94xC35u6k'; // Replace with your video ID
    Linking.openURL(youtubeUrl).catch(err => {
      console.error("Failed to open URL:", err);
    });
  };

  return (
    <View style={styles.videoContainer}>
      <View style={styles.videoThumbnailContainer}>
        <ImageBackground source={couple} style={styles.videoThumbnail}>
          <LinearGradient
            locations={[0, 1.0]}
            colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
            style={styles.videoGradient}
          />
          <Text style={styles.videoTitle}>Transformation</Text>
          <View style={styles.starBadge}>
            <Image source={star} style={styles.starIcon} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.videoInfoContainer}>
        <TouchableOpacity
          style={styles.playButtonContainer}
          onPress={handlePlayPress}
          activeOpacity={0.7} // Optional: adjust the opacity when pressed
        >
          <Image source={play} style={styles.playIcon} />
        </TouchableOpacity>
        <Text style={styles.videoInfoTitle}>2 Hour Bulking Trainer</Text>
        <View style={styles.videoMetaContainer}>
          <Text style={styles.videoMetaText}>
            <Image source={book} style={styles.bookIcon} />
            {'   Beginner'}
          </Text>
          <Text style={[styles.videoMetaText, styles.durationText]}>
            45 Min
          </Text>
        </View>
      </View>
    </View>
  );
};

const Header = () => (
  <View style={styles.headerContainer}>
    <ImageContainer image={headerImage} size={50} />
    <HeaderTitle />
    <ImageContainer image={notification} height={25} width={25} />
  </View>
);

const Banner = () => (
  <>
    <ImageBackground style={styles.bannerContainer} source={banner}>
      <View style={styles.bannerContent}>
        <View style={styles.bannerHeader}>
          <View style={styles.fireBadge}>
            <Image source={fire} style={styles.fireIcon} />
          </View>
          <Text style={styles.offerLabel}></Text>
        </View>
        <Text style={styles.offerText}>Welcome back, champion!  </Text>
        <Text style={styles.offerText}>Complete Your Streak 🏋️‍♂️</Text>
      </View>
    </ImageBackground>
    <Image source={model} style={styles.modelImage} />
  </>
);

const HeaderTitle = () => (
  <View style={styles.headerTitleContainer}>
    <Text style={styles.headerName}>Hi, MERAS</Text>
    <Text style={styles.headerDate}>MAY 10, 2025</Text>
  </View>
);
const Card = ({ data, index }: { data: ActivityItem; index: number }) => (
  <View style={[
    styles.card,
    {
      backgroundColor: data.color,
      height: 200 // Fixed height for all cards
    }
  ]}>
    <Image source={data.image} style={styles.cardIcon} />
    <View style={styles.progressContainer}>
      <Progress.Circle
        size={60}
        progress={data.status / 100}
        showsText
        unfilledColor="#ededed"
        borderColor="#ededed"
        color={data.darkColor}
        direction="counter-clockwise"
        fill="white"
        strokeCap="round"
        thickness={5}
        style={styles.progressShadow}
        textStyle={styles.progressText}
      />
    </View>
    <View style={styles.activityTextContainer}>
      <Text style={styles.cardText}>Day     1</Text>
      <Text style={styles.cardText}>Time   20 min</Text>
    </View>
    <View style={styles.cardFooter}>
      <Text style={styles.cardActivityName}>{data.name}</Text>
      <View style={[
        styles.nextButton,
        { backgroundColor: data.lightColor }
      ]}>
        <Image source={next} style={styles.nextIcon} />
      </View>
    </View>
  </View>
);

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Header />
            <Banner />
            <View style={styles.activitiesContainer}>
              <Text style={styles.sectionTitle}>Your Activities</Text>
              <View style={styles.activitiesRow}>
                {data.map((item, index) => (
                  <Card data={item} index={index} key={index} />
                ))}
              </View>
              <View style={{ height: 20 }} />
              <View style={{ height: 20 }} />

              {/* My Plan Section */}
              <View style={styles.section}>
                <View style={styles.planHeader}>
                  <Text style={styles.sectionTitle}>My Plan</Text>
                  <Text style={styles.planSubtitle}>MAY, 2025</Text>
                </View>

                <Text style={styles.weekText}>WEEK 1</Text>

                <View style={styles.planCard}>
                  <Text style={styles.planItem}>Body Weight</Text>
                  <Text style={styles.workoutText}>Workout 1 of 5</Text>

                  <View style={styles.nextExerciseContainer}>
                    <Text style={styles.nextExerciseLabel}>Next exercise ⏩ </Text>
                    <Text style={styles.nextExerciseName}>Lower Strength</Text>
                  </View>
                </View>

                {/* Three Boxes Section */}
                <View style={styles.boxesContainer}>
                  <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('WarmupScreen')}
                  >
                    <Ionicons name="body" size={24} color="#4a90e2" />
                    <Text style={styles.boxText}>warm-up</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.box}
                    onPress={() => {
                      console.log('Attempting to navigate to WarmupScreen');
                      navigation.navigate('AchievementsScreen')
                    }
                    }
                  >
                    <Ionicons name="trophy" size={24} color="#4a90e2" />
                    <Text style={styles.boxText}>Achievements</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('ProgressScreen')}
                  >
                    <Ionicons name="stats-chart" size={24} color="#4a90e2" />
                    <Text style={styles.boxText}>progress</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Fitness Video</Text>
                <Text style={styles.viewAllLink}>View All</Text>
              </View>
              <View style={styles.videosRow}>
                <VideoPlay />
                <VideoPlay />
              </View>
            </View>
            {/* ADDED: Water, Sleep, Calories Section - Placed at the end as requested */}
            <View style={styles.horizontalContainer}>
              {/* Left Column - Water Intake */}
              <View style={styles.waterColumn}>
                <View style={styles.statsCard}>
                  <View style={styles.statsHeader}>
                    <Text style={styles.statsTitle}>Water Intake</Text>
                    <Text style={styles.statsValue}>4 Liters</Text>
                  </View>
                  <Text style={styles.statsSubtitle}>Real time updates</Text>
                  <View style={styles.waterTimeline}>
                    {[
                      { time: '6am - 8am', amount: '600ml' },
                      { time: '9am - 11am', amount: '500ml' },
                      { time: '11am - 2pm', amount: '1000ml' },
                      { time: '2pm - 4pm', amount: '700ml' },
                      { time: '4pm - now', amount: '900ml' },
                    ].map((item, index) => (
                      <View key={index} style={styles.timelineItem}>
                        <View style={styles.timelineDot} />
                        {index < 4 && <View style={styles.timelineLine} />}
                        <View style={styles.timelineText}>
                          <Text style={styles.timeText}>{item.time}</Text>
                          <Text style={styles.amountText}>{item.amount}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>

              {/* Right Column - Sleep & Calories */}
              <View style={styles.rightColumn}>
                {/* Sleep Card */}
                <View style={styles.statsCard}>
                  <View style={styles.statsHeader}>
                    <Text style={styles.statsTitle}>Sleep</Text>
                    <Text style={styles.statsValue}>8h 20m</Text>
                  </View>
                  <Image
                    source={require('../../assets/images/sleep_grap.png')}
                    style={styles.sleepGraph}
                    resizeMode="contain"
                  />
                </View>

                {/* Calories Card */}
                <View style={styles.statsCard}>
                  <View style={styles.statsHeader}>
                    <Text style={styles.statsTitle}>Calories</Text>
                    <Text style={styles.statsValue}>780 kCal</Text>
                  </View>
                  <View style={styles.caloriesFooter}>
                    <Image
                      source={require('../../assets/images/fire.png')}
                      style={styles.calorieIcon}
                    />
                    <Text style={styles.caloriesLeft}>230kCal left</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>

      </SafeAreaView >
      <BottomTab />
    </View >
  );
}

const styles = StyleSheet.create({
  // Layout
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  activitiesContainer: {
    marginTop: 20,
  },

  // Header
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTitleContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerName: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  headerDate: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    opacity: 0.6,
  },

  // Image
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSizeImage: {

    height: '100%',
    width: '100%',
  },

  // Banner
  bannerContainer: {
    marginTop: 20,
    padding: 30,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
  },
  bannerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fireBadge: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  fireIcon: {
    height: 50,
    width: 35,
    margin: 3,
  },
  offerLabel: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  offerText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
  },
  modelImage: {
    position: 'absolute',
    right: 75,
    bottom: 70,
    height: 53,
    width: 53,
    transform: [{ rotateY: '180deg' }],
  },

  // Sections
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  viewAllLink: {
    fontFamily: 'Poppins-Regular',
    opacity: 0.5,
    fontSize: 12,
  },

  // Activities
  activitiesRow: {
    flexDirection: 'row',
    marginHorizontal: -8,
    marginLeft: 4,
    marginRight: 4,
  },
  videosRow: {
    flexDirection: 'row',
  },

  // Card
  card: {
    flex: 1,
    padding: 15,
    marginHorizontal: 6,
    borderRadius: 12,
    shadowColor: 'lightgrey',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 2,
    shadowRadius: 2,
    justifyContent: 'space-between',
    marginRight: 7,
  },
  cardActivityName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12.5,
    marginRight: 8, // Space between text and arrow
    flexShrink: 1, // Allows text to wrap if needed
  },
  activityTextContainer: {
    marginVertical: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', // Pushes footer to bottom
  },

  cardIcon: {
    height: 33,
    width: 33,
  },
  progressContainer: {
    alignSelf: 'center',
    marginVertical: 5,
    height: 50,
  },
  progressShadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  progressText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
  },

  nextButton: {
    padding: 2,
    borderRadius: 10,
  },
  nextIcon: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },

  // Video
  videoContainer: {
    borderRadius: 15,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    width: 300,
    borderWidth: 1.5,          // Add grey border
    borderColor: '#e0e0e0',  // Light grey border color
    shadowColor: 'grey',
    shadowOffset: { width: -3, height: 5 },  // Slightly reduced shadow offset
    shadowOpacity: 0.2,      // Reduced opacity for more subtle shadow
    shadowRadius: 5,
    overflow: 'hidden',      // Ensures border radius clips content
  },
  videoThumbnailContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoThumbnail: {
    height: 150,
    width: '100%',
  },
  videoGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  videoTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  starBadge: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 5,
    right: 10,
    top: 10,
    borderRadius: 5,
  },
  starIcon: {
    height: 12,
    width: 12,
  },
  videoInfoContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginTop: 4,
  },
  playButtonContainer: {
    position: 'absolute',
    backgroundColor: '#8860a2',
    padding: 13,
    right: 25,
    top: -25,
    borderRadius: 25,
    zIndex: 3,
  },
  playIcon: {
    height: 19,
    width: 17,
  },
  videoInfoTitle: {
    fontFamily: 'Poppins-Regular',
  },
  videoMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  videoMetaText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  durationText: {
    color: '#8860a2',
  },
  bookIcon: {
    height: 25,
    width: 25,
  },

  // Bottom Tab
  bottomTabContainer: {
    position: 'absolute',
    bottom: 10,
    left: 25,
    right: 25,
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  bottomButtonContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  bottomButtonImage: {
    height: 20,
    width: 20,
  },
  plusButtonImage: {
    marginTop: 3,
    height: 40,
    width: 40,
  },
  plusButtonContainer: {
    position: 'absolute',
    left: '43%',
    top: -14,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  activeTabIndicator: {
    width: '10%',
    position: 'absolute',
    height: 2,
    backgroundColor: '#8860a2',
    bottom: 0,
    left: 25,
  },
  // New styles for the bottom stats section
  bottomStatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginBottom: 80,
    paddingHorizontal: 5,
    gap: 8,
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 20,
    elevation: 2,
  },
  statsHeader: {

    marginBottom: 8,
  },
  statsTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#555',
  },
  statsValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B3AB9',
    marginTop: 3,
  },
  statsSubtitle: {
    fontSize: 9,
    color: '#999',
    marginBottom: 8,
  },
  waterTimeline: {
    marginLeft: 5,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6B3AB9',
    marginRight: 8,
    marginTop: 3,
  },
  timelineLine: {
    width: 1,
    height: 18,
    backgroundColor: '#6B3AB9',
    opacity: 0.3,
    position: 'absolute',
    left: 3.5,
    top: 11,
  },
  timelineText: {
    flex: 1,
  },
  timeText: {
    fontSize: 9,
    color: '#666',
  },
  amountText: {
    fontSize: 10,
    color: '#6B3AB9',
    fontWeight: '600',
  },
  sleepGraph: {
    width: '100%',
    height: 100,
    marginTop: 5,
  },
  caloriesFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    height: 100,
  },
  calorieIcon: {
    width: 50,
    height: 70,
    marginRight: 4,
  },
  caloriesLeft: {

    fontSize: 13,
    color: '#6B3AB9',
    fontWeight: '600',
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 12,
    gap: 12,
  },
  waterColumn: {
    flex: 1.1, // Takes 2/3 of space
  },
  rightColumn: {
    flex: 1, // Takes 1/3 of space
    gap: 0,
  },

  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
    marginLeft: -0.6,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  planSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  weekText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  planItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  workoutText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  nextExerciseContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  nextExerciseLabel: {
    fontSize: 14,
    color: '#666',
  },
  nextExerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginTop: 5,
  },
  boxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  box: {
    width: '30%',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  boxText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
    marginTop: 8,
  },
});