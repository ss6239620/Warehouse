import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colorTheme, blackText, blueText, grayText } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Customers() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { navigation.navigate('NewCustomer') }}
        style={{ backgroundColor: colorTheme.primaryColor, position: 'absolute', bottom: 25, right: 25, borderRadius: 20, zIndex: 10 }}>
        <MaterialCommunityIcons name={'plus'} color={"white"} size={30} style={{ padding: 15 }} />
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text>Template</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.appBackGroundColor
  },
  subContainer: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    // backgroundColor:"red"
  },
  bigText: {
    fontSize: blackText.fontSize,
    color: blackText.color,
    fontWeight: blackText.fontWeight
  },
  smallText: {
    fontSize: grayText.fontSize,
    color: grayText.color,
    fontWeight: grayText.fontWeight
  },
  blueText: {
    fontSize: blueText.fontSize,
    color: blueText.color,
    fontWeight: blueText.fontWeight
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 7,
    borderWidth: 1,
    borderColor: "#d3d2d6",
    height: 200,
    textAlignVertical: 'top',
  },
})