import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import icons from '../../constants/icons' 


const Drinks = () => {
  return (
    <View style={styles.container}>

<Image
       source={icons.Caps_logo}
/>

<View style={styles.imageContainer}>
    <View style={styles.row}>
      <Image style={styles.drinks} source={icons.drink} />
      <Image style={styles.drinks} source={icons.drink1} />
    </View>

    <View style={styles.row}>
      <Image style={styles.drinks} source={icons.drink2} />
      <Image style={styles.drinks} source={icons.drink3} />
    </View>
  </View>

  <Text style={styles.centeredText}>Sports Drinks</Text>
  
    </View>
  )
}

export default Drinks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd5c5c', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },

  row: {
    flexDirection: 'row', // This arranges child components in a row
    justifyContent: 'space-between', // Optional: space out images
    alignItems: 'center', // Optional: align images vertically
  },
  drinks: {
    flex:1,
    width: 100,
    height:150,
    marginBottom: 10, 
    padding: 50, 
    borderColor: '#f08080', 
    borderWidth: 3, 
    borderRadius: 5, 
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    
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


  drinks1: {
    flex:1,
    width: 200,
    height:300,
    marginBottom: 10, 
    padding: 50, 
    borderColor: '#f08080', 
    borderWidth: 3, 
    borderRadius: 5, 
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    
  }, 

  drinks2: {
    flex:1,
    width: 200,
    height:300,
    marginBottom: 10, 
    padding: 50, 
    borderColor: '#f08080', 
    borderWidth: 3, 
    borderRadius: 5, 
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    
  },

  drinks3: {
    flex:1,
    width: 200,
    height:300,
    marginBottom: 10, 
    padding: 50, 
    borderColor: '#f08080', 
    borderWidth: 3, 
    borderRadius: 5, 
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    
  },
})