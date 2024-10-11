import { appColors } from "@/src/util/colors";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="pantanal" options={{
                headerStyle: {
                    backgroundColor: appColors.defaultBlue,
                },
                headerTintColor: '#fff',
                title: 'Pantanal'
            }} />
        </Stack>
    )
}