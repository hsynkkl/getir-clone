import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
const { width, height } = Dimensions.get("window");
function index() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={productsGetir.slice(0, 1)}
          renderItem={({ item }) => <CartItem product={item} />}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5f3ebd" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{
            backgroundColor: "white",
          }}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#f8f8f8",
          // position: "absolute",
          // bottom: 0,
          // width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5d3ebd",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "#f9f9f9",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 16 }}>
            <Text>{"\u20BA"}</Text>24,00
          </Text>
        </View>
      </View>
    </View>
  );
}

export default index;
