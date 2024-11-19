import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          // variant="text-only"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="terciary"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href={"/products"} asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
