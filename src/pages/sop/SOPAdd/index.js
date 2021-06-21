import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'
import ImageField from '../../../components/atoms/forms/ImageField'
import ImageCropPicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/native'

const SOPAdd = () => {
    const [dataSOP, setDataSOP] = useState({
        foto: {uri: '', name: '', type: ''},
        denah: {uri: '', name: '', type: ''}
    })
    const navigation = useNavigation()

    onChangeValue = (inputName, val) => {
        setDataSOP({
            ...dataSOP,
            [inputName] : val
        })
    }

    const postData = () => {
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <DropdownSearchField label="No Nota Pengiriman" />
                <View style={{marginTop: 20}} />
                <ImageField 
                    label="Foto" 
                    inputName="foto"
                    onChangeValue={onChangeValue}
                    source={dataSOP.foto.uri}
                />
                <View style={{marginTop: 20}} />
                <ImageField 
                    label="Denah"
                    inputName="denah"
                    onChangeValue={onChangeValue}
                    source={dataSOP.denah.uri}
                />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Batal" onPress={() => navigation.goBack()} />
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.footerSection}>
                    <ButtonSubmit title="Simpan" onPress={() => postData()} />
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

export default SOPAdd