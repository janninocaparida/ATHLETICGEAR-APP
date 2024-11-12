import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-800">
      <Text className="text-6x1 font-bold text-black">Athletic Gear</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#cd5c5c', // Background color added here
    
  },
  
});
