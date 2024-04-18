import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import DropDownLineText from './TextInputs/DropDownLineText';
import LineTextInput from './TextInputs/LineTextInput';
import { CustomerSalutationData } from '../assets/data/DropDownData';

export default AddContactPerson = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header header={'New Customer'} leftIconName={'keyboard-backspace'} rightIconName1={'clipboard-account-outline'} rightIconName2={'check'} />
            </View>
            {/* Main Content */}
            <ScrollView>
                <View style={styles.content}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Contact Person</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 15 }}>
                        <DropDownLineText data={CustomerSalutationData} inputTitle={'Salutation'} dropDownTitle={'Salutation'} style={{ width: '40%', marginRight: 10 }} />
                        <LineTextInput title={'First Name'} style={{ width: '55%' }} />
                    </View>
                    <LineTextInput title={'Last Name'} style={{}} />
                    <LineTextInput title={'Email'} style={{ marginTop: 15 }} />
                    <LineTextInput title={'Contact Phone'} style={{ marginTop: 15, }} keyboardType={'number-pad'} />
                    <LineTextInput title={'Other Details'} style={{ marginTop: 15, }} />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: colorTheme.appBackGroundColor,
        paddingHorizontal: 15,
        paddingVertical: 20,
        elevation: 2,
        borderRadius: 5
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
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

