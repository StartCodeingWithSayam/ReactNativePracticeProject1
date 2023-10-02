import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Awesome Tech Stacks </Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:"https://cdn.icon-icons.com/icons2/2699/PNG/512/javascript_horizontal_logo_icon_170553.png"}} style={styles.cardImg} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTittle}>JavaScript</Text>
            <Text style={styles.cardLabel}>Language of browser</Text>
            <Text style={styles.cardDisc} >JavaScript (JS) is a dynamic programming language used for web development, web applications, and game development.0 It is a lightweight interpreted or just-in-time compiled programming language with first-class functions.</Text>
        <Text style={styles.cardFooter}>Learn it Now</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:"#000",
        fontWeight:'bold',
        paddingHorizontal:16
      },
      card:{
        height:321, 
        borderRadius:6,
        marginVertical: 12,
        marginHorizontal:16,
      },
      cardElevated:{
        backgroundColor:"#000",
        elevation:3,
        shadowOffset:{
          width:1,height:1
        },
        
      },
      cardImg:{
        height:121,
        backgroundColor:'#fff',
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
      },
      cardTittle:{
        color:"#fff",
        fontSize:25,
        fontWeight:'bold',
        marginBottom:6,
      },
      cardLabel:{  
        color:"#fff",
        fontSize:14,
        marginBottom:6,
    },
      cardDisc:{
        color:"#fff",
        fontSize:15,
        marginBottom:6,
      },
      cardFooter:{
        color:"#fff",
        fontWeight:'500',
        fontSize:16,
        fontStyle:'italic'
    } 
})