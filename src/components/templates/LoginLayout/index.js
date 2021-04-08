import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../../assets/images/Logo.svg'
import BasicField from '../../atoms/forms/BasicField'

const LoginLayout = (props) => {

    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <ScrollView>
                <View style={{marginTop: 40, alignItems: 'center'}}>
                    <Logo />
                </View>
                <View style={{marginTop: 75, paddingLeft: 40}}>
                    <Text style={{fontFamily: "Causten-Light", color: '#333', fontSize: 36}}>Welcome back,</Text>
                    <Text style={{fontFamily: "Causten-Bold", color: '#7F43D6', fontSize: 36}}>admin!</Text>
                </View>
                <View style={{marginTop: 70, paddingHorizontal: 40}}>
                    <BasicField text={"Username"} />
                    <View style={{marginTop: 40}}>
                        <BasicField text={"Password"} />
                    </View>
                </View>
                <View style={{marginTop: 70, paddingHorizontal: 40}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.replace('Home')}>
                        <LinearGradient colors={['#AF65FF', '#9F4BFE']} start={{x: 0.3, y: 0.5}} end={{x: 0.9, y: 0.5}} style={{alignItems: 'center', borderRadius: 10}}>
                            <Text style={{marginVertical: 14, fontFamily: "Causten-Bold", color: '#fff', fontSize: 20}}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginLayout