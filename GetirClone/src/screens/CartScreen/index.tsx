import React from "react";
import { View, Text, FlatList } from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
function index() {
  return (
    <FlatList
      data={productsGetir.slice(7, 8)}
      renderItem={({ item }) => <CartItem product={item} />}
    />
  );
}

export default index;
