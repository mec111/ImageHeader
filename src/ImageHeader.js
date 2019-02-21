import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons'
import Lorem from './Lorem'

class ImageHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar hidden/>
                <View>
                    <Image style={styles.imageStyle} source={require('../images/background.jpg')}/>
                    <TouchableOpacity style={styles.iconStyle}>
                            <Icon name='ios-arrow-back' size={15} color='#EFBB35'/>
                    </TouchableOpacity>
                    <View style={styles.headerStyle}>
                        <Text style={styles.headerTextStyle}>Lorem Ipsum</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <View style={ styles.sectionStyle }>
                        <ScrollView style={ styles.scrollStyle }>
                            <Lorem />
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default ImageHeader

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    subContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    sectionStyle: {
        height: responsiveHeight(80),
        width: responsiveWidth(100),
        backgroundColor: '#212831',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: 'hidden',
        position: 'absolute',
    },
    bodyStyle: {
        width: responsiveWidth(100),
        height: responsiveHeight(100)
    },
    scrollStyle: {
        paddingHorizontal: 25
    },
    imageStyle: {
        width: responsiveWidth(100),
        height: responsiveHeight(30)
    },
    iconStyle: {
        position: 'absolute',
        backgroundColor: '#212831',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(30),
        marginLeft: scale(20),
        height: 35,
        width: 35,
        borderRadius: 20,
    },
    headerTextStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#efbb35',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },
    headerStyle: {
        position: 'absolute',
        marginTop: scale(60),
        alignSelf: 'center'
    }
}