import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View  style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View  style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View  style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View  style={[styles.card, styles.cardElevated]}>
            <Text>Scrool</Text>
        </View>
        <View  style={[styles.card, styles.cardElevated]}>
            <Text>This</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        color:"#000",
        paddingHorizontal:16
      },
      container:{
        padding:8
      },
      card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
      },
      cardElevated:{
        backgroundColor:'#CADA23',
      },
})