import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import FilterMarketingNStatus from '../../../components/atoms/filters/FilterMarketingNStatus'
import FilterStatus from '../../../components/atoms/filters/FilterStatus'
import SearchBox from '../../../components/atoms/SearchBox'
import ListPemesananMenu from '../../../components/organisms/ListPemesananMenu'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import axios from 'axios'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import FilterStatusPemesanan from '../../../components/atoms/filters/FilterStatusPemesanan'

const Pemesanan = ({ navigation }) => {
    const [pemesanans, setPemesanans] = useState([])
    const [pemesanansIsFetched, setPemesananIsFetched] = useState(false)
    const [filter, setFilter] = useState({
        noPesanan: '',
        status: 0
    })

    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiPemesanan()
    }, [])

    useEffect(() => {
        console.log(filter);
        getApiFilter()
    }, [filter])

    onChangeFilter = (inputName, value) => {
        if(inputName === 'status'){
            switch (value) {
                case "Status":
                    value = 0
                    break;
                case "Baru":
                    value = 1
                    break;
                case "Cek Lokasi":
                    value = 2
                    break;
                case "Booking":
                    value = 3
                    break;
                case "Deal":
                    value = 4
                    break;
                case "Dikirim":
                    value = 5
                    break;
                case "Produksi":
                    value = 6
                    break;
                case "Dibongkar":
                    value = 7
                    break;
                case "Selesai":
                    value = 8
                    break;
                default:
                    break;
            }
        }

        setFilter({
            ...filter,
            [inputName]: value
        })
    }

    const getApiPemesanan = () => {
        setPemesananIsFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemesanan`,
            method: 'get'
        }).then(res => {
            const lst = res.data.data.map(obj => ({id: obj.NOMOR_PEMESANAN, klien: obj.NAMA_KLIEN, marketing: obj.NAMA_PENGGUNA, alamat: obj.ALAMAT_PEMESANAN, tglAcara: obj.TGLACARA_PEMESANAN, telp: obj.TELP_KLIEN, status: obj.STATUS_PEMESANAN}))
            setPemesanans(lst)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPemesananIsFetched(true)
        })
    }

    const getApiFilter = () => {
        setPemesananIsFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemesanan/filter`,
            method: 'get',
            params: filter
        }).then(res => {
            const lst = res.data.data.map(obj => ({id: obj.NOMOR_PEMESANAN, klien: obj.NAMA_KLIEN, marketing: obj.NAMA_PENGGUNA, alamat: obj.ALAMAT_PEMESANAN, tglAcara: obj.TGLACARA_PEMESANAN, telp: obj.TELP_KLIEN, status: obj.STATUS_PEMESANAN}))
            setPemesanans(lst)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPemesananIsFetched(true)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox onChangeFilter={onChangeFilter} inputName="noPesanan" />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <FilterStatusPemesanan onChangeFilter={onChangeFilter} inputName="status" />
                    </View>
                    <View style={{marginRight: 20}} />
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('PemesananAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {
                    pemesanansIsFetched?
                        <ListPemesananMenu listSource={pemesanans} />
                    :
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={20} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                    </SkeletonPlaceholder>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerBox: {
        backgroundColor: '#F3F4F5',
        paddingHorizontal: 30
    },
    searchBox: {
        marginTop: 40
    },
    actionBox: {
        flexDirection: 'row',
        marginVertical: 20
    },
    actionSection: {
        flex: 1, 
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 30
    }
})

export default Pemesanan