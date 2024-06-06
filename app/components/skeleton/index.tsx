import { useEffect, FC, useRef } from "react";
import { Animated } from "react-native";

interface Props {
  width: number | string;
  height: number | string;
}

const Skeleton: FC<Props> = ({ width, height }) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity?.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity?.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      testID="skeleton-view"
      style={{
        backgroundColor: "gray",
        opacity: opacity?.current,
        width,
        height,
      }}
    ></Animated.View>
  );
};

export default Skeleton;
