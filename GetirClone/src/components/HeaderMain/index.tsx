import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", marginLeft: 6, fontSize: 16 }}>
            Ev
          </Text>
          <Text
            style={{
              fontSize: 11.5,
              color: "#6e7480",
              marginLeft: 6,
              fontWeight: "500",
              marginRight: 4,
            }}
          >
            Alibeyköy Cad. Esentepe Mah. Uçak ...
          </Text>
          <Entypo name="chevron-right" size={22} color={"#5d3ebd"}></Entypo>
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5d3ebd" }}>
            TVS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5d3ebd" }}>
            13{""}
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#5d3ebd" }}
            >
              dk
            </Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}
// "
export default index;
