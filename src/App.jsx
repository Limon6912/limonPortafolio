import { Container } from './components/Container.jsx'
import { Header } from './components/header/Header.jsx'
import { MainContent } from './components/main/MainContent.jsx'
import { Footer } from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <MainContent />
      </Container>
      <Footer />
    </>


  )
}

export default App
