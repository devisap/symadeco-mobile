import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import Logo from '../../assets/images/Logo.svg'
import ButtonSubmit from '../../components/atoms/buttons/ButtonSubmit'
import Loader from '../../components/atoms/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [userInptTintColor, setUserInptTintColor] = useState('#CBCBCB')
    const [passInptTintColor, setPassInptTintColor] = useState('#CBCBCB')
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    const postApiLogin = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/user/login`,
            method: 'post',
            data: user
        }).then(res => {
            if(res.data.status){
                asStoreData(res.data.data)
                navigation.replace('DashboardScreen')
            }else{
                alert(res.data.message)
            }
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const asStoreData = async val => {
        const jsonVal = JSON.stringify(val)
        await AsyncStorage.setItem('USER', jsonVal)
    }

    return (
        <ScrollView style={styles.container}>
            { isLoading && <Loader /> }
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
                    onChangeText={text => {
                        setUser({
                            ...user,
                            ['username']: text
                        })
                    }}
                    />
                <View style={{marginTop: 40}} />
                <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#CBCBCB"
                    style={styles.input(passInptTintColor)}
                    onFocus={() => setPassInptTintColor('#7F43D6')}
                    onBlur={() => setPassInptTintColor('#CBCBCB')}
                    onChangeText={text => {
                        setUser({
                            ...user,
                            ['password']: text
                        })
                    }}
                />
            </View>
            <View style={styles.btnSubmitBox}>
                <ButtonSubmit title="Login" onPress={() => postApiLogin()} />
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