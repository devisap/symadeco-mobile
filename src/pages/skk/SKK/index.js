import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ButtonPrimaryIcon from '../../../components/atoms/buttons/ButtonPrimaryIcon'
import SearchBox from '../../../components/atoms/SearchBox'
import ListSKKMenu from '../../../components/organisms/ListSKKMenu'

const SKK = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.searchBox}>
                    <SearchBox />
                </View>
                <View style={styles.actionBox}>
                    <View style={styles.actionSection}>
                        <ButtonPrimaryIcon icon="add" text="Tambah" onPress={() => navigation.navigate('SKKAddScreen')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ListSKKMenu />
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

export default SKK