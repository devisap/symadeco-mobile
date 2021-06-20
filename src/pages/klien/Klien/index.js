import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useRecoilValue } from 'recoil'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import FilterStatus from '../../../components/atoms/filters/FilterStatus'
import SearchBox from '../../../components/atoms/SearchBox'
import ListKlienMenu from '../../../components/organisms/ListKlienMenu'
import { baseUrl } from '../../../config/Recoil'

const Klien = ({ navigation }) => {
    const [kliens, setKliens]   = useState([])
    const recBaseUrl            = useRecoilValue(baseUrl)

    useEffect(() => {
        getApiListKlien()
    }, [])

    const getApiListKlien = () => {
        axios({
            url: `${recBaseUrl}/api/klien/`,
            method: 'get'
        }).then(res => {
            setKliens(res.data.data)
            console.log(res.data.data);
        }).catch(err => {

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
                        <FilterStatus />
                    </View>
                    <View style={{marginRight: 20}} />
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('KlienAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ListKlienMenu listSource={kliens} />
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