import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Login from '../screens/Auth/Login';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { blackText, colorTheme, grayText } from '../constant';
import CompleteProfileCard from '../components/CompleteProfileCard';
import Header from '../components/Header';
import { DrawerScreens } from '../assets/data/DrawerData';

const Drawer = createDrawerNavigator();

function DrawerInsideComponent(params) {
  return (
    <View style={{ backgroundColor: colorTheme.primaryColor, justifyContent: 'space-between', marginBottom: 10 }}>
      <View style={{ padding: 10, }}>
        <View style={{ backgroundColor: 'white', width: 100, borderRadius: 50 }}>
          <MaterialCommunityIcons name={'account'} color={"gray"} size={70} style={{ padding: 15 }} />
        </View>
      </View>
      <View style={{ padding: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Sharvesh Corp</Text>
          <MaterialCommunityIcons name={'arrow-down-drop-circle'} color={"white"} size={25} />
        </View>
        <Text style={{ color: 'white' }}>Sharvesh.221828@vcet.edu.in</Text>
      </View>
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerInsideComponent />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}



export default function SideDrawer() {
  return (
    <Drawer.Navigator initialRouteName='DashBoard' screenOptions={{ drawerActiveBackgroundColor: colorTheme.sideBarColor, drawerLabelStyle: { color: 'black' } }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {DrawerScreens.map((DrawerData, index) => (
        <Drawer.Screen key={index} name={DrawerData.ScreenName} component={DrawerData.DrawerComponent} options={{
          header: (() => (
            <Header  header={DrawerData.HeaderName} rightIconName1={DrawerData.rightIconName1}  rightIconName2={DrawerData.rightIconName2}  />
          )),
          drawerLabel: DrawerData.Label,
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name={DrawerData.IconName} color={"black"} size={25} />
          )
        }} />
      ))}
    </Drawer.Navigator>
  );
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
})
