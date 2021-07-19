import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useSelector } from 'react-redux'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import Loader from '../../../components/atoms/Loader'

const KlienEdit = () => {
    const [klien, setKlien] = useState({
        idKlien: '',
        nama: '',
        telepon: '',
        email: '',
        alamat: ''
    })
    const [klienFetched, setKlienFetched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const route = useRoute()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiKlien()
    }, [])

    useEffect(() => {
    }, [klien])

    onChangeValue = (inputName, value) => {
        setKlien({
            ...klien, 
            [inputName]: value
        })
    }

    const getApiKlien = () => {
        setKlienFetched(false)
        axios({
            url: `${gBaseUrl}/api/klien/detail/${route.params.id}`,
            method: 'get'
        }).then(res => {
            setKlien({
                idKlien: route.params.id,
                nama: res.data.data.NAMA_KLIEN,
                telepon: res.data.data.TELP_KLIEN,
                email: res.data.data.EMAIL_KLIEN,
                alamat: res.data.data.ALAMAT_KLIEN
            })
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setKlienFetched(true)
        })
    }

    const putApiKlien = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/klien/edit`,
            method: 'put',
            data: klien
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data berhasil diubah',[
                        {text: 'OK', onPress: () => navigation.replace('KlienScreen')}
                    ]
                )
            }else{
                alert('tekan kene')
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
                { isLoading && <Loader /> }
                {
                    klienFetched?
                    <>
                        <BasicField 
                            label="Nama" 
                            value={klien.nama} 
                            onChangeValue={onChangeValue} 
                            inputName="nama" 
                        />
                        <View style={{marginTop: 20}} />
                        <BasicField 
                            label="No. Telp" 
                            value={klien.telepon}  
                            onChangeValue={onChangeValue} 
                            inputName="telepon" 
                        />
                        <View style={{marginTop: 20}} />
                        <BasicField 
                            label="Email" 
                            value={klien.email} 
                            onChangeValue={onChangeValue} 
                            inputName="email" 
                        />
                        <View style={{marginTop: 20}} />
                        <BasicField 
                            label="Alamat Rumah" 
                            value={klien.alamat} 
                            onChangeValue={onChangeValue} 
                            inputName="alamat" 
                        />
                    </>    
                    :
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={20} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={20} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={20} />
                    </SkeletonPlaceholder>
                }
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" onPress={() => putApiKlien()} />
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
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginVertical: 20
    },
    footerSection: {
        flex: 1
    }
})

export default KlienEdit