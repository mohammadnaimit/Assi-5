

import { Suspense, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies-section/Technologies"
import StackPanel from "./components/StackPanel"

const fetchTechnologies = async () => {
  const response = await fetch("/technologies.json")
  const data = await response.json()
  return data
}

const technologiesPromise = fetchTechnologies()

function App() {
  const [stack, setStack] = useState([])

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.info(`${technology.name} is already in your stack.`)
      return
    }

    setStack((currentStack) => [...currentStack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (technologyId) => {
    const removedTechnology = stack.find((item) => item.id === technologyId)
    setStack((currentStack) => currentStack.filter((item) => item.id !== technologyId))
    if (removedTechnology) {
      toast.error(`${removedTechnology.name} removed from your stack.`)
    }
  }

  const removeAllFromStack = () => {
    if (stack.length > 0) {
      setStack([])
      toast.error("All technologies removed from your stack.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar />
      <Navbar />
      <Hero />
      <main className="bg-white">
        <section className="mx-auto my-6 w-11/12 max-w-7xl bg-white">
            <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">
              Pick the technology that fits your project and build your ideal stack.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Technologies technologiesPromise={technologiesPromise} onAdd={addToStack} stack={stack} />
            </Suspense>
            <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAllFromStack} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
