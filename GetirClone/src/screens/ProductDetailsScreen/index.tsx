import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailsBox from "../../components/DetailsBox";
import DetailsProperty from "../../components/DetailsProperty";
import CardButton from "../../components/CardButton";
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
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product.images}></ImageCarousel>
        <DetailsBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: "#808B99",
            fontWeight: "600",
          }}
        >
          Detaylar
        </Text>
        <DetailsProperty></DetailsProperty>
      </ScrollView>

      <CardButton></CardButton>
    </View>
  );
}

export default index;
