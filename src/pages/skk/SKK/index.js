import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import SearchBox from '../../../components/atoms/SearchBox'
import ListSKKMenu from '../../../components/organisms/ListSKKMenu'
import SkeletonPlaceHolder from 'react-native-skeleton-placeholder'

const SKK = ({ navigation }) => {
    const [SKKFetched, setSKKFetched] = useState(false)
    const [SKKs, setSKKs] = useState([])
    const [filter, setFilter] = useState({
        noSkk: ''
    })
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)
    
    useEffect(() => {
        getApiSKK()
    }, [])

    useEffect(() => {
        getApiFilter()
    }, [filter])

    const getApiSKK = () => {
        setSKKFetched(false)
        axios({
            url: `${gBaseUrl}/api/skk`,
            method: 'get'
        }).then(res => {
            setSKKs(res.data.data)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setSKKFetched(true)
        })
    }

    const getApiFilter = () => {
        setSKKFetched(false)
        axios({
            url: `${gBaseUrl}/api/skk/filter`,
            method: 'get',
            params: filter
        }).then(res => {
            setSKKs(res.data.data)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setSKKFetched(true)
        })
    }

    onChangeFilter = (inputName, value) => {
        setFilter({
            ...filter, 
            [inputName]: value
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox onChangeFilter={onChangeFilter} inputName="noSkk" />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('SKKAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {
                    SKKFetched?
                    <ListSKKMenu listSource={SKKs} />
                    :
                    <SkeletonPlaceHolder>
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={20} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                        <SkeletonPlaceHolder.Item width={'100%'} height={50} borderRadius={10} marginTop={10} />
                    </SkeletonPlaceHolder>
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

export default SKK