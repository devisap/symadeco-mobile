import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, View, PermissionsAndroid } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import Icon  from 'react-native-vector-icons/Ionicons'
import ImageCropPicker from 'react-native-image-crop-picker'
import RandomString from '../../../../utils/RandomString'

const ImageField = props => {
    const [img, setImg] = useState({})
    const refRBSheet    = useRef()

    useEffect(() => {
        requestPermissions()      
    }, [])

    useEffect(() => {
        props.onChangeValue && props.onChangeValue(props.inputName, img)
    }, [img])

    const takePhoto = () => {
        refRBSheet.current.close()
        ImageCropPicker.openCamera({
            width: 512,
            height: 512,
            cropping: true,
            compressImageQuality: 1
        }).then(res => {
            setImg({
                uri: res.path,
                name: `${RandomString(8)}.${res.mime.replace('image/', '')}`,
                type: res.mime
            })
        }).catch(err => {
            
        })
    }

    const chooseImageGallery = () => {
        refRBSheet.current.close()
        ImageCropPicker.openPicker({
            width: 512,
            height: 512, 
            cropping: true,
            compressImageQuality: 1
        }).then(res => {
            setImg({
                uri: res.path,
                name: `${RandomString(8)}.${res.mime.replace('image/', '')}`,
                type: res.mime
            })
        }).catch(err => {

        })
    }

    const requestPermissions = async () => {
        try {
          const granted = await PermissionsAndroid.requestMultiple(['android.permission.CAMERA', 'android.permission.WRITE_EXTERNAL_STORAGE']);
        } catch (err) {
          console.warn(err);
        }
    }

    return (
        <>
            <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => refRBSheet.current.open()}>
                <Image source={props.source? {uri: props.source} : require('../../../../assets/images/img_128x128.jpg') } style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => refRBSheet.current.open()}>
                <TextInput 
                    placeholder={props.label? props.label : 'Label'}
                    value={img.name && img.name}
                    placeholderTextColor="#CBCBCB"
                    style={styles.inputImg}
                    editable={false}
                />
                <Icon name="md-images" size={16} color="#CBCBCB" style={styles.inptImgIcon} />
            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={170}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(51,51,51,0.8)"
                    },
                    draggableIcon: {
                        backgroundColor: "#CBCBCB"
                    },
                    container: {
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }
                }}

            >
                <View style={styles.rbContainer}>
                    <Text style={styles.rbTitle}>Pilih Metode</Text>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.rbSection}
                        onPress={() => takePhoto()}
                    >
                        <Icon name="md-camera" color="#333" size={24} />
                        <Text style={styles.rbText}>Ambil Foto</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 20}} />
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.rbSection}
                        onPress={() => chooseImageGallery()}
                    >
                        <Icon name="md-image" color="#333" size={24} />
                        <Text style={styles.rbText}>Pilih dari Galeri</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 18,
    },
    img: {
        width: 128,
        height: 128,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 10
    },
    inputImg: {
        fontFamily: 'Causten-Medium',
        fontSize: 14,
        color: "#333",
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 50,
        paddingRight: 20,
        marginTop: 20
    },
    inptImgIcon: {
        position: 'absolute',
        top: 35,
        left: 20
    },
    rbContainer: {
        paddingLeft: 20
    },
    rbSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rbTitle: {
        fontFamily: 'Causten-Regular',
        fontSize: 14,
        color: '#333',
        marginBottom: 30
    },
    rbText: {
        fontFamily: 'Causten-Medium',
        fontSize: 18,
        color: '#333',
        marginLeft: 20
    }
})

export default ImageField