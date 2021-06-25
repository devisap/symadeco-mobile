import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import SkeletonPlaceHolder from 'react-native-skeleton-placeholder'
import { useSelector } from 'react-redux'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'
import Loader from '../../../components/atoms/Loader'

const SKKAdd = () => {
    const [pemesanans, setPemesanans] = useState([])
    const [pemesanansFetched, setPemesananFetced] = useState(false)
    const [SKK, setSKK] = useState({
        noPesanan: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiPemesanans()
    }, [])

    onChangeValue = (inputName, val) => {
        setSKK({
            ...SKK,
            [inputName]: val
        })
    }

    const getApiPemesanans = () => {
        setPemesananFetced(false)
        axios({
            url: `${gBaseUrl}/api/skk/noPemesanan`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({label: obj.NOMOR_PEMESANAN, value: obj.NOMOR_PEMESANAN}))
            setPemesanans(lst)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPemesananFetced(true)
        })
    }

    const postApiSKK = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/skk/tambah/`,
            method: 'post',
            data: SKK
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data berhasil disimpan', [
                        {text: 'OK', onPress: () => navigation.replace('SKKScreen')}
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
                {
                    pemesanansFetched?
                    <DropdownSearchField label="No Pemesanan" items={pemesanans} onChangeValue={onChangeValue} inputName="noPesanan" />
                    :
                    <SkeletonPlaceHolder>
                        <SkeletonPlaceHolder.Item width={'100%'} height={70} borderRadius={10} />
                    </SkeletonPlaceHolder>
                }
                <View style={{marginBottom: 200}} />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" onPress={() => postApiSKK()} />
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

export default SKKAdd