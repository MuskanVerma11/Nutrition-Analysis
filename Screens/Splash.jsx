import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/splashimage.png")}
        style={styles.img}/>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Ingredients")}>
        <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"beige",
        alignItems:"center",
        justifyContent:"center"
    },
    img:{
        height:350,
        width:350
    },
    btn:{
        position:"absolute",
        bottom:20,
        right:20,
        backgroundColor:"green",
        padding:20,
        borderRadius:50
    }
})