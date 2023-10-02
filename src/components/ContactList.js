import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contactLists = [
    {
      uid: 1,
      name: 'Sayam',
      status: 'love Coding',
      profile:
        'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA',
    },
    {
      uid: 2,
      name: 'Seetat',
      status: 'love Cricket',
      profile:
        'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA',
    },
    {
      uid: 3,
      name: 'Manas  Gupta',
      status: 'love Cyber',
      profile:
        'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.userContainer}>
        {contactLists.map(({uid, profile, name, status}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: profile}} style={styles.userImg} />
            <View style={styles.userDetail}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 16,
  },
  userContainer: {
    paddingHorizontal: 60,
    marginBottom:3
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    marginRight:16,
    marginBottom:3
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize:16,
    fontWeight:'600',
    color:"#000",
  },
  userStatus: {
    fontSize:12,
    fontWeight:'500',
    color:"#00063e",
  },
});
