import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'
import ImageField from '../../../components/atoms/forms/ImageField'
import ImageCropPicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/native'
import BasicField from '../../../components/atoms/forms/BasicField'

const NPembayaranEdit = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <DropdownSearchField label="No Pemesanan" />
                <View style={{marginTop: 20}} />
                <BasicField label="Deskripsi" />
                <View style={{marginBottom: 20}} />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Selanjutnya" onPress={() => navigation.navigate('NPembayaranSetBarangScreen')} />
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

export default NPembayaranEdit