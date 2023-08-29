import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Product } from "../../models";
type CartItemProps = {
  product: Product;
};
const { width, height } = Dimensions.get("window");
function index({ product }: CartItemProps) {
  return (
    <View
      style={{
        height: height * 0.13,
        flexDirection: "row",
        paddingHorizontal: width * 0.04,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: product.image }}
          style={{ height: height * 0.09, width: height * 0.09 }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontSize: 13, fontWeight: "600" }}>
            {product.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#848897",
              fontWeight: "600",
              marginTop: 3,
            }}
          >
            {product.miktar}
          </Text>
          <Text
            style={{
              color: "#5d3ebd",
              fontWeight: "bold",
              marginTop: 6,
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            {product.fiyat}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width * 0.21,
          backgroundColor: "whitegray",
          borderWidth: 0.5,
          height: height * 0.037,
          borderRadius: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>-</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#5d3ebd",
            height: height * 0.037,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
            2
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>+</Text>
        </View>
      </View>
    </View>
  );
}

export default index;