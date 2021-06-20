import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useRecoilValue } from 'recoil'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import BasicField from '../../../components/atoms/forms/BasicField'
import { baseUrl } from '../../../config/Recoil'

const KlienEdit = () => {
    const [klien, setKlien] = useState({})
    const navigation    = useNavigation()
    const route         = useRoute()
    const recBaseUrl    = useRecoilValue(baseUrl)

    useEffect(() => {
    }, [])

    const getApiKlien = () => {
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <BasicField label="Nama" />
                <View style={{marginTop: 20}} />
                <BasicField label="No. Telp" />
                <View style={{marginTop: 20}} />
                <BasicField label="Email" />
                <View style={{marginTop: 20}} />
                <BasicField label="Alamat Rumah" />
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

export default KlienEdit