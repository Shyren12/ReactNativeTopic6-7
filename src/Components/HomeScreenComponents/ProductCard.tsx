import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
  ImageBackgroundComponent,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { IProductsProps } from "../../TypesCheck/ProductTypes";

export const ProductCard = ({
  item,
  productProps,
  pStyleProps,
}: IProductsProps) => {
  return (
    <View
      style={
        sty(
          pStyleProps?.width,
          pStyleProps?.marginBottom,
          pStyleProps?.marginHorizontal
        ).pCardContainer
      }
    >
      <ImageBackground
        source={{ uri: productProps?.imageBg }}
        style={styl(pStyleProps?.height).imageBg} imageStyle={{borderRadius:6}}>
            <Pressable key={item._id} onPress={productProps?.onPress} style={{alignItems:"center"}}>
                <Image source={{ uri: item?.images[0] }} style={{resizeMode: pStyleProps?.resizeMode, height:"100%", width:70}}/>
            </Pressable>
      </ImageBackground>
      <Text style={{textAlign:"center", fontSize:12, fontWeight:"500", marginBottom:5}}>{item?.name}</Text>
      {productProps?.percentageWidth !== undefined && 
        <>
            <View style={{marginTop:12}}>
                <text style={{fontSize:12}}>{item?.quantity} items left</text>
            </View>
            <View style={sty().progressBarContainer}>
                <View style={sst(productProps?.percentageWidth? 0 :1).progressBar}/>
            </View>
        </>
      }
    </View>
  );
}

const sty = (width?: number, marginBottom?: number, marginHorizontal?: number, percentageWidth?: number) =>({
    pCardContainer: {
        width,
        marginHorizontal,
        borderWidth: 1,
        borderColor: "grey",
        marginBottom,
        borderRadius: 10,
        backgroundColor: "white",
    },
    imageBg: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    progressBarContainer: {
        width: 100,
        height: 6,
        backgroundColor: "silver",
        borderRadius: 99,
        marginTop: 5,
    },
})

const sst = (percentageWidth?: number) => ({
    progressBar: {
        width: percentageWidth? percentageWidth : 100,
        height: 5,
        backgroundColor: "green",
        borderRadius: 5,
    },
})

const styl = (height?: number) => ({
    imageBg: {
        height,
        borderRadius:10,
    },
})
