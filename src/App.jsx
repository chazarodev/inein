import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/layout'
import Inicio from './pages/Inicio'
import Nosotros from  './pages/Nosotros'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import Blog from './pages/Blog'
import Partners from './pages/Partners'
import Contacto from './pages/Contacto'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />}/>
          <Route path='nosotros' element={<Nosotros />}/>
          <Route path='servicios' element={<Servicios />}/>
          <Route path='proyectos' element={<Proyectos />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='partners' element={<Partners />}/>
          <Route path='contacto' element={<Contacto />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
