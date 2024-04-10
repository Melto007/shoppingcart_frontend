import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NextUIProvider, User } from '@nextui-org/react'
import store from './store/store'
import Home from './pages/Home/Home'
import Laptop from './pages/Laptop/Laptop'
import RootPage from './pages/RootPage'
import Smartphones from './pages/Smartphone/Smartphones'
import Cameras from './pages/Camera/Cameras'
import Accessories from './pages/Accessories/Accessories'
import Account from './pages/User/Account'
import DetailProduct from './pages/Product/DetailProduct'
import UserAuth from './pages/User/UserAuth'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootPage />,
      children: [
        {
          path: 'login',
          element: <UserAuth />
        },
        {
          path: ':pk',
          element: <DetailProduct />
        },
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
          element: <ProtectedRoute><Account /></ProtectedRoute>
        }
      ]
    }
  ])
  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <RouterProvider router={router} />
            {/* <MenuBar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='login' element={<UserAuth />}></Route>
              <Route path='account' element={
                <ProtectedRoute>
                    <Account />
                </ProtectedRoute>
              }>
                <Route path=':pk' element={<Account />}></Route>
              </Route>
              <Route path='laptop' element={<Laptop />}>
                <Route path=':pk' element={<DetailProduct />}></Route>
              </Route>
              <Route path='smartphone' element={<Smartphones />}></Route>
              <Route path='camera' element={<Cameras />}></Route>
              <Route path='accessories' element={<Accessories />}></Route>
              <Route path=':pk' element={<DetailProduct />}></Route>
            </Routes> */}
        </NextUIProvider>
      </Provider>
    </>
  )
}

export default App
