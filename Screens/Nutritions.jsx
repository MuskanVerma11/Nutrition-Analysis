import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,TextInput, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';

export default function Nutritions(props) {
  const {route}=props

  const [nutrition,setNutrition]=useState()
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    (async()=>{
    const res=await fetch(`https://api.edamam.com/api/nutrition-data?app_id=1a18edc8&app_key=df40e203cf7a39f1a4aaed4f9c280d3b&nutrition-type=cooking&ingr=${route.params.list}`)
    const data=await res.json()
    setNutrition(data)
    setLoading(true)
    })()},[])

    console.log(nutrition)
  return (
        loading?
        (<ScrollView style={styles.container}>
        <View style={styles.resultCard}>
          <Text style={styles.title}>Nutrition Facts</Text>
          <View style={styles.hl}></View>
          <Text style={styles.label}>Amount Per Serving</Text>
          <View style={styles.resContainer}>
            <Text style={styles.title}>Calories</Text>
            <Text style={styles.title}>{nutrition.calories}</Text>
          </View>
          <View style={[styles.hl,{height:6}]}></View>

          <View style={styles.resContainer}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.label}>Total Fat</Text>
              <Text style={styles.text}> {nutrition.totalNutrients.FAT.quantity && nutrition.totalNutrients.FAT.unit
                ? nutrition.totalNutrients.FAT.quantity.toFixed(1) + ' ' + nutrition.totalNutrients.FAT.unit
                : 'N/A'}</Text>
            </View>
            <Text style={styles.label}> {nutrition.totalNutrients.FAT.quantity
                ? ((nutrition.totalNutrients.FAT.quantity/65)*100).toFixed(0)+ "%"
                : 'N/A'}</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Saturated Fat</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.FASAT?nutrition.totalNutrients.FASAT.quantity.toFixed(1)+" "+nutrition.totalNutrients.FASAT.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.FASAT?((nutrition.totalNutrients.FASAT.quantity / 13) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Trans Fat</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.FATRN ? nutrition.totalNutrients.FATRN.quantity.toFixed(1)+" "+nutrition.totalNutrients.FATRN.unit:"-"
              }</Text>
            </View>
          </View>

          <View style={[styles.hl,{height:1}]}></View>

          <View style={styles.resContainer}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.label}>Cholesterol</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.CHOLE?nutrition.totalNutrients.CHOLE.quantity+" "+nutrition.totalNutrients.CHOLE.unit:" "
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.CHOLE?((nutrition.totalNutrients.CHOLE.quantity / 200) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1}]}></View>

          <View style={styles.resContainer}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.label}>Sodium</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.NA?nutrition.totalNutrients.NA.quantity.toFixed(1)+" "+nutrition.totalNutrients.NA.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.NA?((nutrition.totalNutrients.NA.quantity / 2000) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1}]}></View>

          <View style={styles.resContainer}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.label}>Total Carbohydrate</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.CHOCDF?nutrition.totalNutrients.CHOCDF.quantity.toFixed(1)+" "+nutrition.totalNutrients.CHOCDF.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.CHOCDF?((nutrition.totalNutrients.CHOCDF.quantity / 300) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Dietary Fiber</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.FIBTG? nutrition.totalNutrients.FIBTG.quantity.toFixed(1)+" "+nutrition.totalNutrients.FIBTG.unit : "-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.FIBTG? ((nutrition.totalNutrients.FIBTG.quantity/30)*100).toFixed(0) +"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Total Sugars</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.SUGAR? nutrition.totalNutrients.SUGAR.quantity.toFixed(1)+" "+nutrition.totalNutrients.SUGAR.unit: "-"
              }</Text>
            </View>
          </View>

          <View style={[styles.hl,{height:1}]}></View>

          <View style={styles.resContainer}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.label}>Protein</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.PROCNT?nutrition.totalNutrients.PROCNT.quantity.toFixed(1)+" "+nutrition.totalNutrients.PROCNT.unit:"-"
              }</Text>
            </View>
            {/* <Text style={styles.label}>{((nutrition.totalNutrients.PROCNT.quantity / 60) * 100).toFixed(0)}%</Text> */}
            <Text style={styles.label}>{
              nutrition.totalNutrients.PROCNT?((nutrition.totalNutrients.PROCNT.quantity / 60) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin A</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.VITA_RAE?nutrition.totalNutrients.VITA_RAE.quantity.toFixed(1)+nutrition.totalNutrients.VITA_RAE.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.VITA_RAE?((nutrition.totalNutrients.VITA_RAE.quantity / 800) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin B1</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.THIA?nutrition.totalNutrients.THIA.quantity.toFixed(1)+" "+nutrition.totalNutrients.THIA.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.THIA?((nutrition.totalNutrients.THIA.quantity / 1.2) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin B6</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.VITB6A?nutrition.totalNutrients.VITB6A.quantity.toFixed(1)+" "+nutrition.totalNutrients.VITB6A.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.VITB6A?((nutrition.totalNutrients.VITB6A.quantity / 1.3) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin B12</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.VITB12?nutrition.totalNutrients.VITB12.quantity.toFixed(1)+" "+nutrition.totalNutrients.VITB12.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.VITB12?((nutrition.totalNutrients.VITB12.quantity / 2.4) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin C</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.VITC?nutrition.totalNutrients.VITC.quantity.toFixed(1)+" "+nutrition.totalNutrients.VITC.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.VITC?((nutrition.totalNutrients.VITC.quantity / 2000) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin D</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.VITD?nutrition.totalNutrients.VITD.quantity.toFixed(1)+" "+nutrition.totalNutrients.VITD.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.VITD?((nutrition.totalNutrients.VITD.quantity / 15) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Vitamin K</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.VITK1?nutrition.totalNutrients.VITK1.quantity.toFixed(1)+" "+nutrition.totalNutrients.VITK1.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.VITK1?((nutrition.totalNutrients.VITK1.quantity / 100) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Calcium</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.CA?nutrition.totalNutrients.CA.quantity.toFixed(1)+" "+nutrition.totalNutrients.CA.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.CA?((nutrition.totalNutrients.CA.quantity / 1000) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Iron</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.FE?nutrition.totalNutrients.FE.quantity.toFixed(1)+" "+nutrition.totalNutrients.FE.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.FE?((nutrition.totalNutrients.FE.quantity / 10) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={[styles.hl,{height:1, marginLeft:15}]}></View>

          <View style={[styles.resContainer,{paddingLeft:15}]}>
            <View style={{flexDirection:"row", gap:5}}>
              <Text style={styles.text}>Potassium</Text>
              <Text style={styles.text}>{
                nutrition.totalNutrients.K?nutrition.totalNutrients.K.quantity.toFixed(1)+" "+nutrition.totalNutrients.K.unit:"-"
              }</Text>
            </View>
            <Text style={styles.label}>{
              nutrition.totalNutrients.K?((nutrition.totalNutrients.K.quantity / 3400) * 100).toFixed(0)+"%":" "
            }</Text>
          </View>

          <View style={{height:40}}></View>
          
          <Text style={{fontSize:11, color:"gray", textAlign:"center"}}>*Percent Values are based on daily intake value required</Text>
        </View>
      </ScrollView>):(
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
          <ActivityIndicator/>
          <Text>Loading...</Text>
        </View>
      )
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f5f5f5"
  },
  resultCard:{
    backgroundColor:"#fff",
    flex:1,
    // borderWidth:1,
    borderRadius:20,
    borderColor:"gray",
    paddingHorizontal:20,
    paddingTop:20,
    paddingBottom:20,
    elevation:10,
    margin:30
  },
  title:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
  },
  hl:{
    height:10,
    backgroundColor:"#E8E8E8",
    marginVertical:10,
  },
  label:{
    fontWeight:"bold",
    fontSize:18,
  },
  resContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  text:{
    fontSize:18,
  }
});
