import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
type productItemType = {
  item: Product;
};
function index({ item }: productItemType) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: width * 0.29,
        marginTop: 12,
        height: height * 0.26,
        marginLeft: 12,
        marginBottom: 6,
      }}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderWidth: 0.2,
          borderColor: "gray",
          borderRadius: 12,
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 11.4,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5d3ebd",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "500",
        }}
      >
        {item.miktar}
      </Text>
      <View
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgrey",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
        }}
      >
        <Entypo name="plus" size={22} color="#5d3ebd"></Entypo>
      </View>
    </TouchableOpacity>
  );
}

export default index;
