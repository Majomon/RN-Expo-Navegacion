import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";

const HomeScreen = () => {
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
            Hola mundo
          </CustomButton>
        </Link>

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
