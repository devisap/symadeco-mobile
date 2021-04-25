import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Dashboard
} from '../../../../components/pages'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator()

const DashboardStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerTitleStyle: {
                        fontFamily: 'Causten-Bold',
                        fontSize: 24
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const DaftarKlienStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Daftar Klien" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const AlurKeuanganStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Alur Keuangan" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const LaporanStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Laporan" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}
const DaftarPemesananStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Daftar Pemesanan" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const SKKStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Surat Kontrak Kerja" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const NotaPembayaranStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Nota Pembayaran" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const NotaPengirimanStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Nota Pengiriman" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const SOPStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SOP" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const PemasukanStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pemasukan" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const PengeluaranStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pengeluaran" component={Dashboard}
                options={{
                    headerTintColor: "#333",
                    headerStyle: {
                        backgroundColor: "#fff",
                    },
                    headerTitleStyle: {
                        fontFamily: 'Causten-Bold',
                        size: 24
                    },
                    headerLeft: () => (
                        <Icon.Button  name="align-justify" iconStyle={{marginLeft: 12, marginTop: 5}} backgroundColor="#fff" size={18} color={'#7F43D6'} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 20}}>
                            <Image source={require('../../../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export {
    DashboardStack, DaftarKlienStack, AlurKeuanganStack,
    LaporanStack, DaftarPemesananStack, SKKStack,
    NotaPembayaranStack, NotaPengirimanStack, SOPStack,
    PemasukanStack, PengeluaranStack
}