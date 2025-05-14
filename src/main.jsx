import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <QueryClientProvider client={queryClient}>
              <MantineProvider>
                  <AuthProvider>
                      <RouterProvider router={router} />
                  </AuthProvider>
              </MantineProvider>
          </QueryClientProvider>
      </ThemeProvider>
  </StrictMode>,
)
