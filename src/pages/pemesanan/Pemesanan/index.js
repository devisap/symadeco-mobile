import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import FilterMarketingNStatus from '../../../components/atoms/filters/FilterMarketingNStatus'
import FilterStatus from '../../../components/atoms/filters/FilterStatus'
import SearchBox from '../../../components/atoms/SearchBox'
import ListPemesananMenu from '../../../components/organisms/ListPemesananMenu'

const Pemesanan = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <FilterMarketingNStatus />
                    </View>
                    <View style={{marginRight: 20}} />
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ListPemesananMenu />
            </View>
        </ScrollView>
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