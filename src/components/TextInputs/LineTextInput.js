import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colorTheme } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function LineTextInput({ title, value, style, isRequire, isiconRequire, placeholder, keyboardType, handleChange,textInputParams }) {
    return (
        <View style={{ ...style }}>
            {title &&
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: colorTheme.blue, fontSize: 15, fontWeight: '400' }}>{title}</Text>
                    {isRequire &&
                        <Text style={{ color: 'red', marginLeft: 3 }}>*</Text>
                    }
                    {
                        isiconRequire && <MaterialCommunityIcons name={'alert-circle-outline'} color={"black"} size={20} style={{ marginLeft: 5 }} />
                    }
                </View>
            }
            <TextInput
                style={{
                    borderColor: colorTheme.borderColor,
                    borderBottomWidth: 1,
                    paddingVertical: 0,
                }}
                onChangeText={(text) => { handleChange(textInputParams, text) }}
                value={value}
                placeholder={placeholder ? placeholder : ''}
                keyboardType={keyboardType ? keyboardType : 'default'}
            />
        </View>
    )
}

const styles = StyleSheet.create({})