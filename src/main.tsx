import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import { ChakraProvider, createSystem, defaultConfig} from "@chakra-ui/react"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: `sans-serif` },
      },
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider value={system}>
        <RouterProvider router={router}/>
      </ChakraProvider>
  </StrictMode>,
)
