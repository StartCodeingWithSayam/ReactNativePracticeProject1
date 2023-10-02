import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './src/components/FlatCard'
import ElevatedCards from './src/components/ElevatedCards'
import FancyCards from './src/components/FancyCards'
import ActionCards from './src/components/ActionCards'
import ContactList from './src/components/ContactList'

const MyApp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyApp

const styles = StyleSheet.create({})