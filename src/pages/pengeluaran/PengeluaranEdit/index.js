import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import CurrencyField from '../../../components/atoms/forms/CurrencyField'
import DateField from '../../../components/atoms/forms/DateField'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'

const PengeluaranEdit = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <BasicField label="No. Nota" />
                <View style={{marginTop: 20}} />
                <DropdownSearchField label="No Pemasanan" />
                <View style={{marginTop: 20}} />
                <DateField label="Tanggal Masuk" />
                <View style={{marginTop: 20}} />
                <CurrencyField label="Jumlah" />
                <View style={{marginTop: 20}} />
                <BasicField label="Keterangan" />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" />
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
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginVertical: 20
    },
    footerSection: {
        flex: 1
    }
})

export default PengeluaranEdit