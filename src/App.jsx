import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Meme from "./components/Meme"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-w-full min-h-screen bg-zinc-900">
        <div className="container flex items-center justify-center px-6 md:px-12">
          <Meme />
        </div>
      </main>
    </QueryClientProvider>
  )
}

export default App
