import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View className="bg-[#45a786] h-[100%] w-[100%] flex flex-col items-center justify-center">
        <StatusBar
        animated={true}
        backgroundColor="#45a786"
        style='light'
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
      />
        <View className="bg-white rounded-full p-1">
           <Image source={require('../../assets/images/logo.png')} // Adjust the path and file name accordingly
        style={{ width: 80, height: 80 }} // Adjust the dimensions as needed
      /> 
        </View>

        <View className="mt-4 relative top-[2rem]">
             <Text className="text-[26px] font-bold text-blue-950">We are Beyond Banking</Text>
        </View>
       

        <View className="mt-8 flex flex-row justify-between items-center">
        <Image source={require('../../assets/images/cbn-logo.png')} // Adjust the path and file name accordingly
        style={{ width: 25, height: 25 }} // Adjust the dimensions as needed
      /> 
      <Text className="text-[11px] font-bold text-blue-950 ml-2">LICENSED BY CBN AND INSURED BY</Text>
      <View className="ml-2">
        <Text className="text-[23px]  font-[900] text-blue-950">NDIC</Text>
        <Text className="text-[4px]">Nigeria Deposit Insurance Company</Text>
        <Text className="text-[3px] text-slate-500 text-right">Insurance company</Text>
      </View>
        </View>
        
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})