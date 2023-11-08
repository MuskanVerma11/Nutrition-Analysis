import { View, Text, TextInput ,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
// import tw from 'twrnc'

export default function Ingredients({navigation}) {
    const [ingr1,setIngr1]=useState({
        Qty:"",
        Unit:"",
        Ingredient:""
    })
    const [ingr2,setIngr2]=useState({
        Qty:"",
        Unit:"",
        Ingredient:""
    })
    const [ingr3,setIngr3]=useState({
        Qty:"",
        Unit:"",
        Ingredient:""
    })
    const [error,setError]=useState("")

    const Analyze=()=>{
        if((ingr1.Qty==="" && ingr2.Qty==="" && ingr3.Qty==="" &&
        ingr1.Unit==="" && ingr2.Unit==="" &&ingr3.Unit==="" &&
        ingr1.Ingredient==="" && ingr2.Ingredient==="" &&ingr3.Ingredient==="") || 
        (ingr1.Ingredient==="" && ingr1.Qty!=="") || 
        (ingr2.Ingredient==="" && ingr2.Qty!=="") ||
        (ingr3.Ingredient==="" && ingr3.Qty!=="")){
            setError("Error Please enter atleast one ingredient")
        }else{
            console.log(ingr1)
            console.log(ingr2)
            console.log(ingr3)
            const AllIngredients=`${ingr1.Qty}%20${ingr1.Unit}%20${ingr1.Ingredient}%2C${ingr2.Qty}%20${ingr2.Unit}%20${ingr2.Ingredient}%2C${ingr3.Qty}%20${ingr3.Unit}%20${ingr3.Ingredient}`
            navigation.navigate("Nutritions",{list :AllIngredients})
            setIngr1({...ingr1, Qty:"", Unit:"", Ingredient:""})
            setIngr2({...ingr2, Qty:"", Unit:"", Ingredient:""})
            setIngr3({...ingr3, Qty:"", Unit:"", Ingredient:""})
            console.log(AllIngredients)
        }
    }
  return (
    <View style={styles.viewContainer}>
    <Image source={require("../assets/plate.png")} style={styles.img}/>
    {/* <View style={styles.container}>
        <Text style={[styles.label,{width:70}]}>Qty</Text>
        <Text style={[styles.label,{width:100}]}>Unit</Text>
        <Text style={[styles.label,{width:140}]}>Ingredient</Text>
    </View> */}
    <View style={[styles.container, {marginTop:35}]}>
        <TextInput placeholder='Qty' 
        style={[styles.input, {width:70}]} 
        value={ingr1.Qty} 
        onChangeText={(text)=>setIngr1({...ingr1, Qty:text})}
        keyboardType="number-pad"/>
        <TextInput placeholder='Unit' 
        style={[styles.input, {width:100}]} 
        value={ingr1.Unit} 
        onChangeText={(text)=>setIngr1({...ingr1, Unit:text})}/>
        <TextInput placeholder='Ingredient' 
        style={[styles.input, {width:140}]} 
        value={ingr1.Ingredient} 
        onChangeText={(text)=>setIngr1({...ingr1, Ingredient:text})}/>
    </View>
    <View style={styles.container}>
      <TextInput placeholder='Qty' 
        style={[styles.input, {width:70}]}
        value={ingr2.Qty} 
        onChangeText={(text)=>setIngr2({...ingr2, Qty:text})}
        keyboardType="number-pad"/>
      <TextInput placeholder='Unit' 
        style={[styles.input, {width:100}]}
        value={ingr2.Unit} 
        onChangeText={(text)=>setIngr2({...ingr2, Unit:text})}
      />
      <TextInput placeholder='Ingredient' 
        style={[styles.input, {width:140}]}
        value={ingr2.Ingredient} 
        onChangeText={(text)=>setIngr2({...ingr2, Ingredient:text})}
        />
    </View>
    <View style={styles.container}>
      <TextInput placeholder='Qty' 
      style={[styles.input, {width:70}]}
      value={ingr3.Qty} 
      onChangeText={(text)=>setIngr3({...ingr3, Qty:text})}
      keyboardType="number-pad" />
      <TextInput placeholder='Unit' 
        style={[styles.input, {width:100}]}
        value={ingr3.Unit} 
        onChangeText={(text)=>setIngr3({...ingr3, Unit:text})}/>
      <TextInput placeholder='Ingredient' 
        style={[styles.input, {width:140}]}
        value={ingr3.Ingredient} 
        onChangeText={(text)=>setIngr3({...ingr3, Ingredient:text})}
        />
    </View>
    <TouchableOpacity style={styles.btn} onPress={()=>{if((ingr1.Qty==="" && ingr2.Qty==="" && ingr3.Qty==="" &&
        ingr1.Unit==="" && ingr2.Unit==="" &&ingr3.Unit==="" &&
        ingr1.Ingredient==="" && ingr2.Ingredient==="" &&ingr3.Ingredient==="") || 
        (ingr1.Ingredient==="" && ingr1.Qty!=="") || 
        (ingr2.Ingredient==="" && ingr2.Qty!=="") ||
        (ingr3.Ingredient==="" && ingr3.Qty!=="")){
            setError("Error Please enter atleast one ingredient")
        }else{
            console.log(ingr1)
            console.log(ingr2)
            console.log(ingr3)
            const AllIngredients=`${ingr1.Qty}%20${ingr1.Unit}%20${ingr1.Ingredient}%2C${ingr2.Qty}%20${ingr2.Unit}%20${ingr2.Ingredient}%2C${ingr3.Qty}%20${ingr3.Unit}%20${ingr3.Ingredient}`
            navigation.navigate("Nutritions",{list :AllIngredients})
            setIngr1({...ingr1, Qty:"", Unit:"", Ingredient:""})
            setIngr2({...ingr2, Qty:"", Unit:"", Ingredient:""})
            setIngr3({...ingr3, Qty:"", Unit:"", Ingredient:""})
            console.log(AllIngredients)
        }}}>
        <Text style={styles.btnText}>
            Analyze
        </Text>
    </TouchableOpacity>
    {error?<Text style={styles.error}>Error, Please Enter At least one Ingredient</Text>:null}
    <View style={{flexDirection:"row", position:"relative",bottom:30}}>
        <Image source={require("../assets/real.jpg")} style={[styles.img, {height:120,width:120}]}/>
        <Image source={require("../assets/real.jpg")} style={[styles.img, {height:120,width:120}]}/>
        <Image source={require("../assets/real.jpg")} style={[styles.img, {height:120,width:120}]}/>
        <Image source={require("../assets/real.jpg")} style={[styles.img, {height:120,width:120}]}/>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    viewContainer:{
        flex:1,
        paddingTop:20,
        gap:15,
        backgroundColor:"beige",
    },
    container:{
        justifyContent:"space-between",
        flexDirection:"row",
        marginHorizontal:25
    },
    input:{
        fontSize:18,
        borderWidth:1.5,
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:8,
        height:50,
        textAlign:"center",
        borderColor:"darkgreen"
    },
    label:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        marginBottom:8,
        textAlign:"center"
    },
    btn:{
        backgroundColor:"#6ACC00",
        paddingHorizontal:20,
        paddingVertical:8,
        alignItems:"center",
        alignSelf:"center",
        marginTop:30,
        borderRadius:30,
        elevation:5
    },
    btnText:{
        color:"white",
        fontSize:18
    },
    img:{
        width:220,
        height:200,
        alignSelf:"center",
        marginTop:35
    },
    error:{
        color:"red",
        fontSize:14,
        textAlign:"center",
        backgroundColor:"#f5f5f5",
        borderRadius:20,
        marginHorizontal:20,
        paddingVertical:3,
        elevation:2,
        marginTop:8
    }
})