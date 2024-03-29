import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../screens/Photo";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Me from "../screens/Me";
import { Image } from "react-native";

const Stack = createStackNavigator();
export default function SharedStackNav({ screenName }) {
    return (
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: {
            borderBottomColor: "rgba(255, 255, 255, 0.3)",
            shadowColor: "rgba(255, 255, 255, 0.3)",
            backgroundColor: "black",
          },
        }}
      >
        {screenName === "Feed" ? (
                    <Stack.Screen
                    name={"Feed"}
                    component={Feed}
                    options={{
                      headerTitle: () => (
                        <Image
                          style={{
                            width: 120,
                            height: 40,
                          }}
                          resizeMode="contain"
                          source={require("../assets/logo.png")}
                        />
                      ),
                    }}
                  />
                ) : null}
                {screenName === "Search" ? (
                  <Stack.Screen name={"Search"} component={Search} />