import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';

// EAS runs Expo's JavaScript bundling phase even though Korra's app UI and
// emulator activities are implemented natively in Kotlin.
function KorraBundleEntry() {
  return React.createElement(View, { style: { flex: 1 } });
}

registerRootComponent(KorraBundleEntry);
