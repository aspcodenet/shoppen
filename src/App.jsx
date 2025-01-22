import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Products from './components/Products'
import Buy from './components/Buy'

function App() {

  const [times,setTimes] = useState(500)
    
  return (
    <>
      <Header times={times}></Header>
      <Main></Main>
      <Products></Products>
      <Buy></Buy>

      <Footer times={times} setTimesFunc={setTimes} hello="asddsa"></Footer>
    </>
  )
}

export default App
