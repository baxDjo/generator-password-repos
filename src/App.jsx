import { useState } from 'react'
import OtpGenerator from './OtpGenerator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OtpGenerator/>
    </>
  )
}

export default App
