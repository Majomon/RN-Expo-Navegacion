import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "terciary";
}

export const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    terciary: "bg-terciary",
  }[color];

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-90`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};
