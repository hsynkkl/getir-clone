import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#F7D102",
  },
  headerOne: {
    backgroundColor: "white",
    width: "80%",
    height: height * 0.064,
    flexDirection: "row",

    alignItems: "center",
    paddingHorizontal: "2%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    borderLeftColor: "#f3f2fd",
    paddingLeft: 8,
    borderLeftWidth: 2,
  },
  image: { height: 30, width: 30 },
  headerTwo: {
    width: "20%",
    // backgroundColor: "black",
    height: height * 0.064,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 18,
  },
});
export default styles;
