import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, {useState} from 'react'
// import { StatusBar } from 'expo-status-bar'
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
const Navbar = () => {

  return (
    <View className=" w-[100%] flex flex-row justify-between">
     <View className="flex flex-row items-center gap-3">

        <View className="bg-slate-100 p-1 rounded-full">
             <Image source={require('../../assets/images/avatar.png')} // Adjust the path and file name accordingly
        style={{ width: 35, height: 35 }} // Adjust the dimensions as needed
      /> 
        </View>
    

      <Text className="text-xl font-[500]">Hi, TOBILOBA</Text>
     </View>

      <View className="flex flex-row gap-6 items-center">
        
<MaterialCommunityIcons name="headset" size={22} color="black" />
<MaterialCommunityIcons name="line-scan" size={22} color="black" />

<View className="relative">
    <SimpleLineIcons name="bell" size={22} color="black" />
    <View className="w-2 top-[-8px] right-[-4px] h-2 absolute bg-red-500 rounded-full"></View>
</View>

      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})


