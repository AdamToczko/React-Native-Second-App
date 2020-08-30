import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import { ProductsOverviewScreen } from "../screens/shop/ProductsOverviewScreen";
import { ProductDetailScreen } from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const Stack = createStackNavigator();

export const ProductsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen
                name="Products Overview"
                component={ProductsOverviewScreen}
                // options={productsOverviewScreenOptions}
            />
            <Stack.Screen
                name="Product Detail"
                component={ProductDetailScreen}
                // options={productsOverviewScreenOptions}
            />
            {/* <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={cartScreenOptions}
            /> */}
        </Stack.Navigator>
    );
};
