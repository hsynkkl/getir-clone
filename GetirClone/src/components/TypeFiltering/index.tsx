import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { height, width } = Dimensions.get("window");
const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 10,
          marginRight: 12,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 8,
          height: height * 0.044,
        },
        item == active
          ? { backgroundColor: "#5c3ebc" }
          : { borderColor: "#f0eff7", borderWidth: 1 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849f7", fontWeight: "600" },
          item == active ? { color: "white" } : {},
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};
function index() {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "white",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
}

export default index;
