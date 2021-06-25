import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import FilterDateRange from '../../../components/atoms/filters/FilterDateRange'
import SearchBox from '../../../components/atoms/SearchBox'
import ListPemasukanMenu from '../../../components/organisms/ListPemasukanMenu'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const Pemasukan = ({ navigation }) => {
    const [pemasukansFetched, setPemasukansFetched] = useState(false)
    const [pemasukans, setPemasukans] = useState([])
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiPemasukan()
    }, [])

    const getApiPemasukan = () => {
        setPemasukansFetched(false)
        axios({
            url: `${gBaseUrl}/api/pemasukan`,
            method: 'get'
        }).then(res => {
            setPemasukans(res.data.data)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setPemasukansFetched(true)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <FilterDateRange />
                    </View>
                    <View style={{marginHorizontal: 10}} />
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('PemasukanAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {
                    pemasukansFetched?
                        <ListPemasukanMenu listSource={pemasukans} />
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

export default Pemasukan