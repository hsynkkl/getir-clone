import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
function index(props) {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route.params.product);
    console.log("our product is: ", product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={"#5d3ebd"} />;
  }
  return (
    <View>
      <ImageCarousel images={product.images}></ImageCarousel>
    </View>
  );
}

export default index;
