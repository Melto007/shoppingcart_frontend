import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'
import store from './store/store'
import Home from './pages/Home/MenuBar'
import About from './pages/Home/About'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />,
      children: [
        {
            path: 'about',
            element: <About />
        }
      ]
    }
  ])
  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </Provider>
    </>
  )
}

export default App
