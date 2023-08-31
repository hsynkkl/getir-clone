import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import ProductContainer from "../../components/ProductContainer";
import { Category } from "../../models";
function CategoryFilterScreen(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
}

export default CategoryFilterScreen;
