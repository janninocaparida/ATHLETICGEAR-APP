import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import icons from '../../constants/icons'







const Shoes = () => {
  return (
    
  
    <View style={styles.container}>

<Image
       style={styles.icons}
       source={icons.Caps_logo}
       
   
       />

<Image
       style={styles.asics1}
       source={icons.nins2}
   
       />
<Image
      style={styles.asics1}
       source={icons.nins}
   
       />
<Image
      style={styles.asics1}
      source={icons.nins1}
/>




<Text style={styles.centeredText}>Athletic Shoes</Text>

    </View>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cd5c5c', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, 
      },

    icons:{
      paddingVertical: 10,
      marginBottom: 20, 
    },

    asics1: {
      flex:1,
      width: 150,
      height:300,
      marginBottom: 10, 
      padding: 12, 
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
  

    asics2: {
      flex:1,
      width: 350,
      height:90,
      marginBottom: 10, 
      padding: 20, 
      borderColor: '#f08080', 
      borderWidth: 3, 
      borderRadius: 5, 
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
    },

    asics3: {
      flex:1,
      width: 350,
      height:90,
      marginBottom: 10, 
      padding: 12, 
      borderColor: '#f08080', 
      borderWidth: 3, 
      borderRadius: 5, 
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
    },

    
});
export default Shoes