import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";

export default function App() {
  // Use value from app.json -> expo.extra.webUrl (with safe fallback)
  const webUrl =
    Constants?.expoConfig?.extra?.webUrl ||
    "https://toon-nation-814.onrender.com";

  const padTop = Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: padTop, backgroundColor: "#000" }}>
      <WebView
        source={{ uri: webUrl }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        mixedContentMode="always"
        allowsFullscreenVideo
        originWhitelist={["*"]}
      />
    </SafeAreaView>
  );
}


