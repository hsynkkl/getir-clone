import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { Image, Text, View, TouchableOpacity } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
