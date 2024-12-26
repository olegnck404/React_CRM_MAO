import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from '@pages/home/Home'
import { Tasks } from '../pages/tasks/Tasks'
import { About } from '../pages/about/About'
import './App.css';
import { NavigationPanel } from '../modules/navigation/NavigationPanel'
import { StorageProvider } from '../providers/StorageProvider'

function App() {
  return (
    <BrowserRouter>
      <NavigationPanel />
      <StorageProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </StorageProvider>
    </BrowserRouter>
  )
}

export default App
