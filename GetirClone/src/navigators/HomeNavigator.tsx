import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { Image, Text, View, TouchableOpacity, Dimensions } from "react-native";

import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
const Stack = createStackNavigator();
const { width, height } = Dimensions.get("window");
function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails"];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <View
              style={{
                marginLeft: "53%",
              }}
            >
              <Image
                source={require("../../assets/getirlogo.png")}
                style={{
                  width: 70,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTintColor: "white",

          headerTitle: () => (
            <View
              style={{
                marginLeft: "45%",
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Ürünler</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CartScreen")}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              ></View>
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: "#f3effe",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 12 }}
                >
                  <Text>{"\u20BA"}</Text>1224,00
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTintColor: "white",
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 12 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <Foundation name="heart" size={24} color="#32177a " />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "50%",
                fontSize: 15,
              }}
            >
              Ürün Detayı
            </Text>
          ),
        }}
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
