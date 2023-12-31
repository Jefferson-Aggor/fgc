import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Index, About, Media, Prayer, Youth, Hayil, Dashboard, UpdatesIndex, Newsletters } from "./components/index";
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Index />} />
      <Route path='/about' element={<About />} />
      <Route path='/watch-and-listen' element={<Media />} />
      <Route path='/prayer' element={<Prayer />} />
      <Route path='/youth' element={<Youth />} />
      <Route path='/hayil-ladies' element={<Hayil />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/updates' element={<UpdatesIndex />} />
      <Route path='/dashboard/newsletters' element={<Newsletters />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
