import { useNavigation, useRoute } from '@react-navigation/native'
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

const PengeluaranEdit = () => {
    const [pengeluaran, setPengeluaran] = useState({
        noPengeluaran: '',
        noPemesanan: '',
        tgl: '',
        jml: '',
        ket: ''
    })
    const [pengeluaranFetcehd, setPengeluaranFetched] = useState(false)
    const [pemesanans, setPemesanans] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const route = useRoute()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiPemesanans(route.params.id)
    }, [])

    onChangeValue = (inputName, value) => {
        setPengeluaran({
            ...pengeluaran,
            [inputName]: value
        })
    }

    const getApiPemesanans = noPengeluaran => {
        setPengeluaranFetched(false)
        axios({
            url: `${gBaseUrl}/api/pengeluaran/noPemesanan`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({label: obj.NOMOR_PEMESANAN, value: obj.NOMOR_PEMESANAN}))
            setPemesanans(lst)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            getApiDetailPengeluaran(noPengeluaran)
        })
    }

    const getApiDetailPengeluaran = noPengeluaran => {
        setPengeluaranFetched(false)
        axios({
            url: `${gBaseUrl}/api/pengeluaran/detail/${noPengeluaran}`,
            method: 'get'
        }).then(res => {
            if(res.data.status){
                setPengeluaran({
                    noPengeluaran: noPengeluaran,
                    noPemesanan: res.data.data.NOMOR_PEMESANAN,
                    tgl: res.data.data.TGLMASUK_PENGELUARAN,
                    jml: res.data.data.JML_PENGELUARAN,
                    ket: res.data.data.KETERANGAN_PENGELUARAN
                })
            }
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPengeluaranFetched(true)
        })
    }

    const putApiPengeluaran = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/pengeluaran/edit`,
            method: 'put',
            data: pengeluaran
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data berhasil diubah',[
                        {text: 'OK', onPress: () => navigation.replace('PengeluaranScreen')}
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
                    pengeluaranFetcehd?
                        <>
                            <DropdownSearchField label="No Pemesanan" items={pemesanans} onChangeValue={onChangeValue} inputName="noPemesanan" value={pengeluaran.noPemesanan} />
                            <View style={{marginTop: 20}} />
                            <DateField label="Tanggal Keluar" onChangeValue={onChangeValue} inputName="tgl" value={pengeluaran.tgl} />
                            <View style={{marginTop: 20}} />
                            <CurrencyField label="Jumlah" onChangeValue={onChangeValue} inputName="jml" value={pengeluaran.jml} />
                            <View style={{marginTop: 20}} />
                            <BasicField label="Keterangan" onChangeValue={onChangeValue} inputName="ket" value={pengeluaran.ket} />
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
                    <ButtonSubmit title="Simpan" onPress={() => putApiPengeluaran()} />
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

export default PengeluaranEdit