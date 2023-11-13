import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
const ActionOptions = () => {
  return (
    <View style={styles.boxContainer} className="mt-4 rounded-xl bg-white flex flex-row justify-evenly py-5">
      <View className="flex flex-col justify-center items-center gap-2">
        <View className="bg-[#e1f8f0] rounded-xl p-[5px]">
            <MaterialIcons name="perm-contact-cal" size={24} color="#45a786" />
        </View>
        
        <Text>To OPay</Text>
      </View>
      <View className="flex flex-col justify-center items-center gap-2">
      <View className="bg-[#e1f8f0] rounded-xl p-[5px]">
      <MaterialCommunityIcons name="bank" size={24} color="#45a786" /> 
      </View>
        <Text>To Bank</Text>
      </View>
      <View className="flex flex-col justify-center items-center gap-2">
      <View className="bg-[#e1f8f0] rounded-xl p-[6px]">
        <View className="bg-[#45a786] p-1 rounded-md">
            <AntDesign name="arrowsalt" size={16} color="white" />
        </View>
        </View>
        <Text>Withdraw</Text>
      </View>
    </View>
  );
};

export default ActionOptions;

const styles = StyleSheet.create({
    boxContainer: {
      // width: 100,
      // height: 100,
      // backgroundColor: 'white',
      borderRadius: 10,
      // ...Platform.select({
      //   ios: {
      //     shadowColor: '#45a786',
      //     shadowOffset: { width: 0, height: 1 },
      //     shadowOpacity: 0.5,
      //     shadowRadius: 10,
      //   },
      //   android: {
      //     elevation: 2,
      //   },
      // }),
    },
  });
  