import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import DateTimeField from '../../../components/atoms/forms/DateTimeField'

const PemesananAdd = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <BasicField label="Uang Muka" />
                <View style={{marginTop: 20}} />
                <BasicField label="Biaya" />
                <View style={{marginTop: 20}} />
                <BasicField label="Deskripsi" />
                <View style={{marginTop: 20}} />
                <BasicField label="Alamat Acara" />
                <View style={{marginTop: 20}} />
                <DateTimeField label="Tanggal Acara" />
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

export default PemesananAdd