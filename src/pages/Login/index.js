import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../assets/images/Logo.svg'
import ButtonSubmit from '../../components/atoms/buttons/ButtonSubmit'

const Login = ({ navigation }) => {
    const [userInptTintColor, setUserInptTintColor] = useState('#CBCBCB')
    const [passInptTintColor, setPassInptTintColor] = useState('#CBCBCB')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoBox}>
                <Logo width={170} height={70} />
            </View>
            <View style={styles.heroBox}>
                <Text style={styles.heroText1}>Welcome Back,</Text>
                <Text style={styles.heroText2}>admin!</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="#CBCBCB"
                    style={styles.input(userInptTintColor)}
                    onFocus={() => setUserInptTintColor('#7F43D6')}
                    onBlur={() => setUserInptTintColor('#CBCBCB')}
                    />
                <View style={{marginTop: 40}} />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#CBCBCB"
                    style={styles.input(passInptTintColor)}
                    onFocus={() => setPassInptTintColor('#7F43D6')}
                    onBlur={() => setPassInptTintColor('#CBCBCB')}
                />
            </View>
            <View style={styles.btnSubmitBox}>
                <ButtonSubmit title="Login" onPress={() => navigation.replace('DashboardScreen')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        paddingTop: 40
    },
    logoBox: {
        alignItems: 'center'
    },
    heroBox: {
        marginTop: 70
    },
    heroText1: {
        fontFamily: "Causten-Light",
        fontSize: 36
    },
    heroText2: {
        fontFamily: "Causten-Bold",
        fontSize: 36,
        color: '#7F43D6',
        marginTop: 4
    },
    inputBox: {
        marginTop: 70
    },
    input: borderColorState => {
        return{
            fontFamily: 'Causten-Light',
            color: "#333333",
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: borderColorState
        }
    },
    btnSubmitBox: {
        marginVertical: 70
    }, 
})

export default Login