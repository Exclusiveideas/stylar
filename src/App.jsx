import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Four04 from './pages/404'

function App() {


  return (
    <>
      <Header />
      <HeaderCompensator />
      {/* <Products /> */}
      {/* <Home /> */}
      {/* <Product /> */}
      <Four04 />
      <Footer />
    </>
  )
}

export default App


const HeaderCompensator = () => (
  <div style={{ width: '100vw', height: '60px'}}></div>
)