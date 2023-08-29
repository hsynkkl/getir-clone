import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");
function index() {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: height * 0.1,
        width: "100%",
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: -10,
          borderRadius: 8,
          height: height * 0.06,
          width: "90%",
          backgroundColor: "#5d39c1",
          marginHorizontal: "5%",
          //   paddingTop: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 14 }}>
          Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default index;
