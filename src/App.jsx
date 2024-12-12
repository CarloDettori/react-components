import { useState } from 'react'
import Header from './components/headerController'
import Footer from './components/footerController'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
