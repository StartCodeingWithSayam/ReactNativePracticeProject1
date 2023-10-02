import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card </Text>
      <View style={styles.mainContainer}>
        <View style={[styles.card,styles.CardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.CardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.CardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardFour]}>
          <Text>Yellow</Text>
        </View>
        </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    color:"#000",
    fontWeight:'bold',
    paddingHorizontal:16
  },
  mainContainer:{
    flex:1,
    flexDirection:'row',
    padding:8
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    borderRadius:4,
    margin:8
  },
  CardOne:{
    backgroundColor:"#EF5354"
  },
  CardTwo:{
    backgroundColor:"#50DBB4"
  },
  CardThree:{
    backgroundColor:"#5DA3FA"
  },
  cardFour:{
    backgroundColor:"#f9e076"
  }
})