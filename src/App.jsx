import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-bold text-4xl font-Poppins bg-blue-500">
        Advanced Statistics
      </h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
