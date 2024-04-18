import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colorTheme } from '../../constant'
import CompleteProfileCard from '../../components/CompleteProfileCard';
import DashBoardModal from '../../Modal/DashBoardModal.js'

export default function DashBoard() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      {
        <DashBoardModal toggleModal={toggleModal} isModalVisible={isModalVisible} />
      }
      <View contentContainerStyle={styles.container}>
        <TouchableOpacity
          onPress={toggleModal}
          style={{ backgroundColor: colorTheme.primaryColor, position: 'absolute', bottom: 25, right: 25, borderRadius: 20, zIndex: 10 }}>
          <MaterialCommunityIcons name={'plus'} color={"white"} size={30} style={{ padding: 15 }} />
        </TouchableOpacity>
        <ScrollView>
          <View style={{ backgroundColor: colorTheme.primaryColor, height: 150 }} />
          <View style={{ position: 'absolute', top: 0, width: '100%' }}>
            <CompleteProfileCard />
          </View>
          <View style={[styles.subContainer, { marginTop: 100 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '700' }}>Sales Activity</Text>
              <MaterialCommunityIcons name={'reload'} color={"black"} size={25} style={{}} />
            </View>
            {[1, 2, 3, 4,].map((data, index) => (
              <View key={index} style={{ backgroundColor: 'white', borderRadius: 10, elevation: 2, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 15 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'orange', borderRadius: 50 }}>
                      <MaterialCommunityIcons name={'package'} color={"white"} size={25} style={{ padding: 5 }} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                      <Text>0</Text>
                      <Text>Quantity to be packed</Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons name={'arrow-right-drop-circle'} color={"black"} size={25} style={{}} />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center'
  }
})