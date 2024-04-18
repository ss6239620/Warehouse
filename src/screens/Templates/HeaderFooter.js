import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default App = () => {
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
                    <Text>Main Content Goes Here</Text>
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
        elevation:2,
        borderRadius:5
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
