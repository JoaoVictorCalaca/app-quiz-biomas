import { Stack } from "expo-router";

export default function layout() {
    return (
        <Stack>
            <Stack.Screen name="pantanal" options={{
                title: 'Pantanal',
            }}/>

            <Stack.Screen name="cerrado" options={{
                title: 'Cerrado'
            }}/>

            <Stack.Screen name="pampa" options={{
                title: 'Pampa'
            }}/>

            <Stack.Screen name="mataAtlantica" options={{
                title: 'Mata Atlântica'
            }}/>

            <Stack.Screen name="caatinga" options={{
                title: 'Caatinga'
            }}/>

            <Stack.Screen name="amazonia" options={{
                title: 'Amazonia'
            }}/>
        </Stack>
    )
}