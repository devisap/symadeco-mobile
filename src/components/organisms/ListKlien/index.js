import React, { useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react/cjs/react.development'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'

const ListKlien = props => {
    const [list, setList] = useState([])

    useEffect(() => {
        props.listSource && setList(props.listSource)   
    })

    return (
        <FlatList 
            data={list}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <View key={item.id}>
                        <ListDetail item={item} />
                    </View>
                )
            }}
        />
    )
}

const ListDetail = props => {
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
                <Heading3 text={props.item['NAMA_KLIEN']} />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={styles.btnState}>
                        <Heading3 text="Aktif" color="#0585FB" />
                        {
                            isCollapsed?
                            <Icon name="chevron-forward" color="#0585FB" size={16} />
                            :
                            <Icon name="chevron-down" color="#0585FB" size={16} />
                        }
                    </View>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Telepon" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['TELP_KLIEN']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Alamat" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['ALAMAT_KLIEN']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Email" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['EMAIL_KLIEN']} />
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
        backgroundColor: "#C4E3FF",
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

export default ListKlien