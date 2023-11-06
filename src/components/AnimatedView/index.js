import { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";

export default function AnimatedView(props) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {});
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
