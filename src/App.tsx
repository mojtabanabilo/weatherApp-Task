import './App.css'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import { Box } from '@mui/system'

function App() {
  return (
    <Box className='app-container'>
      {/* <Login /> */}
      <Dashboard />
    </Box>
  )
}

export default App
