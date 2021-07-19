import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import DateField from '../../../components/atoms/forms/DateField'
import DropdownField from '../../../components/atoms/forms/DropdownField'
import SkeletonPlaceHolder from 'react-native-skeleton-placeholder'
import CurrencyField from '../../../components/atoms/forms/CurrencyField'
import Loader from '../../../components/atoms/Loader'
import { useNavigation } from '@react-navigation/core'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useRoute } from '@react-navigation/native'

const PemesananEdit = () => {
    const [pemesanan, setPemesanan] = useState({
        noPemesanan: '',
        idKlien: '',
        idPengguna: 2,
        idPaket: '',
        uangmuka: 0,
        biaya: 0,
        deskripsi: '',
        alamat: '',
        tanggal: ''
    })
    const [kliens, setKliens] = useState([])
    const [pakets, setPakets] = useState([])
    const [isPemesananFetched, setIsPemesananFetched] = useState(false);
    const [isKlienFetched, setIsKlienFetched] = useState(false)
    const [isPaketFetched, setIsPaketFetched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)
    const route = useRoute()
    const navigation = useNavigation()

    useEffect(() => {
        getApiKlien()
        getApiPaket()
    }, [])

    useEffect(() => {
        if(kliens && pakets)
            getApiPemesanan()
    }, [kliens, pakets])

    useEffect(() => {
    }, [pemesanan])

    onChangeValue = (inputName, val) => {
        setPemesanan({
            ...pemesanan,
            [inputName]: val
        })
    }

    const getApiKlien = () => {
        setIsKlienFetched(false)
        axios({
            url: `${gBaseUrl}/api/klien`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({label: obj.NAMA_KLIEN, value: obj.ID_KLIEN}))
            setKliens(lst)
        }).catch(err => {
            alert(err)
        })
    }

    const getApiPaket = () => {
        setIsPaketFetched(false)
        axios({
            url: `${gBaseUrl}/api/paket`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({label: obj.NAMA_PAKET, value: obj.ID_PAKET}))
            setPakets(lst)
        }).catch(err => {
            alert(err)
        })
    }

    const getApiPemesanan = () => {
        setIsPemesananFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemesanan/detail/${route.params.id}`,
            method: 'get'
        }).then(res => {
            const data = res.data.data
            setPemesanan({
                noPemesanan: route.params.id,
                idKlien: data.ID_KLIEN,
                idPengguna: data.ID_PENGGUNA,
                idPaket: data.ID_PAKET,
                uangmuka: data.UANGMUKA_PEMESANAN,
                biaya: data.BIAYA_PEMESANAN,
                deskripsi: data.DESKRIPSI_PEMESANAN,
                alamat: data.ALAMAT_PEMESANAN,
                tanggal: data.TGLACARA_PEMESANAN
            })
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setIsKlienFetched(true)
            setIsPaketFetched(true)
            setIsPemesananFetched(true)
        })
    }

    const putApiPemesanan = () => {
        setIsLoading(true)
        axios({
            url: `${gBaseUrl}/api/pemesanan/edit`,
            method: 'put',
            data: pemesanan
        }).then(res => {
            setIsLoading(false)
            if(res.data.status){
                Alert.alert(
                    'Info',
                    'Data Berhasil diubah', [
                        {text: 'OK', onPress: () => navigation.replace('PemesananScreen')}
                    ]
                )
            }else{
                alert(res.data.status)
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
                    isKlienFetched?
                        <DropdownField 
                            label="Klien" 
                            items={kliens}  
                            onChangeValue={onChangeValue}
                            inputName="idKlien"
                            value={pemesanan.idKlien}
                        />
                    :
                        <SkeletonPlaceHolder>
                            <SkeletonPlaceHolder.Item width={"100%"} height={70} borderRadius={10} />
                        </SkeletonPlaceHolder>
                }
                <View style={{marginTop: 20}} />
                {
                    isPaketFetched?
                        <DropdownField 
                            label="Paket" 
                            items={pakets} 
                            onChangeValue={onChangeValue}
                            inputName="idPaket"
                            value={pemesanan.idPaket}
                        />
                    :
                        <SkeletonPlaceHolder>
                            <SkeletonPlaceHolder.Item width={"100%"} height={70} borderRadius={10} />
                        </SkeletonPlaceHolder>
                }
                {
                    isPemesananFetched?
                    <>
                        <View style={{marginTop: 20}} />
                        <CurrencyField 
                            label="Uang Muka" 
                            onChangeValue={onChangeValue}
                            inputName="uangmuka"
                            value={pemesanan.uangmuka}
                        />
                        <View style={{marginTop: 20}} />
                        <CurrencyField 
                            label="Biaya" 
                            onChangeValue={onChangeValue}
                            inputName="biaya"
                            value={pemesanan.biaya}
                        />
                        <View style={{marginTop: 20}} />
                        <BasicField 
                            label="Deskripsi" 
                            onChangeValue={onChangeValue}
                            inputName="deskripsi"
                            value={pemesanan.deskripsi}
                        />
                        <View style={{marginTop: 20}} />
                        <BasicField 
                            label="Alamat Acara" 
                            onChangeValue={onChangeValue}
                            inputName="alamat"
                            value={pemesanan.alamat}
                        />
                        <View style={{marginTop: 20}} />
                        <DateField 
                            label="Tanggal Acara"
                            onChangeValue={onChangeValue}
                            inputName="tanggal"
                            value={pemesanan.tanggal}
                        />
                    </>
                    :
                    <SkeletonPlaceHolder>
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                        <SkeletonPlaceholder.Item width={'100%'} height={70} borderRadius={10} marginTop={30} />
                    </SkeletonPlaceHolder>
                }
                
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" onPress={() => putApiPemesanan()} />
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
        marginTop: 20,
        flex: 1
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

export default PemesananEdit