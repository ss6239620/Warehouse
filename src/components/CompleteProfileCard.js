import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { blackText, colorTheme, grayText } from '../constant';
import ProgressBar from '../components/ProgressBar';
import { useNavigation } from '@react-navigation/native';

export default function CompleteProfileCard() {
  const navigation=useNavigation()
    return (
        <View style={{ marginTop: 20, backgroundColor: colorTheme.secondaryColor, width: '90%', alignSelf: 'center', borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name={'sparkles-sharp'} color={colorTheme.primaryColor} size={25} style={{ marginRight: 10 }} />
                    <Text style={[styles.smallText, { color: 'black', fontSize: 15, fontWeight: '600' }]}>Get Started</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <ProgressBar progress={0.2} width={'40%'} />
                    <Text style={[styles.smallText, { color: 'black', fontSize: 15, fontWeight: '600', marginLeft: 10 }]}>20%</Text>
                </View>
            </View>
            <Text style={{ padding: 5, textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in ratione sint sequi quasi ullam voluptates,
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: colorTheme.borderColor, borderRadius: 10, padding: 5, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 50 }}>
                        <MaterialCommunityIcons name={'ray-start-end'} color={colorTheme.primaryColor} size={25} style={{ marginRight: 10, padding: 3 }} />
                    </View>
                    <Text style={[styles.bigText, { marginLeft: 5, fontSize: 16 }]}>Add Item</Text>
                </View>
                <Text style={{ color: colorTheme.blue }}>Later</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: colorTheme.borderColor, borderRadius: 10, padding: 5, marginTop: 15, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={[styles.bigText, { marginLeft: 5, fontSize: 15 }]}>2/5 Completed</Text>
                </View>
                <MaterialCommunityIcons name={'arrow-right'} color={colorTheme.primaryColor} size={25} style={{ marginRight: 10 }} onPress={()=>navigation.navigate('CompleteProfile')} />
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
  })
  