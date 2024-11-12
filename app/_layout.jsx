import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts} from 'expo-font'//add this import
import { useEffect } from 'react'//add this import

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
    
  return (
   <Stack>
        <Stack.Screen name="index" option={{
            headerShown:true
        }}/>
   </Stack>
  )
}

export default MainLayout


