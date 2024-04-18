import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SideDrawer from './Drawer'
import CompleteProfile from '../screens/Auth/CompleteProfile'
import NewCustomer from '../components/NewCustomer'
import Address from '../components/AddAddress'
import AddContactPerson from '../components/AddContactPerson'

const Stack = createNativeStackNavigator()

export default StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='SideDrawer'>
            <Stack.Screen name='SideDrawer' component={SideDrawer} options={{ headerShown: false }} />
            <Stack.Screen name='CompleteProfile' component={CompleteProfile} options={{ headerShown: false }} />
            <Stack.Screen name='NewCustomer' component={NewCustomer} options={{ headerShown: false }} />
            <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
            <Stack.Screen name='AddContactPerson' component={AddContactPerson} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
