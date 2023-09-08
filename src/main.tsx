import { ChakraBaseProvider, } from "@chakra-ui/react";
import { DevSupport, } from "@react-buddy/ide-toolbox";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { themeConfig, } from "share/theme/themeConfig.ts";

import './share/style/index.css'
import App from './App.tsx'
import { ComponentPreviews, useInitial, } from "./dev";

ReactDOM.createRoot(document.getElementById('root',)!,).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={themeConfig}>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <App/>
      </DevSupport>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
