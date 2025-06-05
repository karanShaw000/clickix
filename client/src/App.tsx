import { RouterProvider } from "react-router"
import { router } from "./routes"
import { Toaster } from "./components/ui/sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const qureyClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    }
  }
})
function App() {
  return (
    <>
      <QueryClientProvider client={qureyClient}>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </QueryClientProvider>
    </>
  )
}

export default App
