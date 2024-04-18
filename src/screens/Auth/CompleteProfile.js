import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorTheme, blackText, blueText, grayText } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function CompleteProfile() {
    const navigation= useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                    <Text style={[styles.bigText, { fontSize: 19 }]}>Get Started</Text>
                    <View style={{ borderColor: colorTheme.borderColor, borderWidth: 1, borderRadius: 50 }}>
                        <MaterialCommunityIcons name={'close'} color={"black"} size={20} style={{ padding: 2 }} onPress={()=>navigation.goBack()} />
                    </View>
                </View>
                <View style={{ backgroundColor: colorTheme.borderColor, height: 1, marginVertical: 15 }} />
                <Text style={{ color: 'black', }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ea cupiditate
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={'sparkles-sharp'} color={'#fad60c'} size={25} style={{ marginRight: 10 }} />
                        <Text style={[styles.bigText, { fontSize: 19 }]}>Tasks</Text>
                    </View>
                    <View style={{
                        borderStyle: 'dotted',
                        borderBottomWidth: 1.5,
                    }}>
                        <Text style={[styles.bigText, { fontSize: 15 }]}>4/5 Completed</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: colorTheme.borderColor, borderRadius: 10, padding: 10,marginVertical:15 }}>
                    {[1, 2, 3].map((dat, index) => (
                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name={'cash'} color={'black'} size={25} style={{ padding: 5 }} />
                                <Text style={[styles.bigText, { fontSize: 15 }]}>Create purchase Order</Text>
                            </View>
                            <MaterialCommunityIcons name={'check-circle'} color={'green'} size={25} style={{ marginRight: 10 }} />
                        </View>
                    ))}
                </View>
                {[1, 2, 3, 4].map((_dat, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', elevation: 2, borderRadius: 10, padding: 15, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#FA4A0C', borderRadius: 50, marginRight: 5 }}>
                                <MaterialCommunityIcons name={'cash'} color={'white'} size={25} style={{ padding: 5 }} />
                            </View>
                            <Text style={[styles.bigText, { fontSize: 15 }]}>Create purchase Order</Text>
                        </View>
                        <MaterialCommunityIcons name={'arrow-right'} color={colorTheme.primaryColor} size={25} style={{ marginRight: 10 }} />
                    </View>
                ))}
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