import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../../assets/images/LogoWhite.svg'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000)
    })
    return(
        <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={['#114675', '#9F4BFE']} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Logo />
        </LinearGradient>
    )
}

export default SplashScreen