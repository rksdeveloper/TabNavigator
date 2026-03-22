import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { color } from 'react-native'
const Tabslayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "green",
            tabBarStyle: {
                backgroundColor: "#1e293b",
                borderTopWidth: 1,
                borderTopColor: "yellow",
                height: 90,
                paddingBottom: 30,
                paddingTop: 10,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600",
            },
            headerShown: false,
        }}>
            <Tabs.Screen name='index' options={{
                title: "Todos", tabBarIcon: ({ color, size }) => (
                    <Ionicons name='flash-outline' size={size} color={color} />
                )
            }}
            />
            <Tabs.Screen name='settings' options={{
                title: "Settings", tabBarIcon: ({ color, size }) => (
                    <Ionicons name='settings' size={size} color={color} />
                )
            }}
            />
            <Tabs.Screen name='chats' options={{
                title: "chats", tabBarIcon: ({ color, size }) => (
                    <Ionicons name='chatbubble' size={size} color={color} />
                )
            }}
            />
            <Tabs.Screen name='updates' options={{
                title: "updates", tabBarIcon: ({ color, size }) => (
                    <Ionicons name='notifications' size={size} color={color} />
                )
            }}
            />
            <Tabs.Screen name='calls' options={{
                title: "calls", tabBarIcon: ({ color, size }) => (
                    <Ionicons name='call' size={size} color={color} />
                )
            }}
            />
            <Tabs.Screen name='communities' options={{
                title: "communities", tabBarIcon: ({ color, size }) => (
                    <Ionicons name='people' size={size} color={color} />
                )
            }}
            />
        </Tabs>
    )
}

export default Tabslayout
