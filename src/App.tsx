import { ContextProvider } from './contextApi'
import { Routing } from './router'

function App() {

  return (
    <>
      <ContextProvider>

        <Routing />
      </ContextProvider>
    </>
  )
}

export default App
