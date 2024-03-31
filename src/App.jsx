import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'
import store from './store/store'
import Home from './pages/Home/Home'
import Laptop from './pages/Laptop/Laptop'
import RootPage from './pages/RootPage'
import Smartphones from './pages/Smartphone/Smartphones'
import Cameras from './pages/Camera/Cameras'
import Accessories from './pages/Accessories/Accessories'
import Account from './pages/User/Account'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'laptop',
          element: <Laptop />
        },
        {
          path: 'smartphone',
          element: <Smartphones />
        },
        {
          path: 'camera',
          element: <Cameras />
        },
        {
          path: 'accessories',
          element: <Accessories />
        },
        {
          path: 'account',
          element: <Account />
        }
      ]
    },
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
