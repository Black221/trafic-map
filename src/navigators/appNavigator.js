import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "../screens/home/index";
import TraficScreen from "../screens/trafic/index";
import TransportScreen from "../screens/transport/index";

const Stack = createNativeStackNavigator();


export default function  Navigation  ()  {


    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{headerShown: false}}
                />
                <Stack.Screen name="Trafic"
                              component={TraficScreen}
                              options={{headerShown: false}}
                />
                <Stack.Screen name="Transport"
                              component={TransportScreen}
                              options={{headerShown: false}}
                />
                {/* <Stack.Screen name="Profile"
                              component={ProfileScreen}
                              options={{
                                  headerShown: true,
                                  headerTitleStyle: {
                                      color: 'white'
                                  },
                                  headerTintColor: 'white',
                                  headerRight: () => {
                                      return (
                                          <Pressable>
                                              <FontAwesome name="edit" size={30} color="white" />
                                          </Pressable>
                                      )
                                  },
                                  headerStyle: {
                                      backgroundColor: '#016EEA'
                                  }
                                }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

