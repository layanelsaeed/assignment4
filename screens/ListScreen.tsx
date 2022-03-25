import React , {PureComponent, useState}  from 'react'; 
import {StyleSheet, Text, TouchableOpacity, View, FlatList, StatusBar, Image} from 'react-native'; 
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { useEffect } from 'react';
import * as axios from 'axios'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements'; 
import Carousel from 'react-native-snap-carousel'; 


const Item = ({name, title , address, image}) => {
    return(
        <View>
        <Card containerStyle={{ justifyContent: "center" }}>
            <Carousel
              data={image}
              renderItem={showImage}
              sliderWidth={327}
              itemWidth={300}
            />
            <Card.Divider />
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
            <Text>{title}</Text>
        <Text>{address}</Text>
        </Card>
    </View>
)
};

const showImage = ({item, index}) => {
    return (
        <View style={{
            justifyContent: 'center',
            width:300,
            height:300, 
            borderRadius: 5
        }}>
        <Image style= {{resizeMode: 'contain', width: 300, height:300}}
            source={item ? { uri: item }: require('../assets/112815904-no-image-available-icon-flat-vector-illustration.webp')}
        /> 
        </View>
    );
}

const ListScreen = () => {
    const route = useRoute<RouteProps>();
    const { term } = route.params;
    const [universities, setUniversity] = useState<University[]>();

  useEffect(() => {
    Promise.all([
      axios.default.get(`http://localhost:3000/universities/${term}`),
    ])
      .then(([{ data: universitiesResults }]) => {
        if (universitiesResults) setUniversity(universitiesResults);
      });
  }, []); 

  const renderItem = ({ item }) => (
    <Item title={item.name}  address= {item.addressFmt} image= {item.image}/>
  );


    return (
        <SafeAreaView>
            <View style = {styles.container}> 
                <FlatList
                    data= {universities}
                    renderItem= {renderItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
})

type NavProps = {
    term: string;
};  
type RouteParams = {
    term: string;
};
type RouteProps = {
    params: RouteParams
    name: string;
    key: string;
};  
type University = {
    name: string;
    lat: number;
    lng: number;
    addressFmt: string; 
    image: Array<string>
};

export default ListScreen 
