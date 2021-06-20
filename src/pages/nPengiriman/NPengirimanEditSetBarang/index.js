import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import ButtonSecondary from '../../../components/atoms/buttons/ButtonSecondary'
import ButtonSubmit from '../../../components/atoms/buttons/ButtonSubmit'
import DropdownSearchField from '../../../components/atoms/forms/DropdownField'
import BasicField from '../../../components/atoms/forms/BasicField'
import SetBarang from '../../../components/organisms/SetBarang'
import { useNavigation } from '@react-navigation/native'

const NPengirimanEditSetBarang = () => {
    const [dataBarang, setDataBarang] = useState([
        {name: 'Barang', count: 0}
    ])
    const [compBarang, setCompBarang]   = useState()
    const navigation = useNavigation()

    useEffect(() => {
        renderComp()        
    }, [dataBarang])

    const renderComp = () => {
        let lstBarang = dataBarang.map((obj, index) => (
            <>
                <SetBarang label={`${obj.name} ${index+1}`} />
                <View style={{marginTop: 20}} />
            </>
        ))

        setCompBarang(lstBarang)
    }

    const addComp = () => {
        const arr = [
            ...dataBarang,
            {name: 'Barang', count: 0}
        ]
        setDataBarang(arr)
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                {
                    compBarang
                }
                <ButtonSubmit title="Tambah" onPress={() => addComp()} />
                <View style={{marginBottom: 70}} />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ButtonSecondary title="Kembali" onPress={() => navigation.goBack()} />
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
    },
    comp: {
        flexDirection: 'row'
    }
})

export default NPengirimanEditSetBarang