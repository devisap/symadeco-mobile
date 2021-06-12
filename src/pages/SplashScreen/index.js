import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, android } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../assets/images/LogoWhite.svg'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LoginScreen')
        }, 2000)
    }, [])
    
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