import React from "react";
import { View, Text, Dimensions } from "react-native";
type DetailsBoxProps = {
  price: number;
  name: string;
  quantity: string;
};
const { width, height } = Dimensions.get("window");
function index({ price, name, quantity }: DetailsBoxProps) {
  return (
    <View
      style={{ width: width, backgroundColor: "white", alignItems: "center" }}
    >
      <Text
        style={{
          color: "#5d3ebd",
          fontWeight: "bold",
          marginTop: 12,
          fontSize: 20,
        }}
      >
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text
        style={{
          fontWeight: "600",
          marginTop: 12,
          fontSize: 16,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "600",
          marginTop: 8,
          fontSize: 16,
          paddingBottom: 14,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
}

export default index;
