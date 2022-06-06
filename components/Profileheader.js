import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Dimensions,Image, ImageBackground} from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

const {width,height} = Dimensions.get("window");
const header = () => {
const [image,  setImageUrl]=useState("");

    useEffect(() => {
       fetch(require("../API/Reference.json"))
       .then((response) => response.json())
       .then((json)=>setImageUrl(json))
       .catch((error) =>console.error(error))
    }, [])

    return (
        <View style={styles.container}>
        <View style={styles.header}>
       <ImageBackground source={require('../assets/img/logo.png')} style={styles.img}>
       <View style={styles.headerImg} >
       <Avatar rounded  size="xlarge" source={image.Image_Url}/>
       </View>
       </ImageBackground>
        </View> 
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        width:width,
        height:height/3.5,
       
    },
    headerImg: {
        display:"flex",
        left:120,
        marginTop:30,
    },
    img:{
        width:width,
        height:height/3.5,
    }
})
