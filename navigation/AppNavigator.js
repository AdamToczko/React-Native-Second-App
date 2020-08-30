import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { ProductsNavigator } from "./ShopNavigator";

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ProductsNavigator />
        </NavigationContainer>
    );
};
