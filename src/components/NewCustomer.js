import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import LineTextInput from './TextInputs/LineTextInput';
import DropDownTextInput from './TextInputs/DropDownTextInput';
import DropDownLineText from './TextInputs/DropDownLineText';
import {
    CurrencyData,
    CustomerSalutationData,
    PaymentTermsData,
    PortalLanuuag,
} from '../assets/data/DropDownData';
import CheckTextInput from './TextInputs/CheckTextInput';
import AdditionalFormButton from './AdditionalFormButton';

export default NewCustomer = () => {
    const navigation = useNavigation();
    const [selected, setselected] = useState(false);
    const [extraInfo, setextraInfo] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
        company_name: '',
        customer_display_name: '',
        email: '',
        phone: '',
        mobile: '',
    });

    const [otherDetils, setotherDetils] = useState({
        currency: '',
        payment_terms: '',
        enable_portal: '',
        portal_language: '',
        website: '',
        facebook: '',
        twitter: '',
    });

    const [billingAddress, setbillingAddress] = useState({
        attention: '',
        street1: '',
        street1: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        fax: '',
        phone: ''
    })

    const handleChange = (name, value) => {
        setCustomerInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleOtherDetilChange = (name, value) => {
        setotherDetils(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    function test(params) {
        console.log(otherDetils);
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header
                    header={'New Customer'}
                    leftIconName={'keyboard-backspace'}
                    rightIconName1={'clipboard-account-outline'}
                    rightIconName2={'check'}
                />
            </View>
            {/* Main Content */}
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.bigText}>Customer Information</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginVertical: 15,
                        }}>
                        <DropDownLineText
                            data={CustomerSalutationData}
                            inputTitle={'Salutation'}
                            dropDownTitle={'Salutation'}
                            style={{ width: '40%', marginRight: 10 }}
                            handleChange={handleChange}
                            textInputParams={'salutation'}
                        />
                        <LineTextInput
                            title={'First Name'}
                            style={{ width: '55%' }}
                            value={customerInfo.first_name}
                            handleChange={handleChange}
                            textInputParams={'first_name'}
                        />
                    </View>
                    <LineTextInput
                        title={'Last Name'}
                        style={{}}
                        value={customerInfo.last_name}
                        handleChange={handleChange}
                        textInputParams={'last_name'}
                    />
                    <LineTextInput
                        title={'Company Name'}
                        style={{ marginTop: 15 }}
                        value={customerInfo.company_name}
                        handleChange={handleChange}
                        textInputParams={'company_name'}
                    />
                    <LineTextInput
                        title={'Customer Display Name'}
                        style={{ marginTop: 15 }}
                        isRequire
                        value={customerInfo.customer_display_name}
                        handleChange={handleChange}
                        textInputParams={'customer_display_name'}
                    />
                    <LineTextInput
                        title={'Email'}
                        style={{ marginTop: 15 }}
                        isiconRequire
                        value={customerInfo.email}
                        handleChange={handleChange}
                        textInputParams={'email'}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15,
                        }}>
                        <LineTextInput
                            title={'Phone'}
                            style={{ marginTop: 15, width: '45%' }}
                            isiconRequire
                            value={customerInfo.phone}
                            handleChange={handleChange}
                            textInputParams={'phone'}
                        />
                        <LineTextInput
                            title={'Mobile'}
                            style={{ marginTop: 15, width: '45%' }}
                            isiconRequire
                            value={customerInfo.mobile}
                            handleChange={handleChange}
                            textInputParams={'mobile'}
                        />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.bigText} onPress={() => test()}>
                        Other Details
                    </Text>
                    <DropDownLineText
                        data={CurrencyData}
                        inputTitle={'Currency'}
                        isRequire
                        dropDownTitle={'Currency'}
                        isUnderLineRequire
                        style={{ marginTop: 15 }}
                        handleChange={handleOtherDetilChange}
                        textInputParams={'currency'}
                    />
                    <DropDownLineText
                        data={PaymentTermsData}
                        inputTitle={'Payment Terms'}
                        dropDownTitle={'Payment Terms'}
                        isUnderLineRequire
                        style={{ marginTop: 25 }}
                        handleChange={handleOtherDetilChange}
                        textInputParams={'payment_terms'}
                    />
                    <CheckTextInput
                        title={'Enable Portal ?'}
                        isiconRequire
                        checkBoxLabel={'Allow portal access for this customer'}
                        selected={selected}
                        setselected={setselected}
                        style={{ marginTop: 25 }}
                        handleChange={handleOtherDetilChange}
                        textInputParams={'enable_portal'}
                    />
                    <DropDownLineText
                        data={PortalLanuuag}
                        inputTitle={'Portal Language'}
                        dropDownTitle={'Portal Language'}
                        isUnderLineRequire
                        style={{ marginTop: 25 }}
                        handleChange={handleOtherDetilChange}
                        textInputParams={'portal_language'}
                    />
                    <Text
                        onPress={() => setextraInfo(true)}
                        style={{
                            color: colorTheme.blue,
                            fontSize: 15,
                            fontWeight: '400',
                            marginTop: 25,
                        }}>
                        Add Website & Social
                    </Text>
                    {extraInfo && (
                        <>
                            <LineTextInput
                                title={'Website'}
                                style={{ marginTop: 25 }}
                                value={otherDetils.website}
                                handleChange={handleOtherDetilChange}
                                textInputParams={'website'}
                            />
                            <LineTextInput
                                title={'Facebook'}
                                style={{ marginTop: 25 }}
                                value={otherDetils.facebook}
                                handleChange={handleOtherDetilChange}
                                textInputParams={'facebook'}
                            />
                            <LineTextInput
                                title={'Twitter'}
                                style={{ marginTop: 25 }}
                                value={otherDetils.twitter}
                                handleChange={handleOtherDetilChange}
                                textInputParams={'twitter'}
                            />
                        </>
                    )}
                </View>
                <AdditionalFormButton
                    title={'Add Billing & Shipping address'}
                    navigateTo={'Address'}
                />
                <AdditionalFormButton
                    title={'Add Contact Person'}
                    navigateTo={'AddContactPerson'}
                />
            </ScrollView>

            {/* Footer
            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View> */}
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
        borderRadius: 5,
    },
    bigText: {
        fontSize: blackText.fontSize,
        color: blackText.color,
        fontWeight: blackText.fontWeight,
    },
    smallText: {
        fontSize: grayText.fontSize,
        color: grayText.color,
        fontWeight: grayText.fontWeight,
    },
    blueText: {
        fontSize: blueText.fontSize,
        color: blueText.color,
        fontWeight: blueText.fontWeight,
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 7,
        borderWidth: 1,
        borderColor: '#d3d2d6',
        height: 200,
        textAlignVertical: 'top',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: colorTheme.primaryColor,
    },
});
