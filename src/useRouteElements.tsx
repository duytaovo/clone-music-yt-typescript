import path from 'src/constants/path'
import { lazy, Suspense, useContext, useMemo, useRef } from 'react'
import { Outlet, Route, RouteObject, Routes, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Test from './pages/Test'
// import Home from './pages/Home'
// import Player from './pages/Player'
// import NotFound from './pages/NotFound'
import { AppContext } from './contexts/app.context'
import { toast } from 'react-toastify'
import Profile from './pages/User/pages/Profile'

const Home = lazy(() => import('./pages/Home'))
const Player = lazy(() => import('./pages/Player'))
const NotFound = lazy(() => import('./pages/NotFound'))

const routeMain = [
  {
    path: path.home,
    Component: Home
  },
  {
    path: path.playlist,
    Component: Player
  },
  // {
  //   path: path.test,
  //   Component: Test
  // },
  {
    path: '*',
    Component: NotFound
  }
]

const routeUser = [
  {
    path: path.profile,
    Component: Profile
  }
]

function ProtectedRoute() {
  const { isAuthenticated, setOpenModal } = useContext(AppContext)

  return isAuthenticated ? <Outlet /> : toast.error('Vui lòng đăng nhập !!!')
}

export default function useRouteElements() {
  const renderRouter = useMemo(() => {
    return routeMain.map(({ path, Component }, index) => {
      let Page = Component
      return (
          <Route
          key={index}
            path={path}
            element={
              <Suspense>
                <Page />
              </Suspense>
            }
          />
      )
    })
  }, [path])

  const renderRouterUser = useMemo(() => {
    return routeUser.map(({ path, Component }, index) => {
      return <Route path={path} element={<Component />} key={index} />
    })
  }, [path])

  const routeElements = (
    <>
      <Routes>
        <Route path='' element={<MainLayout />}>
          {renderRouter}
        </Route>
        <Route path={path.user} element={<MainLayout />}>
          {renderRouterUser}
        </Route>
      </Routes>
    </>
  )
  return routeElements
}
