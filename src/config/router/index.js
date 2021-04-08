import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
    SplashScreen, Login
} from '../../components/pages'
import Drawer from './navigation/Drawer'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name={"SplashScreen"} component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={"Login"} component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Home" component={Drawer}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router