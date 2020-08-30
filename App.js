import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import { AppNavigator } from "./navigation/AppNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const rootReducer = combineReducers({
    products: productsReducer,
});

const store = createStore(rootReducer);

const ProductsStackNavigator = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
