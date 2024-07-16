import "./globals.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from 'sonner'
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";


export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizadash-theme" defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          <Helmet titleTemplate="%s | PizzaDash" />
          <Toaster closeButton />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
