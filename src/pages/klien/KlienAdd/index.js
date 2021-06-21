import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import NumberField from '../../../components/atoms/forms/NumberField'
import Loader from '../../../components/atoms/Loader'

const KlienAdd = () => {
    const [klien, setKlien] = useState({
        nama: '',
        telepon: '',
        email: '',
        alamat: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigation                = useNavigation()
    const gBaseUrl                  = useSelector(state => state.BaseUrlReducer.baseUrl)

    onChangeValue = (inputName, val) => {
        setKlien({
            ...klien,
            [inputName] : val
        })
    }

    const postApiKlien = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/klien/tambah/`,
            method: 'post',
            data: klien
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data berhasil disimpan', [
                        {text: 'OK', onPress: () => navigation.replace('KlienScreen')}
                    ]
                )
            }else{
                alert(res.data.message)
            }
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                {
                    isLoading && <Loader />
                }
                <BasicField 
                    label="Nama" 
                    onChangeValue={onChangeValue} 
                    inputName="nama" 
                />
                <View style={{marginTop: 20}} />
                <NumberField 
                    label="No. Telp" 
                    onChangeValue={onChangeValue} 
                    inputName="telepon" 
                />
                <View style={{marginTop: 20}} />
                <BasicField 
                    label="Email" 
                    onChangeValue={onChangeValue} 
                    inputName="email" 
                />
                <View style={{marginTop: 20}} />
                <BasicField 
                    label="Alamat Rumah" 
                    onChangeValue={onChangeValue} 
                    inputName="alamat"     
                />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" onPress={() => postApiKlien()} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F5',
        paddingHorizontal: 30
    },
    content: {
        marginTop: 20
    },
    footer:  {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginVertical: 20
    },
    footerSection: {
        flex: 1
    }
})

export default KlienAdd