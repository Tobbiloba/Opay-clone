import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import Navbar from '../components/Navbar';
import { StatusBar } from 'expo-status-bar';
import BalanceCard from '../components/BalanceCard';
import ActionOptions from '../components/ActionOptions';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Removed the array around 2000
  }, []);

  return (
    <View className="h-[100%] w-[100%] bg-slate-100">
           <StatusBar
        animated={true}
        backgroundColor="#f1f5f9"
        style='dark'
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View className="mt-10 px-4">
          <Navbar />
          <BalanceCard />
          <ActionOptions />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
