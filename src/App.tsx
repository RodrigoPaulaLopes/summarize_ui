import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { create } from "./redux/user/slice"
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
    <>
      <h1>hello world</h1>
      <p>{user.first_name + ' ' + user.last_name}</p>
      <p>{user.email}</p>
      <button onClick={handleLogin}>click</button>
    </>
  )
}

export default App
