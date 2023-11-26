import { Hero } from './components/Hero/Hero'
import { Layout } from './components/Layout/Layout'
import { Moments } from './components/Moments/Moments'
import { Prolouge } from './components/Prolouge/Prolouge'
import { WordingQuote } from './components/WordingQuote/WordingQuote'

function App() {
  return (
    <Layout>
      <Hero />
      <Prolouge />
      <WordingQuote />
      <Moments />
    </Layout>
  )
}

export default App
