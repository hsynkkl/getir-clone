import React from "react";
import { TouchableOpacity, Image, Text, Dimensions, View } from "react-native";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
type categoryItemProps = {
  item: Category;
};
function index({ item }: categoryItemProps) {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#e0e0e0" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CategoryDetails", { category: item });
        }}
        style={{
          width: width * 0.25,
          height: width * 0.24,
          marginTop: 10,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            width: width * 0.18,
            height: width * 0.18,
            borderRadius: 8,
            //   resizeMode: "center",
          }}
          source={{
            uri: item.src,
          }}
        />
        <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default index;
