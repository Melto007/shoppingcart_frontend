import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/Home/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />
    }
  ])
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
