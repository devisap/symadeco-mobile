import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import StatGraphic from '../../assets/images/DashboardGraphic.svg'
import Paragraph from '../../components/atoms/typography/Paragraph'
import Heading1 from '../../components/atoms/typography/Heading1'
import Heading3 from '../../components/atoms/typography/Heading3'
import SearchBox from '../../components/atoms/SearchBox'
import ListProject from '../../components/organisms/ListProject'
import ButtonSubmit from '../../components/atoms/buttons/ButtonSubmit'
import ListKlien from '../../components/organisms/ListKlien'
const Dashboard = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.statBox}>
                <View style={styles.statAllBox}>
                    <View style={styles.statAllSection1}>
                        <Heading3 text="Jumlah Pesanan" />
                        <Text style={styles.statCount('#333')}>19</Text>
                    </View>
                    <View style={styles.statAllSection2}>
                        <StatGraphic />
                    </View>
                </View>
                <View style={styles.statDetailBox}>
                    <View style={styles.statDetailItem('#7F43D6')}>
                        <Paragraph text="Baru" color="#fff" />
                        <Text style={styles.statCount('#fff')}>15</Text>
                    </View>
                    <View style={{marginHorizontal: 5}} />
                    <View style={styles.statDetailItem('#fff')}>
                        <Paragraph text="On Progress" color="#7F43D6" />
                        <Text style={styles.statCount('#7F43D6')}>2</Text>
                    </View>
                    <View style={{marginHorizontal: 5}} />
                    <View style={styles.statDetailItem('#fff')}>
                        <Paragraph text="Selesai" color="#7F43D6" />
                        <Text style={styles.statCount('#7F43D6')}>2</Text>
                    </View>
                </View>
                <View style={styles.searchBox}>
                    <SearchBox />
                </View>
            </View>
            <View style={styles.content} nestedScrollEnabled={true}>
                <View style={styles.listPemesananBox}>
                    <Heading1 text="Daftar Pemesanan" color="#7F43D6" />
                    <View style={styles.listPemesananContent}>
                        <ListProject />
                    </View>
                    <View style={styles.btnSubmitBox}>
                        <ButtonSubmit title="Selengkapnya" />
                    </View>
                </View>
                <View style={{marginTop: 20}} />
                <View style={styles.listPemesananBox}>
                    <Heading1 text="Daftar Pemesanan" color="#7F43D6" />
                    <View style={styles.listPemesananContent}>
                        <ListKlien />
                    </View>
                <View style={styles.btnSubmitBox}>
                    <ButtonSubmit title="Selengkapnya" />
                </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F5'
    },
    statBox: {
        paddingHorizontal: 30,
        marginTop: 40
    },
    statAllBox: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    statAllSection1: {
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: 25
    },
    statAllSection2: {
        flex: 0.5,
        alignItems: 'flex-end',
        paddingRight: 25
    },
    statCount: color => {
        return {
            fontFamily: 'Causten-Bold',
            color,
            fontSize: 48
        }
    },
    statDetailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    statDetailItem: backgroundColor => {
        return{
            flex: 1,
            backgroundColor,
            borderRadius: 10,
            justifyContent: 'space-between',
            padding: 15
        }
    },
    content: {
        marginTop: 20
    },
    searchBox: {
        marginTop: 20
    },
    listPemesananBox: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingTop: 20
    },
    listPemesananContent: {
        marginTop: 30
    },
    btnSubmitBox: {
        marginVertical: 40
    }
})

export default Dashboard