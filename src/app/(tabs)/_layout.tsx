import { appColors } from "@/src/data/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'white', tabBarStyle: { backgroundColor: appColors.defaultBlack }, headerShown: false }}>
      <Tabs.Screen name="index"
        options={{
          title: 'Quiz',
          tabBarIcon: ({ color }) => <Ionicons name="game-controller" color={color} size={28} />,
        }}
      />

      <Tabs.Screen name="learn"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color }) => <Ionicons name="school" color={color} size={28} />,
        }}
      />
    </Tabs>
  )
}