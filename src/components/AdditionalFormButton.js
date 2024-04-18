import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colorTheme } from '../constant'
import { useNavigation } from '@react-navigation/native';

export default function AdditionalFormButton({ title, navigateTo, billingAdress, setBillingAddress }) {

    const navigation = useNavigation()
    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: colorTheme.blue, borderRadius: 30 }}>
                    <MaterialCommunityIcons name={'plus'} color={colorTheme.secondaryColor} size={15} style={{ padding: 5 }} />
                </View>
                <Text style={{ color: colorTheme.blue, marginLeft: 10 }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
})