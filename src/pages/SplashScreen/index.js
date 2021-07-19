import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, android, PermissionsAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../assets/images/LogoWhite.svg'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(async() => {
            requestPermissions()
            await asReadData() !== null ? navigation.replace('DashboardScreen') : navigation.replace('LoginScreen')
        }, 2000)
    }, [])

    const requestPermissions = async () => {
        try {
          const granted = await PermissionsAndroid.requestMultiple(['android.permission.CAMERA', 'android.permission.WRITE_EXTERNAL_STORAGE']);
        } catch (err) {
          console.warn(err);
        }
    }
    
    const asReadData = async() => {
        const jsonValue = await AsyncStorage.getItem('USER')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    
    return(
        <LinearGradient 
            start={{x: 0.0, y: 0.25}} 
            end={{x: 0.5, y: 1.0}} 
            colors={['#114675', '#9F4BFE']} 
            style={styles.container}
        >
            <StatusBar translucent backgroundColor={'transparent'}  />
            <Logo />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen