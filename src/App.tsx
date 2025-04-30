import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { create } from "./redux/user/slice"
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import AppRoutes from './routes/router'
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
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
