import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OtpGenerator from './OtpGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OtpGenerator/>
    </>
  )
}

export default App
