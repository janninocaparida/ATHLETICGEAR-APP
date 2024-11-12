import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const User = () => {
  return (
    <View style={styles.container}>
      
        <Text style={styles.centeredText}>Profile</Text>
      
        
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd5c5c', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    
    height:10, 
  },

  

  centeredText: {
    marginVertical: 10,
    
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fffacd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  


});

