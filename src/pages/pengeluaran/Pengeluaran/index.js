import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import FilterDateRange from '../../../components/atoms/filters/FilterDateRange'
import SearchBox from '../../../components/atoms/SearchBox'
import ListPengeluaranMenu from '../../../components/organisms/ListPengeluaranMenu'
import axios from 'axios'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const Pengeluaran = ({ navigation }) => {
    const [pengeluaransFetched, setPengeluaransFetched] = useState(false)
    const [pengeluarans, setPengeluarans] = useState([])
    const [filter, setFilter] = useState({
        noPengeluaran: '',
        tglAwal: '',
        tglAkhir: ''
    })
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiPengeluaran()
    }, [])

    useEffect(() => {
        console.log(filter);
        getApiFilter()
    }, [filter])

    const getApiPengeluaran = () => {
        setPengeluaransFetched(false)
        axios({
            url: `${gBaseUrl}/api/pengeluaran`,
            method: 'get'
        }).then(res => {
            setPengeluarans(res.data.data)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPengeluaransFetched(true)
        })
    }

    const getApiFilter = () => {
        setPengeluaransFetched(false)
        axios({
            url: `${gBaseUrl}/api/pengeluaran/filter`,
            method: 'get',
            params: filter
        }).then(res => {
            setPengeluarans(res.data.data)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPengeluaransFetched(true)
        })
    }

    onChangeFilter = (inputName, value) => {
        setFilter({
            ...filter,
            [inputName]: value
        })
    }

    onChangeDateRange = (tglAwal, tglAkhir) => {
        setFilter({
            ...filter,
            ['tglAwal']: tglAwal,
            ['tglAkhir']: tglAkhir
        })
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox inputName="noPengeluaran" onChangeFilter={onChangeFilter} />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <FilterDateRange onChangeDateRange={onChangeDateRange} />
                    </View>
                    <View style={{marginHorizontal: 10}} />
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('PengeluaranAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {
                    pengeluaransFetched?
                        <ListPengeluaranMenu listSource={pengeluarans} />
                    :
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={20} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
                        <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={10} marginTop={19} />
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

export default Pengeluaran