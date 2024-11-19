import { Link, Redirect } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const App = () => {
  return <Redirect href={"/home"} />;
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text style={{ fontFamily: "WorkSans-Black" }} className="text-5xl ">
  //         Hola mundo!!!
  //       </Text>
  //       <Text className="text-4xl font-work-black text-primary">
  //         Hola mundo!!!
  //       </Text>
  //       <Text className="text-3xl font-work-medium text-secondary">
  //         Hola mundo!!!
  //       </Text>
  //       <Text className="text-2xl font-work-light text-secondary-100 ">
  //         Hola mundo!!!
  //       </Text>
  //       <Text className="text-xl text-terciary">Hola mundo!!!</Text>

  //       <Link href={"/productsindex"}>Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
