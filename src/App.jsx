import { useState } from 'react'
import Header from './components/headerController'
import Footer from './components/footerController'
import Card from './components/cardController'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
