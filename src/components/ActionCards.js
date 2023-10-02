import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  const openWebsite = url => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blogs</Text>
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerTxt}>What is Kotlin?</Text>
        </View>
        <Image
          source={{
            uri: 'https://bignerdranch.com/assets/img/blog/2017/05/kotlin.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.headerDisc}>
            Kotlin is a JVM language developed at JetBrains, reaching 1.0 in
            February of 2016. Up to this point, it’s primarily gathered steam in
            the Android community, providing relief to developers whose language
            growth had stagnated.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.readMore}
            onPress={() => {
              openWebsite(
                'https://bignerdranch.com/blog/an-introduction-to-kotlin-on-android/',
              );
            }}>
            <Text style={styles.txt}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.readMore}
            onPress={() => {
              openWebsite('https://sayam.live');
            }}>
            <Text style={styles.txt}>Visit Owner Site</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 16,
  },
  card: {
    height: 345,
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevation: {
    backgroundColor: '#B125EA',
    elevation: 4,
    shadowColor: '#7F52FF',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 22,
  },
  cardImage: {
    height: 123,
  },
  bodyContainer: {
    padding: 10,
  },
  headerDisc: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  readMore: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius:16,
  },
  txt:{
    color:"#000",
    fontWeight:'600',
    fontSize:16
  }
});
