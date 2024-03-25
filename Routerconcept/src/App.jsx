import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Layout/>
      </div>
      
    </>
  )
}

export default App
