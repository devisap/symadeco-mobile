import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import FilterStatus from '../../../components/atoms/filters/FilterStatus'
import SearchBox from '../../../components/atoms/SearchBox'
import ListKlienMenu from '../../../components/organisms/ListKlienMenu'
import SkeletonPlaceHolder from 'react-native-skeleton-placeholder'

const Klien = ({ navigation }) => {
    const [kliens, setKliens]   = useState([])
    const [kliensFetched, setKlienFetched] = useState(false)
    const [filter, setFilter] = useState({
        nama: '',
        status: 0
    })
    const gBaseUrl  = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        getApiListKlien()
    }, [])

    useEffect(() => {
        getApiFilter()
        console.log(filter);
    }, [filter])

    onChangeFilter = (inputName, value) => {
        if(inputName === "status"){
            switch (value) {
                case "Status":
                    value = 0
                    break;
                case "Aktif":
                    value = 1
                    break;
                case "Tidak Aktif":
                    value = 2
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

    const getApiListKlien = () => {
        axios({
            url: `${gBaseUrl}/api/klien/`,
            method: 'get'
        }).then(res => {
            setKliens(res.data.data)
        }).catch(err => {

        }).finally(() => {
            setKlienFetched(true)
        })
    }    

    const getApiFilter = () => {
        setKlienFetched(false)
        axios({
            url: `${gBaseUrl}/api/klien/filter`,
            method: 'get',
            params: filter
        }).then(res => {
            if(res.data.status){
                setKliens(res.data.data)
            }
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setKlienFetched(true)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox onChangeFilter={onChangeFilter} inputName="nama" />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <FilterStatus onChangeFilter={onChangeFilter} inputName="status" />
                    </View>
                    <View style={{marginRight: 20}} />
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('KlienAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {
                    kliensFetched?
                        <ListKlienMenu listSource={kliens} />
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

export default Klien