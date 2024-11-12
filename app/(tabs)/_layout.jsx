import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) =>{
    return(
        <View>
            <Image
             source={icon}
             resizeMode="contain"
             style= {{
                width: 30,
                height: 30,
                tintColor: {color}
             }} 
             
            />
        </View>
    )
}
 

// const TabsLayout = () => {
//   return (
//     <View>
//       <Text>TabsLayout</Text>
//     </View>
//   )
// }

const TabLayout = () =>{
    return(
        <>
            <Tabs>
            
            <Tabs.Screen
                name="home" 
                options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                        />
                    ) 
                }}
            />

            
            

            
            <Tabs.Screen
                name="user" 
                options={{
                    title:'User',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.user}
                        color={color}
                        name="User"
                        focused={focused}
                        />
                    ) 
                }}
            /> 

<Tabs.Screen
                name="arrow" 
                options={{
                    title:'Return',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon={icons.arrow}
                        color={color}
                        name="Return"
                        focused={focused}
                        />
                    ) 
                }}
            /> 


            </Tabs>        

        </>
    )
}

export default TabLayout

 