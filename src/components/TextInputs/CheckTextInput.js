import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colorTheme } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RadioButton from '../RadioButton'

export default function CheckTextInput({ title, selected, style, isRequire, isiconRequire, checkBoxLabel, setselected, handleChange, textInputParams }) {
    function handleClick(params) {
        setselected(!selected)
        handleChange(textInputParams, !selected ? 'Yes' : 'No')
    }
    return (
        <View style={{ ...style }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: colorTheme.blue, fontSize: 15, fontWeight: '400' }}>{title}</Text>
                {isRequire &&
                    <Text style={{ color: 'red', marginLeft: 3 }}>*</Text>
                }
                {
                    isiconRequire && <MaterialCommunityIcons name={'alert-circle-outline'} color={"black"} size={20} style={{ marginLeft: 5 }} />
                }
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Pressable onPress={() => handleClick()}>
                    <RadioButton selected={selected} />
                </Pressable>
                <Text style={{ fontSize: 15, color: 'gray', fontWeight: '500', marginLeft: 10 }}>{checkBoxLabel}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})