import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DashBoardModalData } from '../assets/data/ModalData'
import Modal from 'react-native-modal'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function DashBoardModal({toggleModal,isModalVisible}) {
  return (
    <Modal
    isVisible={isModalVisible}
    onBackdropPress={toggleModal}
  >
    <View style={{ position: 'absolute', bottom: 100, right: 15, }}>
      {DashBoardModalData.map((modal, index) => (
        <TouchableOpacity key={index} style={{ justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center',marginVertical:10 }}>
          <Text style={{ color: 'white', marginRight: 10, fontSize: 15, fontWeight: '600' }}>{modal.name}</Text>
          <View style={{ backgroundColor: modal.iconBackColor, borderRadius: 20 }}>
            <MaterialCommunityIcons name={modal.iconName} color={'white'} size={30} style={{ padding: 3 }} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({})