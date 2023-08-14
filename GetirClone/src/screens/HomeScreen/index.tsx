import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";
import MainCategories from "../../components/MainCategories";

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}
export default index;
