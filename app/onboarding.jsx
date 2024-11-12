import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import icons, { image } from '../constants/icons';


export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Image
      source={icons.Caps_logo}
      />

      
      <TouchableOpacity style={styles.button} >
      <Link href="./SignUp" style={styles.link}>Sign In</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
      <Link href="./SignIn" style={styles.link}>Sign Up</Link>
      </TouchableOpacity>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd5c5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional background color for the whole screen
  },

  
  
  
  rectangle: {
    marginVertical: 50,
    width: 250, // Set the width of the rectangle
    height: 70, // Set the height of the rectangle
    backgroundColor: '#fffacd', // Green background color for the rectangle
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderRadius: 10, // Optional: Rounded corners
    shadowColor: '#000', // Shadow effect (optional)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow effect
  },
  
  text: {
    color: '#cd5c5c', // Text color
    fontSize: 18,
    
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
  
  
  
});
