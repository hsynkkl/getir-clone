import React, { useState } from "react";
import { ScrollView, View, Text, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";
const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 9,
        },
        item.name === active.name && {
          borderBottomColor: "#ffd00c",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, fontWeight: "600", color: "white" }}>
        {item.name}
      </Text>
    </View>
  );
};
function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.055,
      }}
    >
      {categories.map((item) => (
        <CategoryBox item={item} active={category} key={item.id} />
      ))}
    </ScrollView>
  );
}

export default index;
