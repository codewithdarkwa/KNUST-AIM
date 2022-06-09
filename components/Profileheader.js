import { StyleSheet, View, Dimensions, ImageBackground,Text} from 'react-native'

const Profileheader = () => {

    return (
       <View style={styles.container}>
         <ImageBackground source={require('../assets/img/logo.png')} style={{width:150, height:200}}/>
       </View>
    )
}

export default Profileheader

const styles = StyleSheet.create({
    container:{
        flex:1/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
})
