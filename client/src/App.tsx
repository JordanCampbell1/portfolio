import { ThemeProvider } from './lib/ThemeProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Leadership } from './components/sections/Leadership'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
