import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio Screen" }} />
      <Stack.Screen
        name="products/index"
        options={{ title: "Productos Screen", animation: "ios_from_right" }}
      />
      <Stack.Screen name="profile/index" options={{ title: "Perfil Screen" }} />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Ajustes Screen" }}
      />
    </Stack>
  );
};

export default StackLayout;
