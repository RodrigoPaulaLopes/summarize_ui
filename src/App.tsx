import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { create } from "./redux/user/slice"
import Login from './pages/Login'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
function App() {

  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()


  const handleLogin = () => {

    dispatch(create({
      first_name: "Rodrigo",
      last_name: "Lopes",
      email: "rodrigo.plopesti@gmail.com"
    }))
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  )
}

export default App
