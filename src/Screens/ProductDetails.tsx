import {View, Image, Text, Platform, ScrollView, SectionList, Dimensions, Pressable, Alert, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import { RootStackParams, RootStackScreenProps } from '../Navigation/RootNavigator'
import { HeadersComponent } from '../Components/HeaderComponents/HeaderComponent'
import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

const {width, height} = Dimensions.get("window");

const ProductDetails =({navigation, route}: RootStackScreenProps<"productDetails">)=>{
    const {_id,images, name, price,oldPrice, color, inStock, size, description, quantity} = route.params;
    const gotoCartScreen =()=>{
        navigation.navigate("Cart")

}
const gotoPreviousScreen =()=>{
    if(navigation.canGoBack()){
        console.log(" chuyển về trang trước");
        navigation.goBack();
    } else {
        console.log(" ko thể quay lại, chuyển về trang onboarding");
        navigation.navigate("OnboardingScreen");
    }};

    return(
        <SafeAreaView style={{paddingTop: Platform.OS === 'android' ?20: 0, flex:1, backgroundColor:"white"}}>
            <HeadersComponent gotoCartScreen = {gotoCartScreen} goToPrevious={gotoPreviousScreen}/>
            <ScrollView style={{backgroundColor:"white"}}>
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <ImageBackground style={{width, height, marginTop:25}}>
                        <View style={{padding: 3, flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                            <View style={{width: 40, height:40, borderRadius: 20, backgroundColor:"#C60C30", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <Text style={{color: "silver", textAlign: "center",fontWeight: "600", fontSize: 12}}>
                                    {oldPrice ? ((1-price/oldPrice)*100).toFixed(1):0} %off
                                </Text>
                            </View>
                            <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor:"#E0E0E0", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <MaterialCommunityIcons name='share-variant' size={25} color="green"/>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center",paddingLeft:20}}>
                            <Image style={{width:300, height:300, resizeMode:"contain"}} source={{uri:images[0]}}/>
                        </View>
                        <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor:"#E0E0E0", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"auto", marginBottom:1000, marginLeft:20}}>
                            <AntDesign style={{paddingLeft:0, paddingTop: 2}} name='heart' size={25} color="grey"/>
                        </View>
                    </ImageBackground>
                </ScrollView> 
                <View style={{backgroundColor:"blue",borderColor:"purple",borderWidth: 8,width,position:"absolute",top:420, padding:10}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 10, color: "white"}}>{name}</Text>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 10, color: "white"}}>{description}</Text>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 10, color: "white"}}>Price: {price} VND</Text>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 10, color: "white"}}>Old Price: {oldPrice} VND</Text>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 10, color: "white"}}>{quantity>0?`InStock-Quantity:${quantity}`:"out of Stock"}</Text>
                    <Text style={{fontSize: 16, fontWeight: "bold", marginTop: 10, color: "white"}}>Size: {size}</Text>
                    <Text style={{fontSize: 16, fontWeight: "bold", marginTop: 10, color: "white"}}>Color: {color}</Text>
                </View>
                <View style={{marginTop:10, marginHorizontal:6}}>
                    <Text style={{fontSize: 14, color:"red"}}> Delivervy</Text>
                </View>
                    <View style={{backgroundColor:"red",borderColor:"orange", borderWidth:8, width, padding:10}}>
                        
                        <Ionicons name='location-sharp' size={25} color="green"/>
                        <Text style={{fontSize:14}}>Thanh Thais 7/1</Text>
                    </View>
            </ScrollView>
            <SafeAreaView style={{backgroundColor:"red", borderColor:"orange", paddingTop: Platform.OS === 'android' ?20: 0, flex:1}}>
                <HeadersComponent gotoCartScreen={gotoCartScreen} goToPrevious={gotoPreviousScreen}/>
                <ScrollView style={{backgroundColor:"pink"}}></ScrollView>
            </SafeAreaView>
            <View style={{backgroundColor:"yellow",paddingBottom:0}}>
                <Pressable style={{backgroundColor:"green"}}onPress={()=>Alert.alert("add to cart")}>
                    <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 10, color: "white", textAlign:"center", paddingVertical:10}}>Add to Cart</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}

export default ProductDetails;