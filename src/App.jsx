import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {


  return (
    <>
      <Header />
      {/* <HeaderCompensator />
      <Products /> */}
      <Home />
      <Footer />
    </>
  )
}

export default App


const HeaderCompensator = () => (
  <div style={{ width: '100vw', height: '60px'}}></div>
)