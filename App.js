import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import { AppNavigator } from "./navigation/AppNavigator";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

const rootReducer = combineReducers({
    products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading onError={(err) => console.log(err)} />;
    } else {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}
