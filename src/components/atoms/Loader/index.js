import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import Heading3 from '../typography/Heading3'

const Loader = () => {
    return (
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={true}
            >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.modal}>
                            <ActivityIndicator size={'large'} color="#7F43D6" />
                            <View style={{marginLeft: 16}}>
                                <Heading3 text={"Mohon tunggu sebentar"} /> 
                            </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: '80%', 
        flexDirection: 'row', 
        marginVertical: 20, 
        backgroundColor: '#fff', 
        borderRadius: 4, 
        paddingVertical: 20, 
        paddingLeft: 16, 
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
})
export default Loader