import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";
type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};
function index({ item, addItemToCart }: cartButtonType) {
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
        onPress={() => addItemToCart(item)}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 14 }}>
          Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product: product })),
  };
};
export default connect(null, mapDispatchToProps)(index);
