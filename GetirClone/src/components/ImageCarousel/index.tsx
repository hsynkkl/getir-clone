import React, { useState } from "react";
import { FlatList, Image, View, Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
function index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        height: height * 0.22,
        paddingTop: 0,
      }}
    >
      <FlatList
        data={images}
        renderItem={(item) => (
          <Image
            style={{ width: width * 0.5, height: height * 0.21 }}
            source={{ uri: item.item }}
            resizeMode="stretch"
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        style={{ width: width * 0.5, height: height * 0.21 }}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            width: 30,
            height: 12,
            justifyContent: "space-around",
          }}
        >
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: activeIndex == index ? "#5d3ebd" : "#f2f0fd",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
export default index;
