import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import CurrencyField from '../../../components/atoms/forms/CurrencyField'
import DateField from '../../../components/atoms/forms/DateField'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import Loader from '../../../components/atoms/Loader'

const PemasukanAdd = () => {
    const [pemesanans, setPemesanans] = useState([])
    const [pemesanansFetched, setPemesanansFetched] = useState(false)
    const [pemasukan, setPemasukan] = useState({
        noPemesanan: '',
        tgl: '',
        jml: '',
        ket: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)              

    useEffect(() => {
        getApiPemesanans()
    }, [])

    onChangeValue = (inputName, val) => {
        setPemasukan({
            ...pemasukan,
            [inputName]: val
        })
    }

    const getApiPemesanans = () => {
        setPemesanansFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemasukan/noPemesanan`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({label: obj.NOMOR_PEMESANAN, value: obj.NOMOR_PEMESANAN}))
            setPemesanans(lst)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPemesanansFetched(true)
        })
    }

    const postApiPemasukan = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/pemasukan/tambah`,
            method: 'post',
            data: pemasukan
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data berhasil disimpan', [
                        { text: 'OK', onPress: () => navigation.replace('PemasukanScreen') }
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
                { isLoading && <Loader /> }
                {
                    pemesanansFetched?
                        <>
                            <DropdownSearchField label="No Pemesanan" items={pemesanans} onChangeValue={onChangeValue} inputName="noPemesanan" />
                            <View style={{marginTop: 20}} />
                            <DateField label="Tanggal Masuk" onChangeValue={onChangeValue} inputName="tgl" />
                            <View style={{marginTop: 20}} />
                            <CurrencyField label="Jumlah" onChangeValue={onChangeValue} inputName="jml" />
                            <View style={{marginTop: 20}} />
                            <BasicField label="Keterangan" onChangeValue={onChangeValue} inputName="ket" />
                        </>
                    :
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                    </SkeletonPlaceholder>
                }
                
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" onPress={() => postApiPemasukan()} />
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

export default PemasukanAdd