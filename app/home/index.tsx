import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        <Link href={"/products"} asChild>
          <CustomButton color="primary">Hola mundo</CustomButton>
        </Link>

        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Hola mundo
        </CustomButton>

        {/* <Link className="mb-5" href={"/products"}>
          Productos
        </Link>
        <Link className="mb-5" href={"/profile"}>
          Perfil
        </Link>
        <Link className="mb-5" href={"/settings"}>
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;