import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Empezamos {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
