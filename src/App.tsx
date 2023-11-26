import { Hero } from './components/Hero/Hero'
import { Layout } from './components/Layout/Layout'
import { Prolouge } from './components/Prolouge/Prolouge'
import { WordingQuote } from './components/WordingQuote/WordingQuote'

function App() {
  return (
    <Layout>
      <Hero />
      <Prolouge />
      <WordingQuote />
    </Layout>
  )
}

export default App
