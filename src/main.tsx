import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

import { App } from "./App";
import { chains, config } from "./wagmi";

// 2. Add your color mode config
const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ themeConfig })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>        
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>,
);