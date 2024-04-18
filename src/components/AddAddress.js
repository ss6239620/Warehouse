import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import LineTextInput from './TextInputs/LineTextInput';

export default App = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header header={'Address'} leftIconName={'keyboard-backspace'} rightIconName2={'check'} />
            </View>
            {/* Main Content */}
            <ScrollView>
                <View style={styles.content}>
                    <Text style={{ fontSize: 15, color: colorTheme.blue, fontWeight: '400' }}>Billing Address</Text>
                    <LineTextInput placeholder={'Attention'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Street 1'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Street 2'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'City'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'State'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Zipcode'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Country/Region'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Fax'} keyboardType={'number-pad'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Phone'} keyboardType={'number-pad'} style={{ marginTop: 20 }} />
                </View>
                <View style={styles.content}>
                    <Text style={{ fontSize: 13, color: colorTheme.blue, fontWeight: '400', textAlign: 'right' }}>Copy Billing Address</Text>
                    <Text style={{ fontSize: 15, color: colorTheme.blue, fontWeight: '400' }}>Shipping Address</Text>
                    <LineTextInput placeholder={'Attention'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Street 1'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Street 2'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'City'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'State'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Zipcode'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Country/Region'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Fax'} keyboardType={'number-pad'} style={{ marginTop: 20 }} />
                    <LineTextInput placeholder={'Phone'} keyboardType={'number-pad'} style={{ marginTop: 20 }} />
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
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
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
