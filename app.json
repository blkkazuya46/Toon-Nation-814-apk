import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

export default function App() {
  const webUrl =
    Constants?.expoConfig?.extra?.webUrl ||
    'https://toon-nation-814.onrender.com';

  const topPad = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: topPad, backgroundColor: '#000' }}>
      <WebView
        source={{ uri: webUrl }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        mixedContentMode="always"
        allowsFullscreenVideo
        originWhitelist={['*']}
      />
    </SafeAreaView>
  );
}
