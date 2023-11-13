import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const BalanceCard = () => {
    const [showBalance, setShowBalance] = useState(true)
  return (
    <View style={styles.boxContainer} className="bg-[#45a786] mt-8 px-4 py-5 rounded-xl">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-1 items-center">
        <Ionicons name="shield-checkmark" size={16} color="white" /> 
        <Text className="text-white">Available Balance</Text>

        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {
            showBalance ?  <MaterialIcons name="visibility" size={16} color="white" /> : <MaterialIcons name="visibility-off" size={16} color="white" />
        }
        </TouchableOpacity>
        
        </View>
        <View className="flex flex-row gap-1 items-center">
          <Text className="text-white">Transaction History</Text>
          <MaterialIcons name="keyboard-arrow-right" size={16} color="white" />
        </View>
      </View>
      <View className="mt-4 flex flex-row justify-between items-center">
        <Text className="text-2xl font-semibold text-white">{showBalance ? '₦11,000.05' : '****'}</Text>

        <Text className="bg-white px-5 text-[#45a786] rounded-full py-2">
            + Add Money
        </Text>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  boxContainer: {
    // width: 100,
    // height: 100,
    // backgroundColor: 'white',
    borderRadius: 10,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { width: 1, height: 3 },
    //     shadowOpacity: 0.75,
    //     shadowRadius: 10,
    //   },
    //   android: {
    //     elevation: 20,
    //   },
    // }),
  },
});
