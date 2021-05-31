import React, { useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'

const ListProject = () => {
    return (
        <FlatList 
            data={[
                {id: 2019081600000001, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
                {id: 2019081600000003, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
                {id: 2019081600000004, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
                {id: 2019081600000005, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
            ]}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <ListDetail id={item.id} />
                )
            }}
        />
    )
}

const ListDetail = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <>
        <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.container}
            onPress={() => setIsCollapsed(!isCollapsed)}
        >
            <Icon name="person" size={28} color="#333" />
            <View style={{marginLeft: 20}} />
            <Heading2 text={props.id} />
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <View style={styles.btnState}>
                    <Heading3 text="Baru" color="#FBBC05" />
                    {
                        isCollapsed?
                        <Icon name="chevron-forward" color="#FBBC05" size={16} />
                        :
                        <Icon name="chevron-down" color="#FBBC05" size={16} />
                    }
                </View>
            </View>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Marketing" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="Marketing B" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Alamat" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="Jl. Bantaran Barat" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Acara" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="20 Agustus 2021" />
                </View>
            </View>
        </Collapsible>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    btnState: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFF0C4",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    itemDetailBox: {
        backgroundColor: '#F3F4F5',
        borderRadius: 5,
        padding: 15
    },
    itemDetailSection: {
        flexDirection: 'row'
    }
})

export default ListProject