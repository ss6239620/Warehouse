import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/DrawerScreens/DashBoard';
import StackNavigator from './src/Navigation/StackNavigator';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})