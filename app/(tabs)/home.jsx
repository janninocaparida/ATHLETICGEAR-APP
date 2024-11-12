import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import icons, { image } from '../../constants/icons'; 

const Home = () => {
  return (
    <View style={styles.container}>
       
       <Image
       source={icons.Caps_logo}
       />

        <TouchableOpacity style={styles.button}>
        <Link href='shoes' style={styles.link}>Athletic Shoes</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Link href='shirts' style={styles.Link}>Athletic Shirts</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Link href='drinks' style={styles.Link}>Sports Drinks</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Link href='compression' style={styles.link}>Knee Pads and Compression</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Link href='socks' style={styles.link}>Sports Socks</Link>
        </TouchableOpacity>
      </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd5c5c', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  title: {
    backgroundColor: '#fffaf0',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20, 
    padding: 12, 
    borderColor: '#f08080', 
    borderWidth: 3, 
    borderRadius: 8, 
    textAlign: 'center',
  },

  button: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fffacd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  
  
  centeredText: {
    fontSize: 18,
    color: '#343a40', 
    marginBottom: 10, 
    textAlign: 'center',
  },
});
