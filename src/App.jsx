import { Toaster } from 'react-hot-toast'
import './App.css'
import Approuter from './Router/Approuter'

function App() {
  
  return (
    <>
     <Approuter/>
     <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App
