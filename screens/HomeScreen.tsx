import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <ImageBackground source = {require('../assets/Mothers2.png')} style = {styles.ImageB}> 
      <SafeAreaView>
      <NavOptions term={search} />
        <View style={styles.container}>
          <View style ={styles.container}>
            <View style = {{position: "absolute"}}>
            <Text style={{
              fontWeight: 'bold' , 
              fontFamily: 'Times New Roman',
              fontStyle:'italic', 
              fontSize: 80, 
              textAlign:'center',
              color:'rebeccapurple', 
              lineHeight: 1150, 
              height: 800,
              bottom: -100
              }}>
              G
              <Text style={{
                fontWeight: 'bold' , 
                fontFamily: 'Times New Roman',
                fontStyle:'italic', 
                fontSize: 80, 
                textAlign:'center',
                color:'hotpink', 
                lineHeight: 1150,
                height: 800,
                bottom: -100
              }}>
              oo
              </Text>
              g
              <Text style={{
                fontWeight: 'bold' , 
                fontFamily: 'Times New Roman',
                fontStyle:'italic', 
                fontSize: 80, 
                textAlign:'center',
                color:'hotpink', 
                lineHeight: 1150,
                height: 800,
                bottom: -100
              }}>
              le
              </Text>
            </Text>
            </View>
            </View>
              <TextInput style={styles.searchInput}
                placeholder="Type Here..."
                onChangeText={(text: string) => setSearch(text)}
                value={search}
                autoCapitalize='none'
              />
        </View>
    </SafeAreaView>
  </ImageBackground>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'    
  },
  searchInput: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    bottom: -100
  },
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50, 
      bottom: 250
  },
  SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: 'black',
      height: 40,
      borderRadius: 5 ,
      margin: 10,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40, 
      borderBottomRightRadius: 40, 
      borderBottomLeftRadius: 40, 
      borderStyle: 'solid', 
      width: 300, 
      bottom: -350,
      marginBottom: 400,
      alignContent: 'center', 
      textAlign: 'center'
    },
    ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'
    },
    ImageB:{
      flex: 2,
      justifyContent: "center",
      resizeMode: "cover", 
      width: 400,
      height: 900,
    }
});

export default HomeScreen
