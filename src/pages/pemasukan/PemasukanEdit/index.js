import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import CurrencyField from '../../../components/atoms/forms/CurrencyField'
import DateField from '../../../components/atoms/forms/DateField'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../../../components/atoms/Loader'

const PemasukanEdit = () => {
    const [pemasukan, setPemasukan] = useState({
        noPemasukan: '',
        noPemesanan: '',
        tgl: '',
        jml: '',
        ket: ''
    })
    const [pemasukanFetched, setPemasukanFetched] = useState(false)
    const [pemesanans, setPemesanans] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const route = useRoute()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiPemesanans(route.params.id)
    }, [])

    onChangeValue = (inputName, value) => {
        setPemasukan({
            ...pemasukan,
            [inputName]: value
        })
    }

    const getApiPemesanans = noPemasukan => {
        setPemasukanFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemasukan/noPemesanan`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({label: obj.NOMOR_PEMESANAN, value: obj.NOMOR_PEMESANAN}))
            setPemesanans(lst)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            getApiDetailPemasukan(noPemasukan)
        })
    }

    const getApiDetailPemasukan = noPemasukan => {
        setPemasukanFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemasukan/detail/${noPemasukan}`,
            method: 'get'
        }).then(res => {
            if(res.data.status){
                setPemasukan({
                    noPemasukan: noPemasukan,
                    noPemesanan: res.data.data.NOMOR_PEMESANAN,
                    tgl: res.data.data.TGLMASUK_PEMASUKAN,
                    jml: res.data.data.JML_PEMASUKAN,
                    ket: res.data.data.KETERANGAN_PEMASUKAN
                })
            }
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPemasukanFetched(true)
        })
    }

    const putApiPemasukan = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/pemasukan/edit`,
            method: 'put',
            data: pemasukan
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data berhasil diubah',[
                        {text: 'OK', onPress: () => navigation.replace('PemasukanScreen')}
                    ]
                )
            }else{
                alert(res.data.message)
            }
        }).catch(err => {
            alert(errr)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                { isLoading && <Loader /> }
                {
                    pemasukanFetched?
                        <>
                            <DropdownSearchField label="No Pemesanan" items={pemesanans} onChangeValue={onChangeValue} inputName="noPemesanan" value={pemasukan.noPemesanan} />
                            <View style={{marginTop: 20}} />
                            <DateField label="Tanggal Masuk" onChangeValue={onChangeValue} inputName="tgl" value={pemasukan.tgl} />
                            <View style={{marginTop: 20}} />
                            <CurrencyField label="Jumlah" onChangeValue={onChangeValue} inputName="jml" value={pemasukan.jml} />
                            <View style={{marginTop: 20}} />
                            <BasicField label="Keterangan" onChangeValue={onChangeValue} inputName="ket" value={pemasukan.ket} />
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
                    <ButtonSubmit title="Simpan" onPress={() => putApiPemasukan()} />
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

export default PemasukanEdit