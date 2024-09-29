import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import ChipSet from "./components/ChipSet"

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <ChipSet/>
    </main>
  )
}

export default App