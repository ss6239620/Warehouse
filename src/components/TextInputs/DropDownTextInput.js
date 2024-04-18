import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colorTheme } from '../../constant';



export default DropDownTextInput = ({ dropDownTitle, data, isRequire, inputTitle, style }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: colorTheme.blue }]}>
                    {dropDownTitle}
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={[styles.container, { ...style }]}>
            <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 5 }}>
                <Text style={{ color: colorTheme.blue, fontSize: 15, fontWeight: '400' }}>{inputTitle}</Text>
                {isRequire &&
                    <Text style={{ color: 'red', marginLeft: 3 }}>*</Text>
                }
            </View>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: colorTheme.blue }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? dropDownTitle : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? colorTheme.blue : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
            {renderLabel()}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});