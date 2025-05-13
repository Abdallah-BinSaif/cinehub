import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <MantineProvider>
              <AuthProvider>
                  <RouterProvider router={router} />
              </AuthProvider>
          </MantineProvider>
      </ThemeProvider>
  </StrictMode>,
)
